pipeline {

      agent any
      
         stages {
         
           stage('Installing Node Dependencies') {
           
             steps {
             
                  nodejs('Watermelon') {
                  sh 'npm install'
                  }}}
                 
           stage('Sonarqube Review') {
                 
             steps {
             
                   nodejs('Watermelon') {
                   withSonarQubeEnv('Sonar') {
                   sh "/var/lib/jenkins/tools/sonar-scanner-4.2.0.1873-linux/bin/sonar-scanner -Dsonar.projectKey=Watermelon-React -Dsonar.Sources=./"
                   //sonar-scanner \
                   //-Dsonar.projectKey=revcdi
                   //-Dsonar.sources=/var/jenkins_home/workspace/revCDI
               }}}}
          
           stage('Running Test Cases'){
                        steps{
                              nodejs('Watermelon') {
                              echo 'testing'
                              sh 'npm run test'
                   }}}

           stage('Build'){
                           steps{ 
                                 nodejs('Watermelon') {
                                 echo 'Building'
                                 sh 'npm run build'
                   }}}
               
           stage('Deploying to demo') {
           
             steps {
                    
                    sh 'tar -cvzf dist.tar.gz build'
                    sh 'ssh jenkins@demo.divami.com "sudo mkdir /var/www/html/demo/watermelon-react; sudo chown -R jenkins:apache /var/www/html/demo/watermelon-react" '
                    sh 'scp dist.tar.gz jenkins@demo.divami.com:/var/www/html/demo/watermelon-react'
                    sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/watermelon-react && tar -xvzf rev.tar.gz --strip 1" '
                    sh 'rm -rf rev.tar.gz'
                    }}
               
           }}
