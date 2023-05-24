const inquirer = require('inquirer');
const chalk = require('chalk')

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Qual o seu nome?',
    },
    {
      name: 'idade',
      message: 'Qual a sua idade?',
    },
  ])
  .then((answers) => {
    if (!answers.name || answers.idade) {
        throw new Error(chalk.red('O nome e a idade são obrigatórios'))
    }

    console.log(chalk.black.bgYellow('Respostas:'));
    console.log(chalk.black.bgYellow(`Nome: ${answers.name}`));
    console.log(chalk.black.bgYellow(`Idade: ${answers.idade}`));
  })
  .catch((err) => {
    console.log(err);
  });
