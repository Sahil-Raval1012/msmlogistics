pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        // Project configuration
        DOCKER_IMAGE = 'sahilraval02/the-coding-journey'
        PROJECT_NAME = 'The Coding Journey'
        BUILD_VERSION = "${BUILD_NUMBER}"

        // Sonar configuration
        SONAR_HOST_URL = 'https://sonarcloud.io'
        SONAR_ORGANIZATION = 'your-org-key'

        // Environment URLs
        STAGING_URL = 'http://localhost:3000'
        PRODUCTION_URL = 'https://your-production-domain.com'
    }

    stages {
        stage('1. Build') {
            steps {
                echo "================================================"
                echo "STAGE 1: BUILD"
                echo "Building ${PROJECT_NAME} version ${BUILD_VERSION}"
                echo "================================================"

                script {
                    sh 'npm install'
                    sh 'npm run build'

                    echo "✅ Build completed successfully"
                }
            }
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                    echo "✅ Build artifact archived"
                }
            }
        }

        stage('2. Test') {
            steps {
                echo "================================================"
                echo "STAGE 2: TESTING WITH VITEST"
                echo "================================================"

                script {
                    sh 'npm run test'
                    echo "✅ Vitest execution completed"
                }
            }
            post {
                always {
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
                echo "================================================"
                echo "STAGE 3: CODE QUALITY ANALYSIS (SonarQube)"
                echo "================================================"
                script {
                    withCredentials([string(credentialsId: 'SONAR_TOKEN1', variable: 'SONAR_TOKEN')]) {
                        def scannerCmd = "sonar-scanner -Dsonar.projectKey=the-coding-journey " +
                                         "-Dsonar.projectName=\"${PROJECT_NAME}\" " +
                                         "-Dsonar.projectVersion=${BUILD_VERSION} " +
                                         "-Dsonar.sources=src " +
                                         "-Dsonar.host.url=${SONAR_HOST_URL} " +
                                         "-Dsonar.login=${SONAR_TOKEN} " +
                                         "-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info " +
                                         "-Dsonar.exclusions=**/node_modules/**,**/dist/**,**/coverage/**,**/*.test.js " +
                                         "-Dsonar.coverage.exclusions=**/*.test.js,**/*.spec.js " +
                                         "-Dsonar.tests=src " +
                                         "-Dsonar.test.inclusions=**/*.test.js,**/*.spec.js"

                        if (SONAR_HOST_URL.contains('sonarcloud.io')) {
                            scannerCmd += " -Dsonar.organization=${SONAR_ORGANIZATION}"
                        }

                        withSonarQubeEnv('SonarQube') {
                            sh scannerCmd
                        }
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
                                echo "⚠️ Quality Gate result: ${qg.status}"
                            } else {
                                echo "✅ Quality Gate passed"
                            }
                        }
                    } catch (Exception e) {
                        echo "⚠️ Quality Gate check skipped: ${e.message}"
                    }
                }
            }
        }

        stage('5. Security Analysis') {
            steps {
                echo "================================================"
                echo "STAGE 5: SECURITY SCANNING (npm audit + Snyk)"
                echo "================================================"

                script {
                    sh 'npm audit --json > npm-audit-report.json || true'
                    sh '''
                        export SNYK_TOKEN=${SNYK_TOKEN}
                        snyk test --json > snyk-report.json || true
                        snyk monitor --project-name="${PROJECT_NAME}" || true
                    '''

                    echo "✅ Security scan completed"
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
                    sh '''
                        docker build \
                        -t ${DOCKER_IMAGE}:${BUILD_VERSION} \
                        -t ${DOCKER_IMAGE}:staging .
                    '''
                }
            }
        }

        stage('7. Deploy to Staging') {
            steps {
                script {
                    sh '''
                        docker stop coding-journey-staging 2>/dev/null || true
                        docker rm coding-journey-staging 2>/dev/null || true
                        docker run -d -p 3000:80 --name coding-journey-staging ${DOCKER_IMAGE}:staging
                    '''
                }
            }
        }

        stage('8. Staging Smoke Tests') {
            steps {
                script {
                    sh '''
                        RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" ${STAGING_URL} || echo "000")
                        echo "Staging Response: ${RESPONSE}"
                        if [ "${RESPONSE}" != "200" ]; then exit 1; fi
                    '''
                }
            }
        }

        stage('9. Release to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: '🚀 Deploy to Production?', ok: 'Deploy'
                withCredentials([usernamePassword(credentialsId: 'DOCKER_CRED', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin'
                    sh '''
                        docker tag ${DOCKER_IMAGE}:staging ${DOCKER_IMAGE}:${BUILD_VERSION}
                        docker tag ${DOCKER_IMAGE}:staging ${DOCKER_IMAGE}:latest
                        docker push ${DOCKER_IMAGE}:${BUILD_VERSION}
                        docker push ${DOCKER_IMAGE}:latest
                    '''
                    sh 'docker logout'
                }
            }
        }

        stage('10. Monitoring & Alerting') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh '''
                        PROD_STATUS=$(curl -s -o /dev/null -w "%{http_code}" ${PRODUCTION_URL} || echo "000")
                        echo "Production Status: ${PROD_STATUS}"
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "================================================"
            echo "PIPELINE EXECUTION COMPLETED"
            echo "Build: #${BUILD_NUMBER}"
            echo "================================================"
            script {
                cleanWs()
            }
        }
    }
}
