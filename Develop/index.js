//lincense var
const apache = ``;

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "How would one install this?",
    name: "install",
  },
  {
    type: "input",
    message: "How would one use this?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who are you giving credit to?",
    name: "credit",
  },
  {
    type: "list",
    message: "License?",
    name: "license",
    choices: [
      {
        name: "MIT",
        value: `![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

      Copyright (c) [2023] [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`,
      },
      "Apache Lincense 2.0",
      "GNU General Public License v3.0",
      "BSD2-Clause Simplified License",
      "BSD 3-Clause New/Revised License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal, Eclipse Public License 2.0, Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Contributions guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Email URL?",
    name: "email",
  },
  {
    type: "input",
    message: "Github URL?",
    name: "github",
  },
];

inquirer.prompt(questions).then((response) => {
  const readMePage = genReadMe(response);
  // fs.writeFile("README.md", readMePage, (err) =>
  //   err ? console.error(err) : console.log("README.md made!")
  // );
  writeToFile("./generatedReadMe/README.md", readMePage);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README.md made!")
  );
}
const genReadMe = ({
  title,
  description,
  install,
  usage,
  credit,
  license,
  tests,
  contribution,
  email,
  github,
}) =>
  `# ${title}

## Description

${description}

## Table of Contents 

[questions](#questions)

## Installation

${install}

## Usage

${usage}

   ![alt text](assets/images/screenshot.png)

## Credits

${credit}

## License

${license}

## Tests

${tests}

## Contributions

${contribution}

## Questions

${email}

[${github}](https://www.github.com/${github})`;

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
