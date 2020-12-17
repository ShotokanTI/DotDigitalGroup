import React from 'react'
import './formulario.css'

function Formulario() {


    function validar() {
        let email = document.getElementById('email')
        let telefone = document.getElementById('telefone')
        let form = document.getElementById('form-dot')
        let nome = document.getElementById('nome')

        if (nome.value === '') {
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
        if (telefone.value.length < 14) {
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

    function setarMascara(telefoneInserido) {
        setTimeout(function () {
          let afterMask = mascaraTelefone(telefoneInserido.target.value);
          if (afterMask != telefoneInserido.target.value) {
            telefoneInserido.target.value = afterMask;
          }
        }, 1);
      }
      
      function mascaraTelefone(telefoneSemMascara) {
        let telefoneComMascara = telefoneSemMascara.replace(/\D/g, "");
        telefoneComMascara = telefoneComMascara.replace(/^0/, "");
        if (telefoneComMascara.length === 9) {
          telefoneComMascara = telefoneComMascara.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (telefoneComMascara.length > 5) {
          telefoneComMascara = telefoneComMascara.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (telefoneComMascara.length > 2) {
          telefoneComMascara = telefoneComMascara.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
          telefoneComMascara = telefoneComMascara.replace(/^(\d*)/, "$1");
        }
        return telefoneComMascara;
      }
    return (
        <div>
            <form action="#" method="POST" id="form-dot" >
                <div className="container-background">
                    <div className="container-formulario">
                        <div className="formulario">
                            <div className="input-nome">
                                <input id="nome" type="text" required />
                                <div className="text-over-input">
                                    <span className="title">*Nome:</span><span className="subtitle">informe seu nome</span>
                                </div>
                            </div>
                            <div className="container-email-telefone">
                                <div className="email">
                                    <input id="email" className="input-email" type="text" required />
                                    <div className="text-over-input">
                                        <span className="title">*E-mail:</span><span className="subtitle">informe seu e-mail</span>
                                    </div>
                                </div>
                                <div className="telefone">
                                    <input id="telefone" onKeyPress={(e)=>setarMascara(e)} onBlur={(e)=>setarMascara(e)} className="input-telefone" type="text" required />
                                    <div className="text-over-input">
                                        <span className="title">*Telefone:</span><span className="subtitle">(__) ____-____</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-mensagem">
                                <textarea className="textarea-mensagem" required></textarea>
                                <div className="text-over-input">
                                    <span className="title">*Mensagem:</span><span className="subtitle">Escreva aqui</span>
                                </div>
                            </div>
                            <button className="btn-form" type="submit" onClick={validar}>Enviar</button>
                        </div>
                    </div>
                </div>

            </form>
            <div className="footer">
                LOREM IPSUM
        </div>
        </div>
    )
}

export default Formulario