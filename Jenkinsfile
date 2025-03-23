pipeline {
    agent any

    tools {
        nodejs 'NodeJS_20' // Use the name you gave to your Node.js installation
    }

    environment {
        DOCKER_HUB_URL = "https://hub.docker.com/"
        DOCKER_HUB_REPO = "techeducation/techeducation-workshop" // e.g., my-dockerhub-username/my-node-app
        IMAGE_NAME = "sample-node-app"
        IMAGE_TAG = "1.0.0"
        //DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials') // Jenkins credentials ID for Docker Hub
    }

    stages {
        
        stage('Install Dependencies') {
            steps {
                echo "Dependency Installatio"
                bat  'npm install'
                }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    bat "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                      //  bat "docker stop ${IMAGE_NAME} "
                        bat "docker rm ${IMAGE_NAME} "        
                        bat "docker run -d --name ${IMAGE_NAME} -p 9090:9090 ${IMAGE_NAME}:${IMAGE_TAG}" 
                }
            }
        }

    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}