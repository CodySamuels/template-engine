const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembersArr = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Hello! What would you like to do today?",
        choices: [
            "Add a team member",
            "Exit and generate the HTML.",
        ]
    }).then(function ({ choice }) {
        switch (choice) {
            case "Add a team member":
                console.log("Testing")
                teamMemberPosition();
                break;

            case "Exit and generate the HMTL.":
                console.log("Thank you!")
        }
    })


    // 
    // 
    // 
    // 
    // Second Option -> Quit and Generate HTML
    // 
    // 
    // 

}

mainMenu()

function teamMemberPosition() {
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
    ]).then(function (answers) {
        if (answers.position === "Intern") {
            console.log("Intern")
            teamMemberInfo()
        } else if (answers.position === "Engineer") {
            console.log("Engineer")
            teamMemberInfo()
        } else if (answers.position === "Manager") {
            console.log("Engineer")
            teamMemberInfo()
        } else {
            console.log("Error")
        }

    })
}

function teamMemberInfo(){
    inquirer.prompt([
        {
            type: "input",
            message: "Team Member Name?",
            name: "name"
        },{
            type: "input",
            message: "Team Member ID?",
            name: "id"
        },{
        type: "input",
        message: "Team Member Email?",
        name: "email"
    }
    ]).then(function (answers) {
        console.log(answers)
    })
}

// function teamMemberID(){
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "Team Member ID?",
//             name: "id"
//         }
//     ]).then(function (answers) {
//         console.log("id")
//     })
// }
// function teamMemberEmail(){}

// ]) .then(function (answers) {



//     ,
// {
//     type: "input",
//         message: "Team Member Name",
//             name: "name"
// }, {
//     type: "number",
//         message: "Team Member ID",
//             name: "id"
// }, {
//     type: "input",
//         message: "Team Member Email:",
//             name: "email"
// }

// ]) .then(function (answers) {
// console.log(answers)
// answers.name.push(teamMembersArr)
// console.log(teamMembersArr)
// mainMenu()
// Push answers into an array
// 
// Cycle back to menu
// Add edit function?
// Add new members from there
// IF statements based off the position
// var newpersonName = answers.name
// var newpersonID = answers.id
// var newpersonEmail = answers.email
// var newpersonPosition = answers.position
// const newPerson = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)





    // let selectedTeamMember;
    // for (let i = 0; i < teamMembersArr.length; i++) {
//         if (teamMembersArr[i].name === answers.name) {
//             selectedTeamMember = teamMembersArr[i]
//         }
//     }

//     selectedTrainer.addPokemon(answers.pokemonName, answers.pokemonHp, answers.pokemonAtk);
//     console.log(`${selectedTrainer.name} caught a ${answers.pokemonName}! Gotta catch 'em all!`)
//     playGame();
// })
// }















// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
