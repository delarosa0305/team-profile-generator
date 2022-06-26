const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./src/page-template')
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

class Prompt {
    constructor() {
        this.employee;
        this.engineer;
        this.intern;
        this.manager;
    }

    initialzePrompt(data) {
        return inquirer
            .prompt([
                {
                    type: "text",
                    name: 'name',
                    message: "Enter manager's name: "
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter manager's employee ID: "
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Enter Manager's email adress: "
                },
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: "Enter manager's office number: "
                },
                {
                    type: "list",
                    name: 'role',
                    message: 'Would you like to add more employees?',
                    choices: ['Engineer', 'Intern', 'Finish']
                }
            ])
            .then(({ role }) => {
                if (role === 'Engineer') {
                    this.checkEngineer();
                } else if (role === 'Intern') {
                    this.checkIntern();
                } else {
                    this.checkFinish();
                }
            })

    }

    checkEngineer() {
        return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "Enter Engineer's name: "
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter Engineer's employee ID: "
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Enter Engineer's email adress: "
                },
                {
                    type: 'text',
                    name: 'github',
                    message: "Enter Engineer's gitHub username: "
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Would you like to add more employees?',
                    choices: ['Engineer', 'Intern', 'Finish']
                }
            ])
            .then(({ role }) => {
                if (role === 'Engineer') {
                    this.checkEngineer();
                } else if (role === 'Intern') {
                    this.checkIntern();
                } else {
                    this.checkFinish();
                }
            })
    }

    checkIntern() {
        return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "Enter intern's name: "
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter intern's employee ID: "
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Enter intern's email adress: "
                },
                {
                    type: 'text',
                    name: 'school',
                    message: 'Enter school Intern is attending: '
                },
                {
                    type: 'text',
                    name: 'role',
                    message: 'Would you like to add more employees?',
                    choices: ['Engineer', 'Intern', 'Finish']
                }
            ])
            .then(({ role }) => {
                if (role === 'Engineer') {
                    this.checkEngineer();
                } else if (role === 'Intern') {
                    this.checkIntern();
                } else {
                    this.checkFinish();
                }
            })
    }
    checkFinish() {
        const pageHTML = generatePage(data);
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw new Error(err);
            console.log('Page created! Check out index.html in this directory to see it!');
        });
    }
}

module.exports = Prompt;