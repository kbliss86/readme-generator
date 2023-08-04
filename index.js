// Import Required files
const inquirer = require('inquirer');
const markdownGen = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array for the questions in the command line
const questions = [
    {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
    },
    {
    type: 'input',
    message: 'What is the steps to install your project?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Are their any specific usage instruction for your project?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Are there any guidelines for contributing to the project?',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'What are the testing isntructions for the project?',
    name: 'tests',
    },
    {
    type: 'list',
    message: 'What license did you use on your project?',
    name: 'license',
    choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0',]
    },    
];

// Function to create the "README" file
function writeToFile(data) {
    console.log(data);
    fs.writeFile('./assets/README.md', data, (err) =>
    err ? console.error(err) : console.log('Succees - your readme is in your assets folder!')
    );
}

// function to run all files
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        let stuff = markdownGen.generateMarkdown(answers);
    writeToFile(stuff);
    });
}

// Function call to initialize app
init();
