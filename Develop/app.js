const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const mainMenu = () => {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Hello! What would you like to do today?",
        choices: [
            "Add a team member",
            "Exit and generate the HTML.",
        ]
    }).then( ({ choice }) => {
        switch (choice) {
            case "Add a team member":
                teamMemberPosition();
                break;

            default: "Exit and generate the HMTL."
            const output = render(employees)
            fs.writeFileSync(outputPath, output)
            console.log("Thank you! Template.html has been generated!")
                break;
        }
    })

}

const teamMemberPosition = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Team Member Position",
            name: "position",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
            ]
        }
        
    ]).then(answers => {
        if (answers.position === "Intern") {
            console.log("Intern")
            internQuestion()
            
        } else if (answers.position === "Engineer") {
            console.log("Engineer")
            engineerQuestion()
            
        } else if (answers.position === "Manager") {
            console.log("Manager")
            managerQuestion()
            
        } else {
            console.log("Error")
        }
        
    })
}

const internQuestion = () => {
    inquirer.prompt([
        
        {
            type: "input",
            message: "Team Member Name?",
            name: "name"
        }, {
            type: "input",
            message: "Team Member ID?",
            name: "id"
        }, {
            type: "input",
            message: "Team Member Email?",
            name: "email"
        }, {
            type: "input",
            message: "Team Member School?",
            name: "school"
        }
        
    ]).then(answers => {
        const newTeamMember = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(newTeamMember)
        console.log(employees)
        mainMenu()
    })
}

const engineerQuestion = () => {
    inquirer.prompt([
        
        {
            type: "input",
            message: "Team Member Name?",
            name: "name"
        }, {
            type: "input",
            message: "Team Member ID?",
            name: "id"
        }, {
            type: "input",
            message: "Team Member Email?",
            name: "email"
        }, {
            type: "input",
            message: "Team Member's GitHub?",
            name: "github"
        }
        
    ]).then(answers => {
        const newTeamMember = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(newTeamMember)
        console.log(employees)
        mainMenu()
    })
}

const managerQuestion = () => {
    inquirer.prompt([
        
        {
            type: "input",
            message: "Team Member Name?",
            name: "name"
        }, {
            type: "input",
            message: "Team Member ID?",
            name: "id"
        }, {
            type: "input",
            message: "Team Member Email?",
            name: "email"
        }, {
            type: "input",
            message: "Team Member's Office Number?",
            name: "officeNumber"
        }
        
    ]).then(answers => {
        const newTeamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(newTeamMember)
        console.log(employees)
        mainMenu()
    })
}

mainMenu()