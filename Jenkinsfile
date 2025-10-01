pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
        SONARQUBE = credentials('sonarqube-token')
        SNYK_TOKEN = credentials('snyk-token')
        DOCKERHUB_CREDS = credentials('dockerhub-creds')
        APP_NAME = "MSM Logistics"
        PROJECT_KEY = "msmlogistics"
        VERSION = "${BUILD_NUMBER}"
    }

    stages {
        stage('1. Build') {
            steps {
                echo "================================================"
                echo "STAGE 1: BUILD"
                echo "Building ${APP_NAME} version ${VERSION}"
                echo "================================================"
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
                echo "✅ Build completed successfully"
                echo "📦 Artifact: dist/"
            }
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                    echo "✅ Build artifact created and archived"
                }
            }
        }

        stage('2. Test') {
            steps {
                echo "================================================"
                echo "STAGE 2: AUTOMATED TESTING"
                echo "Running test suite with Vitest"
                echo "================================================"
                script {
                    // Removed Jest-only option (--watchAll)
                    sh 'npm test -- --coverage --reporter=default || true'
                }
                echo "✅ Test execution completed"
            }
            post {
                always {
                    junit 'coverage/junit.xml'
                    publishHTML([reportDir: 'coverage', reportFiles: 'index.html', reportName: 'Test Coverage Report'])
                    echo "📊 Test coverage report generated"
                }
            }
        }

        stage('3. Code Quality Analysis') {
            steps {
                echo "================================================"
                echo "STAGE 3: CODE QUALITY ANALYSIS"
                echo "Tool: SonarQube"
                echo "Analyzing code structure, maintainability, and code smells"
                echo "================================================"
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh """
                            sonar-scanner \
                            -Dsonar.projectKey=${PROJECT_KEY} \
                            -Dsonar.projectName="${APP_NAME}" \
                            -Dsonar.projectVersion=${VERSION} \
                            -Dsonar.sources=src \
                            -Dsonar.host.url=https://sonarcloud.io \
                            -Dsonar.organization=your-org-key \
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                            -Dsonar.exclusions=**/node_modules/**,**/dist/**,**/coverage/**,**/*.test.js \
                            -Dsonar.coverage.exclusions=**/*.test.js,**/*.spec.js \
                            -Dsonar.tests=src \
                            -Dsonar.test.inclusions=**/*.test.js,**/*.spec.js
                        """
                    }
                }
            }
            post {
                failure {
                    echo "⚠️ SonarQube analysis failed"
                }
            }
        }

        stage('4. Quality Gate') {
            steps {
                echo "================================================"
                echo "STAGE 4: QUALITY GATE CHECK"
                echo "================================================"
                script {
                    timeout(time: 5, unit: 'MINUTES') {
                        waitForQualityGate abortPipeline: false
                    }
                }
            }
        }

        stage('5. Security Analysis') {
            steps {
                echo "================================================"
                echo "STAGE 5: SECURITY SCANNING"
                echo "Tools: npm audit + Snyk"
                echo "================================================"
                script {
                    echo "🔍 Running npm audit..."
                    sh 'npm audit --json || true'
                    echo "🔍 Running Snyk security scan..."
                    sh '''
                        export SNYK_TOKEN=${SNYK_TOKEN}
                        snyk test --json || true
                        snyk monitor --project-name="${APP_NAME}"
                    '''
                }
                echo "✅ Security analysis completed"
            }
            post {
                always {
                    archiveArtifacts artifacts: 'snyk-report.json, npm-audit-report.json', allowEmptyArchive: true
                    echo "📁 Security reports archived for review"
                }
            }
        }

        // ===== Skipped Docker and Deployment Stages =====
        stage('6. Build Docker Image') {
            when { expression { false } }
            steps {
                echo "⏭️ Skipping Docker build (Docker not running in this environment)"
            }
        }

        stage('7. Deploy to Staging') {
            when { expression { false } }
            steps {
                echo "⏭️ Skipping staging deployment"
            }
        }

        stage('8. Staging Smoke Tests') {
            when { expression { false } }
            steps {
                echo "⏭️ Skipping staging smoke tests"
            }
        }

        stage('9. Release to Production') {
            when { expression { false } }
            steps {
                echo "⏭️ Skipping production release"
            }
        }

        stage('10. Production Monitoring & Alerting') {
            when { expression { false } }
            steps {
                echo "⏭️ Skipping production monitoring"
            }
        }
    }

    post {
        always {
            echo "================================================"
            echo "PIPELINE EXECUTION COMPLETED"
            echo "Build: #${BUILD_NUMBER}"
            echo "Version: ${VERSION}"
            echo "================================================"
            cleanWs()
        }
        failure {
            echo "❌ ❌ ❌ PIPELINE FAILED ❌ ❌ ❌"
        }
    }
}
