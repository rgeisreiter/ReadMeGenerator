// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your project",
    name: "description",
  },
  {
    type: "list",
    message: "Which license do you want to use?",
    name: "license",
    choices: ["MIT", "Apache", "GPLv2", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMd({ ...answers }));
  });
}

// Function call to initialize app
init();
