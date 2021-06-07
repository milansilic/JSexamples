var body = document.querySelector("body").style.minHeight = window.innerHeight + "px";

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

// TABS
var tabBtns = document.querySelectorAll('.tabs1 header button');
var tabCont = document.querySelectorAll('.tabs1 article');
for (let q = 0; q < tabBtns.length; q++) {
    tabBtns[q].addEventListener('click', ()=>{
        for (let w = 0; w < tabBtns.length; w++) {
            tabCont[w].classList.remove('visable');
        }
        tabCont[q].classList.add('visable');
    });
}

// ACC 1
var accLabel4 = document.querySelectorAll('.acc1 li h4');
var accItemBodys = document.querySelectorAll('.acc1-cont');
for (let c = 0; c < accLabel4.length; c++) {
    accLabel4[c].addEventListener('click', ()=>{
        accLabel4[c].classList.toggle('active4');
        
        if(accLabel4[c].classList.contains('active4')){
            accItemBodys[c].style.maxHeight = accItemBodys[c].scrollHeight + "px";
        } else {
            accItemBodys[c].style.maxHeight = 0;
        } 
    });
}

// ACC 2
let acc2H = document.querySelectorAll(".acc2 h4");
let acc2Cont = document.querySelectorAll(".acc2 li");
for (let i = 0; i < acc2H.length; i++) {
    acc2H[i].addEventListener("click", ()=>{
        if (acc2Cont[i].style.maxHeight === acc2Cont[i].scrollHeight + "px"){
            acc2H[i].classList.toggle('active2');
            acc2Cont[i].style.maxHeight = "0px";
        } else {
            for (let x = 0; x < acc2H.length; x++) {
                acc2H[x].classList.remove('active2');
                acc2Cont[x].style.maxHeight = "0px";
            }
            acc2H[i].classList.add('active2');
            acc2Cont[i].style.maxHeight = acc2Cont[i].scrollHeight + "px";
        }
    });
}