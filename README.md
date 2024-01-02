JENKINS CICD PIPELINE (AWS EC2)

1. Installations
	1. Jenkins (Linux : https://www.jenkins.io/doc/book/installing/linux)
	2. sudo apt-get install npm
	3. sudo apt-get install nodejs
	
2. Setup
	1. Login to jenkins
	2. Setup tools,plugins and tools

3. Pipeline Script

        pipeline {
          agent any
          tools{
	          nodejs : "NODEJS" 
	            }
          stages {
         stage('Fetch code'){
            steps {
            git branch: 'branch-name', url: 'repo-url.git'
          }
        }
        stage('Build') {
            steps {
                script {
                        sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Run Application') {
            steps {
                script {
                    sh 'npm start
                }
            }
        }
        }
       }
 
