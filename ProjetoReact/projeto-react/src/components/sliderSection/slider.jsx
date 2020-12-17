import React, { useEffect } from 'react'
import './slider.css'
import './tinySlider.css'
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js";


function Slider() {

    function addElementsSlider() {
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
    }
    function settingsSlider() {
        tns({
            container: '.container-element-mobile',
            "controlsContainer": ".controles-mobile",
            "items": 1,
            "nav": false,
            "mouseDrag": true,
            "slideBy": "page",
            "speed": 400

        });

        tns({
            container: '.container-element',
            "nav": false,
            "controlsContainer": ".controles",
            "items": 3,
            "mouseDrag": true,
            "slideBy": "page",
            "speed": 400
        })
    }
    useEffect(() => {
        addElementsSlider()
        settingsSlider()
    })
    return (
        <div id="section2" className="container-slider">

            <div className="container-item">
                <div className="controles">
                    <img className="arrow-left" src="Data/Imagens/arrow-left.svg" alt="" />
                    <img className="arrow-right" src="Data/Imagens/Forma 1.svg" alt="" />
                </div>
                <div className="container-element">

                </div>
                <div className="container-element-mobile">

                </div>
            </div>
            <div className="controles-mobile">
                <img className="arrow-left-mobile" src="Data/Imagens/arrow-left.svg" alt="" />
                <img className="arrow-right-mobile" src="Data/Imagens/Forma 1.svg" alt="" />
            </div>
        </div>
    );
}

export default Slider