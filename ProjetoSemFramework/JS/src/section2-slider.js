let container = document.querySelector('.container-element')
let containerMobile = document.querySelector('.container-element-mobile')

for (let i = 0; i < 9; i++) {
    container.innerHTML += `<div class="element">
    <div class="card">
    <img class="slider-img" src='Data/Imagens/slider-img.jpg'/>
    

    <div class="text-slider">
        <div class="slider-title">LOREM IPSUM</div>
        <div class="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
    <div/></div></div>`
}


for (let i = 0; i < 9; i++) {
    containerMobile.innerHTML += `<div class="element">
    <div class="card">
    <img class="slider-img" src='Data/Imagens/Camada 1@2x.jpg'/>
    

    <div class="text-slider">
        <div class="slider-title">LOREM IPSUM</div>
        <div class="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
    <div/></div></div>`
}
