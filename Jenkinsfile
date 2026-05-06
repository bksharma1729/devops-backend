pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh 'docker build --network host -t devops-backend .'
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                docker stop devops-backend-test || true
                docker rm devops-backend-test || true
                docker run -d --name devops-backend-test -p 3001:3000 devops-backend
                sleep 5
                curl -f http://172.17.0.1:3001
                docker stop devops-backend-test
                docker rm devops-backend-test
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop devops-backend || true
                docker rm devops-backend || true
                docker run -d --restart always --name devops-backend -p 3000:3000 devops-backend
                '''
            }
        }
    }
}
