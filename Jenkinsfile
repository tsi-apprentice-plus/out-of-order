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
        stage('Install playwright') {
            steps {
                sh 'sudo apt-get install libglib2.0-0 libnss3 Libnspr4 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libatspi2.0-0 libx11-6 libxcompositel libdamagel libxext6 libxfixes3 libxrandr2 libgbm1 libxcb1 libxkbcommonel Libpango-1.0-0 libcairo2 libasound2  && npx playwright install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
