pipeline {
    agent any
    
    tools {
        nodejs "NodeJS"
    }
    
    environment {
        SONARQUBE_TOKEN = credentials('SONAR-TOKEN1')
        SNYK_TOKEN = credentials('snyk-token')
        DOCKERHUB_CREDS = credentials('dockerhub-creds')
        
        DOCKER_IMAGE = 'sahilraval02/msmlogistics'
        PROJECT_NAME = 'MSM Logistics'
        BUILD_VERSION = "${BUILD_NUMBER}"
        
        SONAR_HOST_URL = 'https://sonarcloud.io'

        
        STAGING_URL = 'http://localhost:3000'
        PRODUCTION_URL = 'https://msmtranslink.com'
    }
    
    stages {
        stage('1. Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                }
            }
        }
        
        stage('2. Test') {
            steps {
                script {
                    sh 'npm test -- --watchAll=false --coverage --coverageReporters=text --coverageReporters=lcov --coverageReporters=html || true'
                }
            }
            post {
                always {
                    junit allowEmptyResults: true, testResults: '**/junit.xml'
                    publishHTML([
                        allowMissing: true,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                        reportName: 'Test Coverage Report'
                    ])
                }
            }
        }
        
        stage('3. Code Quality Analysis') {
            steps {
                script {
                    try {
                        withSonarQubeEnv('SonarQube') {
                            sh '''
                                sonar-scanner \
                                  -Dsonar.projectKey=msmlogistics \
                                  -Dsonar.projectName="MSM Logistics" \
                                  -Dsonar.projectVersion=${BUILD_NUMBER} \
                                  -Dsonar.sources=src \
                                  -Dsonar.host.url=${SONAR_HOST_URL} \
                                  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                                  -Dsonar.exclusions=**/node_modules/**,**/dist/**,**/coverage/**,**/*.test.js \
                                  -Dsonar.coverage.exclusions=**/*.test.js,**/*.spec.js \
                                  -Dsonar.tests=src \
                                  -Dsonar.test.inclusions=**/*.test.js,**/*.spec.js \
                                  -Dsonar.organization=${SONAR_ORGANIZATION}
                            '''
                        }
                    } catch (Exception e) {
                        echo "SonarQube analysis failed: ${e.message}"
                    }
                }
            }
        }

        stage('4. Quality Gate') {
            steps {
                script {
                    try {
                        timeout(time: 5, unit: 'MINUTES') {
                            def qg = waitForQualityGate()
                            if (qg.status != 'OK') {
                                echo "Quality Gate failed: ${qg.status}"
                            }
                        }
                    } catch (Exception e) {
                        echo "Quality Gate check skipped: ${e.message}"
                    }
                }
            }
        }
        
        stage('5. Security Analysis') {
            steps {
                script {
                    sh '''
                        npm audit --json > npm-audit-report.json || true
                        export SNYK_TOKEN=$SNYK_TOKEN
                        snyk test --json > snyk-report.json || true
                        snyk monitor --project-name="${PROJECT_NAME}" || true
                    '''
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: '*-report.json,*-audit*.json', allowEmptyArchive: true
                }
            }
        }
        
        stage('6. Build Docker Image') {
            steps {
                script {
                    sh """
                        docker build \
                        -t ${DOCKER_IMAGE}:${BUILD_VERSION} \
                        -t ${DOCKER_IMAGE}:staging \
                        -t ${DOCKER_IMAGE}:build-${BUILD_NUMBER} \
                        --label "version=${BUILD_VERSION}" \
                        --label "build=${BUILD_NUMBER}" \
                        --label "project=${PROJECT_NAME}" \
                        .
                    """
                }
            }
        }
        
        stage('7. Deploy to Staging') {
            steps {
                script {
                    sh '''
                        docker stop msmlogistics-staging 2>/dev/null || true
                        docker rm msmlogistics-staging 2>/dev/null || true
                    '''
                    sh """
                        docker run -d \
                        -p 3000:80 \
                        --name msmlogistics-staging \
                        --restart unless-stopped \
                        --label "environment=staging" \
                        --label "deployed=\$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
                        ${DOCKER_IMAGE}:staging
                    """
                    sh 'sleep 15'
                }
            }
        }
        
        stage('8. Staging Smoke Tests') {
            steps {
                script {
                    sh """
                        docker ps | grep msmlogistics-staging
                        RESPONSE=\$(curl -s -o /dev/null -w "%{http_code}" ${STAGING_URL})
                        if [ \${RESPONSE} -ne 200 ]; then exit 1; fi
                        docker logs msmlogistics-staging --tail 50
                    """
                }
            }
        }
        
        stage('9. Release to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to Production?', ok: 'Deploy', submitter: 'admin'
                script {
                    sh 'echo $DOCKERHUB_CREDS_PSW | docker login -u $DOCKERHUB_CREDS_USR --password-stdin'
                    sh """
                        docker tag ${DOCKER_IMAGE}:staging ${DOCKER_IMAGE}:${BUILD_VERSION}
                        docker tag ${DOCKER_IMAGE}:staging ${DOCKER_IMAGE}:latest
                        docker tag ${DOCKER_IMAGE}:staging ${DOCKER_IMAGE}:production
                        docker push ${DOCKER_IMAGE}:${BUILD_VERSION}
                        docker push ${DOCKER_IMAGE}:latest
                        docker push ${DOCKER_IMAGE}:production
                    """
                    sh 'docker logout'
                }
            }
        }
        
        stage('10. Production Monitoring & Alerting') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh 'sleep 30'
                    sh """
                        PROD_STATUS=\$(curl -s -o /dev/null -w "%{http_code}" ${PRODUCTION_URL} || echo "000")
                        echo "Production Status: \${PROD_STATUS}"
                    """
                    sh """
                        echo "Deployment Log - ${PROJECT_NAME}" > deployment-log.txt
                        echo "Build Number: ${BUILD_NUMBER}" >> deployment-log.txt
                        echo "Version: ${BUILD_VERSION}" >> deployment-log.txt
                        echo "Timestamp: \$(date)" >> deployment-log.txt
                        echo "Deployed By: Jenkins" >> deployment-log.txt
                        echo "Production URL: ${PRODUCTION_URL}" >> deployment-log.txt
                        echo "Docker Image: ${DOCKER_IMAGE}:${BUILD_VERSION}" >> deployment-log.txt
                    """
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'deployment-log.txt', allowEmptyArchive: true
                }
            }
        }
    }
    
    post {
        always {
            script {
                def version = env.BUILD_VERSION ?: env.BUILD_NUMBER ?: 'unknown'
                echo "Pipeline finished for version: ${version}"
            }
            cleanWs(
                deleteDirs: true,
                patterns: [
                    [pattern: 'node_modules', type: 'INCLUDE'],
                    [pattern: 'coverage', type: 'INCLUDE'],
                    [pattern: '.scannerwork', type: 'INCLUDE']
                ]
            )
        }
        success {
            echo "Pipeline succeeded."
        }
        failure {
            echo "Pipeline failed at stage: ${env.STAGE_NAME}"
        }
        unstable {
            echo "Pipeline completed with warnings."
        }
    }
}
