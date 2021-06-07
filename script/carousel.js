var slideIndex = 1;

// glavna funkcija, koja prihvata neku vrednost i stavlja u promenjivu n, koju koristi.
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // slike
    var dots = document.getElementsByClassName("dot"); // tacke
  
    if (n > slides.length){
        slideIndex = 1
    }    
  
    // kada je vrednost nj manja od 1, slide index je broj elemenata niza slides
    if (n < 1) {
        slideIndex = slides.length
    }
    
    // oduzima vidljivost svim slikama
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // dots styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // dodaje se vidljivost slici sa adekvatnim rednim brojem
    slides[slideIndex-1].style.display = "block";
    // dodaje se klasa active na tacku adekvatnog rednog broja
    dots[slideIndex-1].className += " active";

    // console.log(`n je:  ${n}`);
    // console.log(`slideIndex je:  ${slideIndex}`);
}

// funk zakacena na strelice, koja poziva funkciju u koju prebacuje vrednost preko parametra n
// funkcija koja dodaje i oduzima 1 na postojeci broj od 3  broja n
function plusSlides(n) {
    showSlides(slideIndex = slideIndex + n);
}

// funk zakacena na tacke
function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);








// MOJ PRIMER // !!!

var slajdIndeks = 1;


function prikaziSlajd(n){
    var mojSlajd = document.getElementsByClassName('mojSlajd');

    for (let z = 0; z < mojSlajd.length; z++) {
        mojSlajd[z].style.display = "none";
    }

    if(n < 1){
        slajdIndeks = mojSlajd.length;
    }

    if(n > mojSlajd.length){
        slajdIndeks = 1;
    }

    mojSlajd[slajdIndeks-1].style.display = "block";
}

// kako bismo promenili stranicu, moramo ponovo pokrenuti funkciju koja prikazuje sliku
function trenutniSlajd(n){
    prikaziSlajd(slajdIndeks = n);
}

function saltajSlajd(n){
    prikaziSlajd(slajdIndeks = slajdIndeks + n);
}

// ova funkcija je okinuta kad se stranica ucita
prikaziSlajd(slideIndex);
