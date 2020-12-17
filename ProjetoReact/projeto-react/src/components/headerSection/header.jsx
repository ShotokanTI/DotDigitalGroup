import React, { useState ,useEffect  } from "react"
import './header.css'
function Header() {

    const [slideIndex, setIndex] = useState(1)

    useEffect(() => {
        showSlides(slideIndex)
    });
    function currentSlide(n) {
        setIndex(n)
        console.log(slideIndex)
        showSlides(slideIndex);
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
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " btn-carousel-active";
    }

    function moveToSection(){
        window.location.href = "#section2"
    }
    return (<div id="container-all">
        <div className="container-header">
            <div className="titulo-bg">
                <div className="container-titulo">
                    <div className="header-texto-principal">
                        LOREM IPSUM

                    </div>
                    <div className="header-texto-subtitulo">
                        <div className="texto-subtitulo">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>

                </div>
            </div>

            <div className="header-seta">
                <img onClick={moveToSection} className="seta" src={"../Data/Icons/Forma 1.svg"} alt="" />
            </div>

            <div className="container-images">
                <img className="imagem transiction" src={"../Data/Imagens/Camada 1@2x.jpg"} alt=""></img>
                <img className="imagem transiction" src="Data/Imagens/Camada 1@2x.jpg" alt=""></img>
                <img className="imagem transiction" src="Data/Imagens/slider-2.jpg" alt=""></img>
            </div>

            <div className="header-carousel">
                <div className="btn-container">
                    <button className="btn-carousel-inactive btn-carousel-active btn-style" onClick={() => currentSlide(1)}>
                    </button>
                    <button className="btn-carousel-inactive btn-style" onClick={() => currentSlide(2)}>
                    </button>
                    <button className="btn-carousel-inactive btn-style" onClick={() => currentSlide(3)}>
                    </button>
                </div>
            </div>


        </div>
    </div>);
}

export default Header;