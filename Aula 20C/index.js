const cliente1 = {
    nome: 'Leonardo',
    sobrenome: 'Martins',
    numeroCasa: '1',

    mensagem() {
        console.log(`${this.nome} ${this.sobrenome} está morando na casa de numero: ${this.numeroCasa}`);
    },

    incrementaNumeroCasa() {
        this.numeroCasa++
    }
}

cliente1.mensagem();
cliente1.incrementaNumeroCasa();
cliente1.mensagem();