import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

const log = console.log;

const resta = (a, b) => a - b;

const result = resta(15, 4);

if (result < 5) {
  log(
    chalk.red(`
  El resultado es ${result}`)
  );
} else {
  log(
    chalk.green(`
  El resultado es ${result}`)
  );
}
