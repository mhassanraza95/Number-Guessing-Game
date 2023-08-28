import inquirer from "inquirer";
import chalk from 'chalk';
export async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            "name": "input",
            "type": "number",
            "message": chalk.bold.blue("\nComputer has system generated number between 1 and 5. Kindly guess the number:\t")
        }
    ]);
    return userInput.input;
}
