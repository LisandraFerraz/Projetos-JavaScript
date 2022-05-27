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
// var bodyC = [...document.querySelectorAll('body')];

hambMenu.addEventListener('click', function() {
    console.log('teste');
    document.querySelector("body").classList.toggle("active");
})