pipeline {
    agent any
    environment {
        AZURE_CLIENT_ID = credentials('AZURE_CLIENT_ID')
        AZURE_CLIENT_SECRET = credentials('AZURE_CLIENT_SECRET')
        AZURE_TENANT_ID = credentials('AZURE_TENANT_ID')
        RESOURCE_GROUP = 'MyResourceGroup'
        FUNCTION_APP_NAME = 'hello-world-function-jingxu'
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the application...'
                    bat  'npm install' 
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    bat  'npm test'  
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying to Azure...'
                    bat  """
                        az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                        az functionapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $FUNCTION_APP_NAME --src function.zip
                    """
                }
            }
        }
    }
}
