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
                bat  'npm install'
            }
        }

        stage('Build') {
            steps {
                echo ${env.NODE_ENV}
                bat 'npm run build' // If you have a build script in package.json
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