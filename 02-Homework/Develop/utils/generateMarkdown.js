// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //[![License](https//img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
//look at slack link
# Table of Contents
  - (doc:description)
  - (# installation)
  - (# usage)
  - (# contributing)
  - (# tests)
  - (# questions)
  - (# username)
  ## Description:
  “#description”>${data.description}
  ## Installation:
  "#installation">${data.installation}
  ## Usage:
  ${data.usage}
  ## Contributing:
  ${data.contributing}
  ## Test:
  ${data.tests}
  # Questions:
  ## username:
  https://github.com/${data.username}
  ## Contact me using:  ${data.email}
  ;`

}

module.exports = generateMarkdown;
