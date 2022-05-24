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

const menu_hamb = document.querySelector('.menu-hamb');
const sidebar = document.querySelector('.sidebar');

menu_hamb.addEventListener('click', () => {
    menu_hamb.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})