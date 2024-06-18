pipeline {
    agent any 

    tools {
        nodejs "NodeJS"
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
