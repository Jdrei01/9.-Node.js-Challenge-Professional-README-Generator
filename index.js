// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const markdown = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'appName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What kind of license should your project have? (Use arrow keys)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions.',
        default: 'npm start',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If contributing is allowed, how does one contribute to the repo?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function app() {
    inquirer.prompt(questions).then(answers => {
        try {
            fs.writeFileSync("dist/README.md", generateMarkdown(answers))
            console.log("Success! Your file is located in the dist directory");
        } catch (error) {
            log(error.message)
        }
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
