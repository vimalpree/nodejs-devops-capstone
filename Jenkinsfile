pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    environment {
        DOCKER_IMAGE = "vimalpree/nodejs-devops-capstone:${BUILD_NUMBER}"
        DOCKER_LATEST = "vimalpree/nodejs-devops-capstone:latest"
        APP_SERVER_IP = "3.111.186.139"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/nodejs-devops-capstone.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE -t $DOCKER_LATEST .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKER_IMAGE
                        docker push $DOCKER_LATEST
                    '''
                }
            }
        }

        stage('Deploy to App EC2') {
            steps {
                sshagent(['app-server-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@$APP_SERVER_IP '
                            if sudo docker ps -a --format "{{.Names}}" | grep -w "nodejs-capstone-app"; then
                                sudo docker stop nodejs-capstone-app || true
                                sudo docker rm nodejs-capstone-app || true
                            fi

                            sudo docker pull '"$DOCKER_IMAGE"'
                            sudo docker run -d --name nodejs-capstone-app --restart always -p 3000:3000 '"$DOCKER_IMAGE"'
                        '
                    '''
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'curl -I http://$APP_SERVER_IP:3000 || true'
            }
        }
    }

    post {
        always {
            sh 'docker image prune -f || true'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
