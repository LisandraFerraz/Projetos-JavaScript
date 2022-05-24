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
        item.scrollLeft += CardsGroupLarg;
    })

    btnBef[i].addEventListener('click', () =>{
        item.scrollLeft -= CardsGroupLarg;
    })
    })