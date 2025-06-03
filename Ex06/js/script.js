function configurar () {
    let input = document.getElementById('textInput');
    let button = document.getElementById('contButton');

    if ((input instanceof HTMLInputElement) 
    && (button instanceof HTMLButtonElement)) {
        button.addEventListener('click', () => {
            let textoInput = input.value;
            validarTexto(textoInput);
            input.value = '';
        })
    }
}

function validarTexto(textoInput) {
    try {
        let validacoes = [
            { regex: /^.{1,70}$/, erro: "O número de caracteres deve ser de no mínimo 1 e no máximo 70"},
            { regex: /[^@#$%^&+=!*]/g, erro: "o input não aceita caracteres especiais"},
        ];

        for (let validacao of validacoes) {
            let regex = validacao.regex;
            let erro = validacao.erro;
            if (!regex.test(textoInput)) {
                console.log(`Erro: ${regex}`);
                throw new Error(erro);
            }
        }

        console.log('Texto validado');

        exibirSaida(textoInput);
    } catch (erro) {
        console.log(erro.message)
    }
}

function exibirSaida(textoInput) {
    let saida = document.getElementById('saidaText');

    if (saida instanceof HTMLParagraphElement) {
        let saidaString = String(textoInput);
        let numeroCaracteres = String(saidaString.length);
        saida.textContent = `Número de caracteres = ${numeroCaracteres}`
    }
}

document.addEventListener('DOMContentLoaded', configurar)