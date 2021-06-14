// TABS
var tabBtns = document.querySelectorAll('#tabs1 header button');
var tabCont = document.querySelectorAll('#tabs1 article');
for (let q = 0; q < tabBtns.length; q++) {
    tabBtns[q].addEventListener('click', ()=>{
        for (let w = 0; w < tabBtns.length; w++) {
            tabCont[w].classList.remove('visable');
        }
        tabCont[q].classList.add('visable');
    });
}