import chalk from 'chalk';
import { userInput } from "./index.js";
export let score = 0;
export function match() {
    let ran = Math.floor(Math.random() * 5) + 1;
    if (ran == userInput) {
        console.log(chalk.green(`Good Job! Correct Answer.\n`));
        score++;
    }
    else {
        console.log(chalk.red('Incorrect Guess! Better luck next time\n'));
    }
}
