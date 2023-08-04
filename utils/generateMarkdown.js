// populate the license badge 
function populateLicenseBadge(license) {
switch(license) {
  case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    // break;
  case 'Apache License 2.0':
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    // break;
  case 'Mozilla Public License 2.0':
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    // break;
  default:
    return '';
}
}

//populate the readme title
function populateTitle(title) {
  if (title !== '') {
    return `# ${title}`;
  } else {
    return '# Blank Title';
  }
}

// populate the readme description
function populateDescription(description) {
  return `\r\n## Description\r\n${description}`
}

//populate the table of contents
function populateTable() {
  return `\r\n## Table of Contents\r\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  `;
}

//populate the readme installation instructions
function populateInstall(installation) {
  return `\r\n## Installation\r\n${installation}`
}

//populate the readme usage instructions
function populateUsage(usage) {
  return `\r\n## Usage\r\n${usage}`
}

//populate the readme contribution instructions
function populateContribution(ccontributing) {
  return `\r\n## Contribution\r\n${ccontributing}`
}

//populate the readme testing instructions
function populateTest(tests) {
  return `\r\n## Testing\r\n${tests}`
}

// populate the url link to the licence
function populateLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/license/mit/';
      // break;
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
      // break;
    case 'Mozilla Public License 2.0':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
      // break;
    default:
      return '';
  }
}

//populate the license information
function populateLicenseName(license) {
  switch(license) {
    case 'MIT':
      return 'This project is covered under the MIT license';
      // break;
    case 'Apache License 2.0':
      return 'This project is covered under the Apache License 2.0 licnse';
      // break;
    case 'Mozilla Public License 2.0':
      return 'This project is covered under the Mozilla Public License 2.0 license';
      // break;
    default:
      return '';
  }
}

//populate and combine the license link and data
function populateLicense(data){
  let licenseL = populateLicenseLink(data.license);
  let licenseN = populateLicenseName(data.license);
  return `\r\n## License\r\n${licenseN}\r\n${licenseL}`
}

//populate the questions section
function populateQuestions() {
  return `\r\n## Questions\r\n
  - [GitHUb Profile](https://github.com/kbliss86)
  - [Email](kendall.bliss@nexusbusinessintelligence.com)
  `;
}

// fucntion to combine all data and populate the readme file
function generateMarkdown(data) {
  let titleP = populateTitle(data.title);
  let badgeP = populateLicenseBadge(data.license)
  let descriptionP = populateDescription(data.description);
  let tableP = populateTable();
  let installationP = populateInstall(data.installation);
  let usageP = populateUsage(data.usage);
  let contributionP = populateContribution(data.ccontributing);
  let testP = populateTest(data.tests);
  let licenseP = populateLicense(data);
  let questionsP = populateQuestions();
  return `
${titleP}
${badgeP}
${descriptionP}
${tableP}
${installationP}
${usageP}
${contributionP}
${testP}
${licenseP}
${questionsP}
`;
}

module.exports = {generateMarkdown};
