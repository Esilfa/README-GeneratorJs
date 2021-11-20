// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// axios gets Info
// const axios = require('axios');
const inquirer = require('inquirer');
// Url
const markDown = require('./utils/generateMarkdown');
// const { listenerCount } = require('events');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please provide a description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        // list
        type: "input",
        message: "What licenses did you used?",
        name: "licenses",
    },
    {
        type: "input",
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is the test process for this project?",
        name: "test"
    },
    {
        type: "input",
        message: "Github usarename:",
        name: "Git"
    },
    {
        type: "input",
        message: "E-mail:",
        name: "email"

    }

];

// TODO: Create a function to write README file
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );

//     console.log('README has been generated');


// ;
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const response = markDown(answers)
            // TODO: Create a function to write README file
            const filename = `${answers.name.toLowerCase().split(' ').join('')}.json`;
            fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
                err ? console.log(err) : console.log('Success!')
            );

            console.log('README has been generated');


            // ;
            console.log("Making ReadMe");
            fs.writeFileSync("ReadMe.md", response);

        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
