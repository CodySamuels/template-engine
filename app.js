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

    }).then(({ choice }) => {
        switch (choice) {
            case "Add a team member":
                addTeamMemberQuestions();
                break;

            default: "Exit and generate the HMTL."
                const output = render(employees)
                fs.writeFileSync(outputPath, output)
                console.log("Thank you! Template.html has been generated!")
                break;
        }
    })

}

const addTeamMemberQuestions = () => {
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
        }, {
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
        },

    ]).then(answers => {
        switch (answers.position) {
            case "Intern":
                inquirer.prompt(
                    {
                        type: "input",
                        message: "Team Member's School?",
                        name: "school"

                    }).then(schoolResponse => {
                        const newTeamMember = new Intern(answers.name, answers.id, answers.email, schoolResponse.school)
                        employees.push(newTeamMember)
                        console.log(employees)
                        mainMenu()
                    })
                break;

            case "Engineer":
                inquirer.prompt(
                    {
                        type: "input",
                        message: "Team Member's GitHub?",
                        name: "github"

                    }).then(githubResponse => {
                        const newTeamMember = new Engineer(answers.name, answers.id, answers.email, githubResponse.github)
                        employees.push(newTeamMember)
                        console.log(employees)
                        mainMenu()
                    })
                break;

            case "Manager":
                inquirer.prompt(
                    {
                        type: "input",
                        message: "Team Member's Office Number?",
                        name: "officeNumber"
                    }).then(officeNumberResponse => {
                        const newTeamMember = new Manager(answers.name, answers.id, answers.email, officeNumberResponse.officeNumber)
                        employees.push(newTeamMember)
                        console.log(employees)
                        mainMenu()
                    })
                break;

            default:
                console.log("Error")
                break;
        }
    })
}

mainMenu()
