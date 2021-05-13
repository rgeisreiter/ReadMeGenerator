// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  # Table of Contents
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [Contributions](#contributions)
  4. [Tests](#test)
  5. [Licenses](#license)
  6. [Questions](#questions)

  # Installation
  ${data.install}

  # Usage
  ${data.usage}

  # Contributions
  ${data.contributions}

  # Tests
  ${data.test}

  # Licenses
  ${data.license}

  # Questions
  ${data.questions}


`;
}

module.exports = generateMarkdown;
