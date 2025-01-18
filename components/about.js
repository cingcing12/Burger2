// menu

const header = document.querySelector('.header');
const icon = document.querySelector('.icon');
const overLay = document.querySelector('.over-lay')
icon.addEventListener('click', () => {
    header.classList.toggle('active');
    overLay.classList.toggle('active');
    body.classList.toggle('active')

    overLay.addEventListener('click', () => {
        header.classList.remove('active');
        overLay.classList.remove('active');
        body.classList.remove('active')
    })
})

// darkMode

const body = document.querySelector("body");
const darkMode = document.querySelector(".dark-mode");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const h7 = document.getElementById('h7');
function myFunction(){
    if(body.style.background === "rgb(32, 29, 29)"){
        body.style.background = "white";
        dark.style = "scale:1; transform: rotate(0deg); transition-delay: .5s;"
        light.style = "scale:0; transform: rotate(0deg); transition: .5s ease;"
        h1.style.color = "black"
        h2.style.color = "black"
        h3.style.color = "black"
        h4.style.color = "black"
        h5.style.color = "black"
        h6.style.color = "black"
        h7.style.color = "black"
    }else{
        body.style.background = "rgb(32, 29, 29)";
        dark.style = "scale:0; transform: rotate(360deg); transition: .5s ease;"
        light.style = "scale:1; transform: rotate(360deg); transition-delay: .5s;"
        h1.style.color = "white";
        h2.style.color = "white";
        h3.style.color = "white";
        h4.style.color = "white";
        h5.style.color = "white";
        h6.style.color = "white";
        h7.style.color = "white";
    }
}


// const inputBox = document.querySelector(".input-box");
// const logo = document.querySelector(".logo");
// const btnSearch = document.querySelector(".icon-search");
// const concelSearch = document.querySelector(".concel-search");
// const darkMode2 = document.querySelector(".dark-mode")
// function myFunction2(){
//     if(btnSearch.style.display === "none"){
//         btnSearch.style.display = "block";
//         inputBox.style.display = "none";
//         concelSearch.style.display = "none";
//         logo.style.display = "block";
//         darkMode2.style.display = "block";
//     }else{
//         btnSearch.style.display = "none";
//         inputBox.style = "display: inline-flex; width: 100%;";
//         concelSearch.style.display = "inline-flex";
//         logo.style.display = "none";
//         darkMode2.style.display = "none";
//     }
// }

// btn search

const header2 = document.querySelector('.header');
const btnSearch = document.querySelector('.icon-search');
const concelSearch = document.querySelector('.concel-search');
btnSearch.addEventListener('click', () => {
    header2.classList.add('active2');
})
concelSearch.addEventListener('click', () => {
    header2.classList.remove('active2');
})

// clear input

const input = document.getElementById('input');
const clearInput = document.getElementById('clear-input');
clearInput.addEventListener('click', () => {
    input.value = "";
})



// for(let i = 0; i < 100000000; i++){
//     console.log(i, "I love you 😣💞")
// }

// const container2 = document.querySelector('.container2');
// const registerBtn = document.querySelector('.register-btn');
// const loginBtn = document.querySelector('.login-btn');
// registerBtn.addEventListener('click', () => {
//     container2.classList.add('active3');
// })
// loginBtn.addEventListener('click', () => {
//     container2.classList.remove('active3');
// })


// const searchBtn = document.querySelector(".icon-search");
// const inPut = document.getElementById("input");
// function myFunction3(){
//     if(searchBtn.style.display === "none"){
//         searchBtn.style.display = "inline-flex";
//         inPut.style.display = "none";
//     }else{
//         searchBtn.style.display = "none";
//         inPut.style.display = "inline-flex";
//         inPut.focus("input");
//     }
// }

const container3 = document.querySelector('.container3');
const closeQr1 = document.getElementById('close-qr1');
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
    container3.classList.add('active3')
});
closeQr1.addEventListener('click', () => {
    container3.classList.remove('active3')
});


const container33 = document.querySelector('.container3');
const closeQr2 = document.getElementById('close-qr2');
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
    container3.classList.add('active4')
});
closeQr2.addEventListener('click', () => {
    container3.classList.remove('active4')
});

const container333 = document.querySelector('.container3');
const closeQr3 = document.getElementById('close-qr3');
const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
    container3.classList.add('active5')
});
closeQr3.addEventListener('click', () => {
    container3.classList.remove('active5')
});



// const qr = document.querySelector('.qr');
// function myFunction4(){
//     if(qr.style.height === "100%"){
//         qr.style.height = "0%";
//     }else{
//         qr.style.height = "100%";
//     }
// }

// scroll reveal

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset:false
});
sr.reveal('.header', {delay:200, origin: 'top', reset:false});
sr.reveal('#container2', {delay:200, origin: 'left'});
sr.reveal('#container1', {delay:200, origin: 'top'});
sr.reveal('.containerr', {delay:200, origin: 'top'});
sr.reveal('#container3', {delay:200, origin: 'top'});
sr.reveal('#container4', {delay:200, origin: 'right'});
sr.reveal('.img2', {delay:200, origin: 'right'});
sr.reveal('.img1', {delay:200, origin: 'left'});
sr.reveal('.footer', {delay:200, origin: 'bottom'});


// ScrollReveal().reveal('#container2', {delay: 400, distance:'65px', duration:2600})



// const header3 = document.querySelector('.header');
// var lastScrollPos = 0;

// window.addEventListener('scroll', () => {

//     var scrollTop = window.pageYOffset;

//     if(scrollTop > lastScrollPos){
//         header3.style.transition = ".5s ease";
//         header3.style.transform = "translateY(-100%)";
//     }else{
//         header3.style.transition = ".6s ease";
//         header3.style.transform = "translateY(0%)";
//     }
//     lastScrollPos = scrollTop;
// })

window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');

    loading.classList.add('loading-hidden');

    loading.addEventListener('transitionend', () => {
        body.removeChild(loading);
    })
})