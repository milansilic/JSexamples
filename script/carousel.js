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