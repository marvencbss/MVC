const rl = require('readline-sync');

class Discovoador {
    vacas
    velocidade

    constructor() {
        this.vacas = [];
        this.velocidade = 0 ;
    }

    
    acelerar() {
        if(this.velocidade<10) {
            this.velocidade++; 
        }
    }

    frear() {
        this.velocidade = 0;
    }

    abduzir() {
        this.vacas.splice;
    }
}

class Vaca {
    nome
    cor

    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

const disco = new Discovoador();
const pasto = [];

const vaca1 = new Vaca('Branca', 'malhada');
const vaca2 = new Vaca('Preta', 'marrom');
const vaca3 = new Vaca('Florinda', 'amarela');

pasto.push(vaca1);
pasto.push(vaca2);
pasto.push(vaca3);


let comando = ''

while(comando!='s') {

    console.log(
    `
Vacas
-----
Existem ${pasto.length} vacas no pasto
`);

console.log(pasto);

console.log(`
Disco-voador
------------
vacas abduzidas: ${disco.vacas}
velocidade: ${disco.velocidade}
`
    );

    comando = rl.question(
    'O que você quer fazer? (A)celerar, Abdu(z)ir, (F)rear, (S)air? '
    );

    switch (comando) {
        case 'a':
            disco.acelerar();
            break;
        case 'f':
            disco.frear();
            break;
        case 'z':
            disco.abduzir();
            break;
        default:
            break;
    }

}

console.log('Fim do programa');
