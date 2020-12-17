let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('imagem')
    let dots = document.getElementsByClassName("btn-style");
    console.log(dots.length)
    if (n !== 1) {
        dots[0].classList.remove('btn-carousel-active')
        dots[0].classList.add('btn-carousel-inactive')
    }
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace("btn-carousel-active", "");
    
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " btn-carousel-active";
}

function moveToSection(){
    location.href = "#section2"
}