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
    
}


document.addEventListener('DOMContentLoaded',configurar);