document.querySelector("body").style.minHeight = window.innerHeight + "px";

// HEADER
var header = document.querySelector('header');
var headerH1 = document.querySelector('header h1');
addEventListener('scroll', ()=>{
    if(pageYOffset >= 20){
        header.style.padding = "8px 20px";
        headerH1.style.fontSize = "16px";
    } else {
        header.style.padding = "20px";
        headerH1.style.fontSize = "20px";
    }
});