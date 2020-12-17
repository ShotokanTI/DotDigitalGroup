import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/headerSection/header.jsx';
import Slider from '../src/components/sliderSection/slider.jsx';
import Section3 from '../src/components/section3/section3.jsx';
import Accordion from '../src/components/accordion/accordion.jsx';
import Formulario from '../src/components/formulario/formulario.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Header />
    <Slider/>
    <Section3/>
    <Accordion/>
    <Formulario/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
