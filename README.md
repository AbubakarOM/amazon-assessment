# PREREQUISITE

## Operating System
* MacOS 10.9 and above (64-bit only)
* Windows 7 and above
* Linux Ubuntu 12.04 and above.

## Supporting Libraries

Node.js (12 or Higher) - Cross verify the Node.js installation by running the command: node –version in the terminal. To verify the npm version, run the npm –version command.

## Cypress and Docker Installation guide

[Follow these instructions to install Cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install)

[Follow these instructions to install Docker.](https://docs.docker.com/desktop/)



## SETUP WITHOUT DOCKER 

#### Fork and clone this repo to a local directory
* git clone https://github.com/<your-username>/amazon-assessment.git

#### CD into the cloned repo
* cd amazon-assessment

#### Install the Dependency
* npm install

#### Start the local webserver
* npx cypress open

## SETUP WITH DOCKER 

#### Clone this repo to a local directory
* git clone https://github.com/<your-username>/amazon-assessment.git

#### CD into the cloned repo
* cd amazon-assessment

#### Build the Docker Image 
* docker build -t test .

#### Run the Docker Image 
* docker run test