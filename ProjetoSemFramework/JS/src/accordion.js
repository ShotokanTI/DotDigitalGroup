let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  let self = acc[i]
  self.addEventListener("click", function () {
    this.classList.toggle("active");
    var self = this.nextElementSibling
    if (self.style.maxHeight) {
      self.style.maxHeight = null;
    } else {
      self.style.maxHeight = 700 + "px";
      UmAccordionPorVez(this)
    }
  });
}

function UmAccordionPorVez(escolhido) {
  let acc = document.querySelectorAll(".accordion");
  for (i = 0; i < acc.length; i++) {
    let self = acc[i]
    let elemento = self.nextElementSibling
    if (self !== escolhido) {
      elemento.style.maxHeight = null
    }
  }
}

