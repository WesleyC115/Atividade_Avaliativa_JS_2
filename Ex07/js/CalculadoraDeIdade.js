export default class CalculadoraDeIdade {
    constructor(dataNascimento) {
        this.dataNascimento = new Date(dataNascimento);
    }

    calcularIdade() {
        let hoje = new Date();

        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        let mesAtual = hoje.getMonth();
        let diaAtual = hoje.getDate();

        let mesNascimento = this.dataNascimento.getMonth();
        let diaNascimento =
    }
}