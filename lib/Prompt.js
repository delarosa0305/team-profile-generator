const inquirer = require('inquirer');
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

    initialzePrompt() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    messaga: 'Enter name: '
                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'Enter email adress: '
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Pick role:',
                    choices: ['Manager', 'Engineer', 'Intern']
                }
            ])
            .then(({ role }) => {
                this.employee = new Employee(role);

                this.startPrompt();
            })
    }

    startPrompt() {
        if (this.manager) {
            console.log(this.manager)
            // this.checkManager();
        } else if (this.engineer) {
            this.checkEngineer();
        } else if (this.intern) {
            this.checkIntern();
        }
    }

    checkManager() {
        inquirer 
        .prompt({
            type: 'text',
            name: 'officeNumber',
            message: 'Enter office number: '
        })
        .then(({ officeNumber }) => {
        })
    }

    checkEngineer() {
        inquirer 
        .prompt({
            type: 'text',
            name: 'github',
            message: 'Enter github username: '
        })
    }

    checkIntern() {
        inquirer 
        .prompt({
            type: 'text',
            name: 'school',
            message: 'Enter school you have attended: '
        })
    }
}

module.exports = Prompt;