// CAROUSEL 1
var n1 = 1;
var c1Arrows = document.querySelectorAll('#car1 button');

c1Arrows[0].addEventListener('click', ()=>{
    n1 += - 1;
    showImg1();
})

c1Arrows[1].addEventListener('click', ()=>{
    n1++;
    showImg1();
})

function showImg1(){
    var c1Imgs = document.querySelectorAll('#car1 figure');
    for (let i = 0; i < c1Imgs.length; i++) {
        c1Imgs[i].style.display = 'none';
    }

    if(n1 > c1Imgs.length){n1 = 1;}
    if(n1 < 1){n1 = c1Imgs.length}

    c1Imgs[n1 - 1].style.display = 'block';
}

showImg1();


// CAROUSEL 2
var n2 = 1;
var c2Imgs = document.querySelectorAll('#car2 figure');
var c2Arrows = document.querySelectorAll('#car2 > button');
var c2Dots = document.querySelectorAll('#dts1 button');

for (let u = 0; u < c2Dots.length; u++) {
    c2Dots[u].addEventListener('click',()=>{
        dotControl_c2(u + 1)
    });
}

function dotControl_c2(x){
    showImg2(n2 = x);
}

c2Arrows[0].addEventListener('click', ()=>{
    n2 += - 1;
    if(n2 < 1){n2 = c2Imgs.length}
    showImg2(n2);
});

c2Arrows[1].addEventListener('click', ()=>{
    n2++;
    if(n2 > c2Imgs.length){n2 = 1;}
    showImg2(n2); 
});

function showImg2(n2){
    for (let q = 0; q < c2Imgs.length; q++) {
        c2Dots[q].classList.remove('dot-active');    
        c2Imgs[q].style.display = 'none';
    }
    
    c2Dots[n2-1].classList.add('dot-active');
    c2Imgs[n2-1].style.display = 'block';
}

showImg2(n2);


// CAROUSEL 3
var n3 = 1;
var c3Imgs = document.querySelectorAll('#car3 figure');
var c3Arrows = document.querySelectorAll('#car3 > button');
var c3Dots = document.querySelectorAll('#dts2 button');

for (let e = 0; e < c3Dots.length; e++) {
    c3Dots[e].addEventListener('click',()=>{
        dotControl_c3(e + 1);
    });
}

function dotControl_c3(x){
    n3 = x;
    showImg3(n3);
}

c3Arrows[0].addEventListener('click',()=>{
    n3 = n3 - 1;
    if(n3 < 1){n3 = c3Imgs.length};
    showImg3(n3);
});

c3Arrows[1].addEventListener('click',()=>{
    n3++;
    if(n3 > c3Imgs.length){n3 = 1};
    showImg3(n3);
});

function showImg3(n3){
    for (let w = 0; w < c3Imgs.length; w++) {
        c3Imgs[w].style.display = 'none';
        c3Dots[w].classList.remove('dot-active');
    }
    c3Imgs[n3 - 1].style.display = 'block';
    c3Dots[n3 - 1].classList.add('dot-active');
}

showImg3(n3);

function slide_c3(){
    n3 < c3Imgs.length ? n3++ : n3 = 1;

    showImg3(n3);
    setTimeout('slide_c3()',4000);
}

function runSlide_c3(){
    setTimeout('slide_c3()',4000);
}

runSlide_c3();


// CAROUSEL 4

// const slides = Array.from(carouselTrack.children);
// const slideSize = slides[0].getBoundingClientRect();
// let slideW = slideSize.width;
// let slideH = slideSize.height;

const c4TrackCont = document.querySelector('.car4-track-cont');
const c4Track = document.querySelector('.car4-track');
const c4Slide = document.querySelector('.car4-slide');
const c4Slides = document.querySelectorAll('.car4-slide');

const c4SlideW = c4Slide.clientWidth;
const c4SlideH = c4Slide.clientHeight;

c4TrackCont.style.width = c4SlideW + 'px';
c4TrackCont.style.height = c4SlideH + 'px';

var buttonContainer = document.querySelector('.car4-butt-cont');
var buttonNode = document.querySelectorAll('.car4-butt');
var indicator = document.querySelector('.car4-indicator');
var buttonNodeArray = Array.from(buttonNode);

buttonNodeArray.forEach((button, i)=>{
    button.addEventListener('click', ()=>{
        if(i == 0){
            indicator.style.left = '0';
            c4Track.style.left = '0';
        } else if (i == 1){
            indicator.style.left = '100px';
            c4Track.style.left = '-' + c4SlideW + 'px';
        } else if (i == 2){
            indicator.style.left = '200px';
            c4Track.style.left = '-' + c4SlideW * 2 + 'px';
        }
    });
});


// CAROUSEL 5
const c5Slide = document.querySelector('.car5-slide');
const c5Images = document.querySelectorAll('.car5-slide img');

//Buttons
const c5prevBtn = document.getElementById('prevBtn');
const c5nextBtn = document.getElementById('nextBtn');

let c5Counter = 1;
const c5SlideW = c5Images[0].clientWidth;

c5Slide.style.transform = `translateX(${-c5SlideW * c5Counter}px)`;
// 'translateX(' + (-c5SlideW * c5Counter) + 'px)';

//Button listeners
c5prevBtn.addEventListener('click', ()=>{
    if (c5Counter <= 0) return;
    c5Slide.style.transition = 'transform 0.4s linear';
    c5Counter--;
    c5Slide.style.transform = `translateX(${-c5SlideW * c5Counter}px)`;
});

c5nextBtn.addEventListener('click', ()=>{
    if (c5Counter >= c5Images.length -1) return;
    c5Slide.style.transition = 'transform 0.4s linear';
    c5Counter++;
    c5Slide.style.transform = `translateX(${-c5SlideW * c5Counter}px)`;
});

c5Slide.addEventListener('transitionend', ()=>{
    if (c5Images[c5Counter].id === 'lastClone') {
        c5Slide.style.transition = 'none';
        c5Counter = c5Images.length -2;
        c5Slide.style.transform = `translateX(${-c5SlideW * c5Counter}px)`;  // akcija!!!
    } else if (c5Images[c5Counter].id === 'firstClone') {
        c5Slide.style.transition = 'none';
        c5Counter = c5Images.length - c5Counter;
        c5Slide.style.transform = `translateX(${-c5SlideW * c5Counter}px)`;  // akcija!!!
    }
});