

import inquirer from "inquirer";
import chalk from 'chalk';

export async function checkFlag() {
    let again= await inquirer.prompt
    ([
    {
        "name": "again",
        "type": "confirm",
        "message": chalk.bold.blue("Do you want to play again:\t"),
        "default": false
    }
    ])
    return again.again;
}