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
function populateTitle(title) {
  if (title !== '') {
    return `# ${title}`;
  } else {
    return '# Blank Title';
  }
}

function populateDescription(description) {
  return `\r\n## Description\r\n${description}`
}

function populateTable() {
  return `\r\n## Table of Contents\r\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  `;
}

function populateInstall(installation) {
  return `\r\n## Installation\r\n${installation}`
}

function populateUsage(usage) {
  return `\r\n## Usage\r\n${usage}`
}

function populateContribution(ccontributing) {
  return `\r\n## Contribution\r\n${ccontributing}`
}

function populateTest(tests) {
  return `\r\n## Testing\r\n${tests}`
}

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

function populateLicense(data){
  let licenseL = populateLicenseLink(data.license);
  let licenseN = populateLicenseName(data.license);
  return `\r\n## License\r\n${licenseN}\r\n${licenseL}`
}

// TODO: Create a function to generate markdown for README
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
  return `${titleP}
    ${badgeP}
    ${descriptionP}
    ${tableP}
    ${installationP}
    ${usageP}
    ${contributionP}
    ${testP}
    ${licenseP}
`;
}

module.exports = {generateMarkdown};
