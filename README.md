# Full CI/CD Pipeline Demo with GitHub Actions

This repository is a demonstration project showcasing a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions. The pipeline automatically builds, tests, and deploys a simple Node.js application to a live server on AWS EC2.

## Features

- **Continuous Integration (CI):** Every push to the `main` branch automatically triggers the workflow.
    
- **Build & Linting:** A dedicated job runs a build step using ESLint to check for code quality and consistency.
    
- **Automated Testing:** A separate job executes unit tests using Jest to ensure the application is working correctly.
    
- **Test Report Generation:** An interactive HTML test report is generated and saved as a downloadable artifact for every run.
    
- **Continuous Deployment (CD):** The Node.js application is automatically deployed to a live EC2 instance after all checks pass.
    
- **Dependency Management:** The pipeline is structured with dependent jobs, ensuring that testing only happens after a successful build, and deployment only happens after successful tests.
    

## Technologies Used

- **Application:** Node.js, Express.js
    
- **Testing:** Jest, Supertest
    
- **Linting:** ESLint
    
- **CI/CD:** GitHub Actions
    
- **Deployment Environment:** AWS EC2
    
- **Process Management (on EC2):** PM2
    

## How It Works

The entire CI/CD process is defined in the `.github/workflows/main.yml` file and consists of three main jobs that run in sequence:

1. **`build` Job:**
    
    - Checks out the latest code.
        
    - Sets up the Node.js environment.
        
    - Installs all necessary dependencies with `npm install`.
        
    - Runs ESLint to check for code issues (`npm run build`).
        
2. **`test` Job:**
    
    - This job **depends on** the `build` job succeeding.
        
    - Executes the test suite using Jest (`npm test`).
        
    - Generates an HTML test report.
        
    - Uploads the test report as a downloadable workflow artifact.
        
3. **`deploy` Job:**
    
    - This job **depends on** the `test` job succeeding.
        
    - It securely connects to the specified AWS EC2 instance using an SSH key stored in GitHub Secrets.
        
    - It runs a script on the server to:
        
        - Pull the latest code from the `main` branch.
            
        - Install any new dependencies.
            
        - Restart the application using PM2 to apply the changes with zero downtime.
            

## Setup and Deployment

To replicate this project, you will need:

- An AWS account.
    
- A GitHub account.
    
- Node.js and npm installed locally.
    

Follow the detailed steps in the **Phase 1: Preparation** section of the guide to:

1. Launch and configure your EC2 instance.
    
2. Create the project files and push them to your GitHub repository.
    
3. Configure the necessary GitHub Secrets (`EC2_HOST`, `EC2_USER`, `SSH_PRIVATE_KEY`).
    

## Viewing the Deployment

After a successful workflow run:

- **EC2 Application:** You can view the live Node.js application by navigating to `http://[YOUR_EC2_PUBLIC_IP]:3000`.
    
- **Test Report:** You can download the HTML test report from the "Artifacts" section on the summary page of the completed workflow run.