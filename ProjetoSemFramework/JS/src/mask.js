function setarMascara(telefoneInserido, f) {
  setTimeout(function () {
    let afterMask = mascaraTelefone(telefoneInserido.value);
    if (afterMask != telefoneInserido.value) {
      telefoneInserido.value = afterMask;
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