// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter your product descripton.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How would you like your application to be used?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions?',
      },
      {
        type:'checkbox',
        name: 'license',
        message:'Please select license.',
        choices: [
            'Apache',
            'MIT',
            'ISC',
            'GNU GPLv3',
        ]
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
          },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err){
        if(err){
            return console.log(err);
        }
        console.log('Success!!!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("ReadMe-Generator" ,generateMarkdown(data));
    })
}

// Function call to initialize app
init();