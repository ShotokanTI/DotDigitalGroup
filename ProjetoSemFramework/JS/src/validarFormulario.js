function validar() {
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')
    let form = document.getElementById('form-dot')
    let nome = document.getElementById('nome')

    if(nome.value === ''){
        alert('Nome incorreto,digite novamente!')
        nome.focus()
        return;
    }

    if (email.value.length > 0) {
        if (!IsEmail(email.value)) {
            alert('Email incorreto,digite novamente!')
            email.focus()
            return;
        }
    }
    if(telefone.value.length < 14){
        alert('Telefone incorreto,digite novamente!')
        telefone.focus()
        return;
    }
    form.submit()
}

function IsEmail(email) {
    var exclude = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        ;
    if (email.search(exclude) != -1) { return true; }
    else { return false; }
}

