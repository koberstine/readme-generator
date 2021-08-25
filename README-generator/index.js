// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeToFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for the project (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter the installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions to use the project (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('You need to enter the usage instructions!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for the project',
      choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'The Unlicense', 'none']
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide any notable features of the project',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide any directions for contributing to the project',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide any tests for the project with examples of how to run them',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
