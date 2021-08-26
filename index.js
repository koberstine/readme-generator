// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username? (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('You need to enter a file name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter a file name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What do you want to name this file? Example: README.md (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a file name!');
          return false;
        }
      }
    },
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
      type: 'input',
      name: 'credits',
      message: 'Who do you want to credit for contributing to the project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for the project',
      choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'The Unlicense', 'none']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide instructions for others to contribute to the project',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'List any tests written for the project with examples of how to use them',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) throw err;

    console.log('Readme file generated! Check out README.md to see output!')
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {writeToFile(data.name, data)});
}

// Function call to initialize app
init();
