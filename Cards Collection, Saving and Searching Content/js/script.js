// script cards section
const cardsGroup = [...document.querySelectorAll('.cards-group')];
const btnBef = [...document.querySelectorAll('.btnBef')];
const btnAft = [...document.querySelectorAll('.btnAft')];


/*
btnBef.addEventListener('click', function(){
    console.log('teste')
})
*/

cardsGroup.forEach((item, i) => {
    let tmnCardsGroup = item.getBoundingClientRect();
    let CardsGroupLarg = tmnCardsGroup.width;

    btnAft[i].addEventListener('click', () =>{
        console.log('teste')
        item.scrollLeft += CardsGroupLarg;
})

    btnBef[i].addEventListener('click', () =>{
        console.log('teste2')
        item.scrollLeft -= CardsGroupLarg;
    })
})

/*script menu hamburguer */


var hambMenu = document.querySelector(".menu-toggle");
var respHambMenu = document.querySelector(".menu-toggle-2");
var exitToggle = document.querySelector(".exit-toggle");
// var bodyC = [...document.querySelectorAll('body')];

hambMenu.addEventListener('click', function() {
    console.log('teste');
    document.querySelector("body").classList.toggle("active");
})

respHambMenu.addEventListener('click', function(){
    console.log('teste 2');
    document.querySelector("body").classList.toggle("respActive");
})

exitToggle.addEventListener('click', function(){
    console.log('teste 3');
    document.querySelector("body").classList.remove("respActive");
})