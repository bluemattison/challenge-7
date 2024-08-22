function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    const badges = {
        MIT: '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
        GPLv3: '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        'Apache 2.0': '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        'BSD 3-Clause': '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
        None: ''
    };

    return badges[license] || '';
}

function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    const links = {
        MIT: 'https://opensource.org/licenses/MIT',
        GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
        None: ''
    };

    return links[license] || '';
}

function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return '';
    }

    return `
## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
    `;
}

function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, you can reach me at [${data.email}](mailto:${data.email}).  
You can also find more of my work at [${data.github}](https://github.com/${data.github}).
    `;
}

module.exports = generateMarkdown;
