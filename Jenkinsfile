pipeline {
    agent any

    tools {
        nodejs 'NodeJS_20' // Use the name you gave to your Node.js installation
    }

    environment {
        // Set any environment variables if needed
        NODE_ENV = 'production'
    }

    stages {
        
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

        stage('Build') {
            steps {
                sh 'npm run build' // If you have a build script in package.json
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here, e.g., deploying to a server or cloud service
                sh 'npm run deploy' // Example deployment script
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