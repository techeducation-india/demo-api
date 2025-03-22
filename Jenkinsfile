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
                echo "Dependency Installatio"
                bat  'npm install'
                echo "Angular Install"
                bat 'npm install -g @angular/cli'
            }
        }

        stage('Build') {
            steps {
                bat 'ng build --prod' // If you have a build script in package.json
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