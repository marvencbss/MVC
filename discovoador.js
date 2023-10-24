class Discovoador {
    vacas
    velocidade

    constructor() {
        this.vacas = [];
        this.velocidade = 0 ;
    }

        acelerar() {
            for(this.velocidade=0; this.velocidade<10; this.velocidade++);
            console.log(`velocidade = ${this.velocidade}`);
        }

        frear() {
            this.velocidade = 0;
        }

        abduzir(vaca) {
            this.vacas.push(vaca);
        }
}
