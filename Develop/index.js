//lincense var
const apache = ``;

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Installation:",
    name: "install",
  },
  {
    type: "input",
    message: "Usage:",
    name: "usage",
  },
  {
    type: "input",
    message: "Credit:",
    name: "credit",
  },
  {
    type: "list",
    message: "License",
    name: "license",
    choices: [
      {
        name: "MIT",
        value: `![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)\n
        This project is covered under the MIT license.`,
      },
      {
        name: "Apache Lincense 2.0",
        value: `![Apache License 2.0](https://img.shields.io/badge/license-Apache-blue.svg)\n
        This project is covered under the Apache license.`,
      },
      {
        name: "GNU General Public License v3.0",
        value: `![Apache License 2.0](https://img.shields.io/badge/license-GNU-blue.svg)\n
        This project is covered under th GNU General Public license.`,
      },
      {
        name: "BSD 3-Clause New/Revised License",
        value: `![Apache License 2.0](https://img.shields.io/badge/license-BSD 3-Clause-blue.svg)\n
        This project is covered under the BSD 3-Clause New/Revised license.`,
      },
      {
        name: "Boost Software License 1.0",
        value: `![Apache License 2.0](https://img.shields.io/badge/license-Boost Software-blue.svg)\n
        This project is covered under the Boost Software license.`,
      },
      {
        name: "Mozilla Public License 2.0",
        value: `![Apache License 2.0](https://img.shields.io/badge/license-Mozilla-blue.svg)\n
        This project is covered under the Mozilla Public license.`,
      },
    ],
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Contributions guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Github username:",
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

[credits](#credits)

[license](#license)

[questions](#questions)

[contribution](#contribution)

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

Email: ${email}

Github Profile Link: [${github}](https://www.github.com/${github})`;

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
