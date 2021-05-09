// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Enter a Description of Your Project."
    },
    {
        type: "input",
        name: "installation",
        message: "Intallation."
    },
    {
        type: "input",
        name: "usage",
        message: "Usage."
    },
    {
        type: "input",
        name: "contributing",
        message: "contributing."
    },
    {
        type: "input",
        name: "tests",
        message: "Tests."
    },
    {
        type: "input",
        name: "username",
        message: "What is Your Github User Name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is Your email address?"
    },
    {
        type: "input",
        name: "repository",
        message: "What is Your Repository Name?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
return fs.writeFileSync(fileName, data)

}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((response) =>{
        //console.log("hello");
        writeToFile("README.md",generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
