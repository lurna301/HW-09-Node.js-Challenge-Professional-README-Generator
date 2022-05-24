// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let apache = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
let mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

function renderLicenseBadge(license) {
  
  if (license === data.choices){

    return apache;
  } else if (license == mit){
    
    return mit;
  } else {
    return " ";
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseBadge();
  return `
  # ${data.title}


This project is licensed under the ${data.license} license.

  
# Description
  ${data.description}

  #Table of Contents

  *[Installation](#installation)

  *[Usage] (#usage)

  *[Contribution Guidelines](#contributing)

  *[Test Instructions] (#test)

  *[Questions] (#questions)

#Installation
Dependencies must be installed to run the application properly: ${data.installation}

#Usage
${data.usage}

#Testing

To run tests, please do the following:
${data.test}

#Questions

If you have any questions please contact me through Github ${data.username} or
email me at ${data.email}.





`;
}

module.exports = generateMarkdown;
