const rl = require('readline-sync');

class Contato {
    nome
    email

    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}


class Model {
    contatos
    constructor() {
        this.contatos = [
            new Contato('João','jjguanabara@itambe.net'),
            new Contato('José', 'almeidagze@silva78.com.br')
        ];
    }

    getContatos() {
        return this.contatos;
    }
}

class View {

    receberComando() {
        return rl.question('Comando: ');
    }

    mostrarMenu() {
        console.log(`
MENU
----
(L)istar contatos
(S)air
`);
    }

    mostrarContatos(contatos) {
        console.table(contatos);
    }
}

class Controller {
    model
    view
    comando;

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.comando = '';
    }

    interpretarComando(comando) {
        this.comando = comando;
        switch (this.comando) {
            case 'l':
                this.listarContatos();
                break;       
            default:
                break;
        }
        this.comando = '';
    }

    listarContatos() {
        view.mostrarContatos(model.getContatos());
    }
}

/*
Inicialização
*/
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

/**
 * Loop do sistema
 */
function main() {
    while(controller.comando!='s') {
        view.mostrarMenu();
        comando = view.receberComando();
        controller.interpretarComando(comando);
    }
    console.log('Fim do programa');
}

// 
main();
