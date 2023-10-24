const rl = require('readline-sync');

class Discovoador {
    vacas
    velocidade

    constructor() {
        this.vacas = [];
        this.velocidade = 0 ;
    }

    
    acelerar() {
        const velocidadeAleatoria =  Number.parseInt(Math.random() * 10);
        this.velocidade += velocidadeAleatoria;
        if(this.velocidade>10) {
            const umaVaca = new Vaca();
            this.abduzir(umaVaca);
            this.velocidade = 10; 
        }
    }

    frear() {
        this.velocidade = 0;
    }

    abduzir(vaca) {
        this.vacas.push(vaca);
    }
}

class Vaca {
    nome
    cor
    constructor() {
        this.nome = 'sem nome'
        this.cor = 'sem cor'
    }
}

const disco = new Discovoador();

let comando = ''
while(comando!='s') {
    console.table(disco);
    comando = rl.question('comando: [s]air [a]celerar, [f]rear >' );
    switch (comando) {
        case 'a':
            disco.acelerar();
            break;
        case 'f':
            disco.frear()
        default:
            break;
    }
}









/**
 acelerar(umaVelocidade) {

       
        for(this.velocidade = 0; this.velocidade<umaVelocidade; this.velocidade++) {
            console.log(`velocidade = ${this.velocidade}`);
            if (this.velocidade==10) {
                console.log('Velocidade máxima!');
                break;
            }
        }
        
        
    

    }
 */