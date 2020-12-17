import React, { useEffect } from 'react'
import './accordion.css'

function Accordion() {
    function inicializarAccordion() {
        let acc = document.querySelectorAll(".accordion");

        for (let i = 0; i < acc.length; i++) {
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
    }
    function UmAccordionPorVez(escolhido) {
        let acc = document.querySelectorAll(".accordion");
        for (let i = 0; i < acc.length; i++) {
            let self = acc[i]
            let elemento = self.nextElementSibling
            if (self !== escolhido) {
                elemento.style.maxHeight = null
            }
        }
    }
    useEffect(() => [
        inicializarAccordion()
    ])
    return (
        <div className="container-accordion">
            <div className="container-elements-accordion">
                <button style={{
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    borderColor: "#a1a0a0"
                }}
                    className="accordion">Lorem ipsum
                <div className="btn-accordionOpen">
                        <img className="fecharAccordion" className="icon-accordion" src="Data/Imagens/accordionOpen.svg" alt="" />
                    </div>
                </button>
                <div className="panel">
                    <div className="column-panel">
                        <div className="row-panel">
                            <div className="title-pane">Lorem ipsum</div>
                            <img className="fecharAccordion" src="Data/Imagens/fecharAccordion.svg" alt="" />
                        </div>
                        <div className="row-panel-2">
                            <img className="img-accordion" src='Data/Imagens/Camada 1@2x.jpg' />
                            <p className="paragraph-accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                    </div>
                </div>

                <button className="accordion">Lorem ipsum
                <div className="btn-accordionOpen">
                        <img className="icon-accordion" src="Data/Imagens/accordionOpen.svg" alt="" />
                    </div>
                </button>
                <div className="panel">
                    <div className="column-panel">
                        <div className="row-panel">
                            <div className="title-pane">Lorem ipsum</div>
                            <img className="fecharAccordion" src="Data/Imagens/fecharAccordion.svg" alt="" />
                        </div>
                        <div className="row-panel-2">
                            <img className="img-accordion" src='Data/Imagens/Camada 1@2x.jpg' />
                            <p className="paragraph-accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                    </div>
                </div>

                <button className="accordion">Lorem ipsum
                <div className="btn-accordionOpen">
                        <img className="icon-accordion" src="Data/Imagens/accordionOpen.svg" alt="" />
                    </div>
                </button>
                <div className="panel">
                    <div className="column-panel">
                        <div className="row-panel">
                            <div className="title-pane">Lorem ipsum</div>
                            <img className="fecharAccordion" src="Data/Imagens/fecharAccordion.svg" alt="" />
                        </div>
                        <div className="row-panel-2">
                            <img className="img-accordion" src='Data/Imagens/Camada 1@2x.jpg' />
                            <p className="paragraph-accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                    </div>
                </div>

                <button className="accordion"
                    style={{
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderColor: "#a1a0a0"
                    }}>Lorem
                    ipsum
                <div className="btn-accordionOpen">
                        <img className="icon-accordion" src="Data/Imagens/accordionOpen.svg" alt="" />
                    </div>
                </button>
                <div className="panel">
                    <div className="column-panel">
                        <div className="row-panel">
                            <div className="title-pane">Lorem ipsum</div>
                            <img className="fecharAccordion" src="Data/Imagens/fecharAccordion.svg" alt="" />
                        </div>
                        <div className="row-panel-2">
                            <img className="img-accordion" src='Data/Imagens/Camada 1@2x.jpg' />
                            <p className="paragraph-accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion