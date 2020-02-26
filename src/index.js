import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// 1.
//JSX  basics 
//const element = <h1>Hello World People</h1>;      // JSX : javascript icindeki HTML
//const isim = 'Ahmet'
//const element = <p>Hello World <b>{isim}</b></p>;      // JSX : javascript icindeki HTML

// ReactDOM.render(
//                 (   
//                     <div>
//                         <p>Hello World <b>{isim}</b></p>
//                         <p>Lorem ipsum dolor sit amet.</p>
//                     </div>

//                 ) , document.getElementById('root'));

// const elemanlar = (
//                     <div>
//                         <h1>Hasan hosgeldin</h1> 
//                         <h3>Hamburg</h3>
//                     </div>
//                 )

// ReactDOM.render(elemanlar, document.getElementById('root'));

//ReactDOM.render( degisken veya komponent, document.getElementById('root'))


//2.
// class ile className arasindaki fark nedir? 
// React'ta mutlaka bir acilis tag'i bir de closing tag olmak zorunda
// <br />  <hr />  <img />  <input /> olarak kullanilmali

// const elemanlar = (
//     <div>
//         <h1>Hasan hosgeldin</h1> 
//         <br />
//         <h3 className="text">Hamburg</h3>
//     </div>
// )

// ReactDOM.render(elemanlar, document.getElementById('root'));



// 3.
// JS variables (degiskenleri) HTML icinde kullanma
//  JS variables should be written in  {}

// var toplam = 3 + 9;
// var name = 'Mehmet';

// const elemanlar = (
//     <div>
//         <p>2 + 3 = {2 + 3} </p>
//         <p>Toplam : {toplam} </p>
//         <p>{`Toplam : ${toplam}`} </p>
//         <p>My name is {name} </p>
//     </div>
// )

// ReactDOM.render(elemanlar, document.getElementById('root'));


// 4.
// variables for HTML attributes

// const goose = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
// const alternatif = "Picture of a goose";
// const title = "Picture of a goose";

// const gooseImg = <img src={goose} alt={alternatif} title= {title} /> 

// ReactDOM.render(gooseImg, document.getElementById('root'));


// 5. event atamak
// function atama ve kullanma
// fonksiyona onClick={makeDoggy()} parentezli yazarsak hata veriyor , NEDEN ? 
// CUNKU, sayfa yuklenir yuklenmez fonksiyonu icra ediyor ve click olmadigi icin e.target' da olusmuyor ve 
// hata veriyor
// function makeDoggy(e) {
//     e.target.src = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg';
//     e.target.setAttribute('alt', 'doggy');
// }

// const kitty = <img 
//                     src = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
//                     alt = "kitty"
//                     width = "250"
//                     height = "250"
//                     onClick = {makeDoggy}

//                 />

// ReactDOM.render(kitty, document.getElementById('root'));



// 6.
// if conditions in HTML tags
// const age = Math.floor(Math.random() * 50);
// const yetiskinMi = <p>  
//                        { age < 18 ? `Evet cocuk yasinda, ${age}` : `Evet yetiskin yasinda, ${age}` }
//                     </p>

// ReactDOM.render(yetiskinMi, document.getElementById('root'));



// 7.
// .map() functions

// const links = ['Home', 'Services', 'Team', 'About me'];

// const list = (<ul>
//                 { links.map( (item, index) => {
//                     return <li key={index} >{item}</li>
//                 })}
//             </ul>)


// const liElem = links.map( (item, index) => {
//                                                 return <li key={index} >{item}</li>
//                                             })
// const list = (<ul>{liElem}</ul>)


// ReactDOM.render(list, document.getElementById('root'));



//8.
// first componnet
// rcc : class Component
// rfc : functional Component

// class App extends Component {
//     render() {

//         return (
//             <div>
//                 <h2>Let's learn React</h2>
//                 <p>Hello World</p>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'));



// function App() {
//     const toplam = 2 + 3; 

//     return (
//         <div>
//             <h3>Sayilarin Toplami 2 + 3</h3>
//             <p>{toplam}</p>
//         </div>
//     )
// }
// ReactDOM.render(<App />, document.getElementById('root'));



class App extends Component {

    toplam2 = 5 + 2;

    // sayiUret = (val) => {
    //     return val * val;
    // }
    sayiUret = (val) => val * val;

    sayiVer = () => Math.floor(Math.random() * 100);

    render() {
        console.log(this);

        const toplam = 4 + 6;

        const sayiVerRender = () => Math.floor(Math.random() * 100);


        return (
            <div>
                <h3>Sayilarin Toplami 4 + 6</h3>
                <p>toplam from render : { toplam }</p>
                <p>toplam from class : { this.toplam2 }</p>
                <p>toplam from class function : { this.sayiUret(6) }</p>
                <p>sayiVer from class function : { this.sayiVer() }</p>
                <p>sayiVerRender : { sayiVerRender() }</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
