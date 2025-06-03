function configurar() {
    let validarBtn = document.getElementById('validarBtn');
    let idadeInput = document.getElementById('idade');

    if ((validarBtn instanceof HTMLButtonElement) && (idadeInput instanceof
        HTMLInputElement)) {
            validarBtn.addEventListener('click', () => {
                let idade = idadeInput.value;
                validarIdade(idade);
                idadeInput.value = '';
            });
    }
}

function validarIdade(idadeNum) {
    try {
        let regex = /[0-9]/g;

        if (regex.test(idadeNum)) {
            throw new Error(
                'Digite apenas números.'
            );
        }

    } catch (error) {
        exibirMensagem(error.message);

    }
}

function exibirMensagem(mensagem)


document.addEventListener('DOMContentLoaded',configurar);