const rl = require('readline-sync');

class Pessoa {
    Nome
    Email
    Idade

    get nome() {
        return this.Nome;
    }

    set nome(novoNome) {
            this.Nome = novoNome;
    }

    get email() {
        return this.Email;
    }

    set email(novoEmail) {
        this.Email = novoEmail;
    }

    get idade() {
        return this.Idade;
    }

    set idade(novoIdade) {
        this.Idade = novoIdade;
    }
}

let novaPessoa = new Pessoa();

const valorNome = rl.question('Qual seu nome? ');
const valorEmail = rl.question('Qual seu email? ');
const valorIdade = rl.question('Qual sua idade? ');

console.log(`Bem vindo(a) ${valorNome}! seu email é ${valorEmail} e você tem ${valorIdade} anos.`);
console.table(novaPessoa);