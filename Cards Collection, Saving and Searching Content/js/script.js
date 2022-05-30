// script cards section
const cardsGroup = [...document.querySelectorAll('.cards-group')];
const btnBef = [...document.querySelectorAll('.btnBef')];
const btnAft = [...document.querySelectorAll('.btnAft')];

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

// script p/ omdb api
// title https://omdbapi.com/?s=avengers&page=1&apikey=60ee3e91
// details http://www.omdbapi.com/?i=tt3896198&apikey=60ee3e91

const searchBar = document.getElementById('search-bar');
const searchList = document.getElementById('search-list');
const cardsGroupFlex = document.getElementById ('cards-group');
const card = document.getElementById ('card');

// loading content from omdb api
async function loadContent(searchItem){
    
    const URL = `https://omdbapi.com/?s=${searchItem}&page=1&apikey=60ee3e91`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if(data.Response == "True") {
        displayContentList(data.Search);
    }
}

function findContent(){
    let searchItem = (searchBar.value).trim();
    if(searchItem.length > 0){
        searchList.classList.remove('hide-search-list');
        loadContent(searchItem);
    }
    else{
        searchList.classList.add('hide-search-list');
    }
}

function displayContentList(content){
    searchList.innerHTML = "";

    for(let idx = 0; idx < content.length; idx++){
        
        let contentListItem = document.createElement('div');

        contentListItem.dataset.id = content[idx].imdbID;
        contentListItem.classList.add('search-list-item');
        
        if(content[idx].Poster != "N/A")
            moviePoster = content[idx].Poster;
        else
            moviePoster = "resources/img-not-found.png";
        
        contentListItem.innerHTML = `
        <div class="search-item-poster">
            <img src="${moviePoster}">
        </div>
        <div class="search-item-desc">
            <h3>${content[idx].Title}</h3>
            <p>${content[idx].Year}</p>
        </div>
        `;

        searchList.appendChild(contentListItem);

    }
    loadContentDetails();
}

function loadContentDetails(){
    const searchListContent = searchList.querySelectorAll('.search-list-item');

    searchListContent.forEach(content => {
        content.addEventListener('click', async () =>{
            searchList.classList.add('hide-search-list');
            searchBar.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${content.dataset.id}&apikey=60ee3e91`);
            const contentDetails = await result.json();
            displayContentDetails(contentDetails);
        });
    });
}

function displayContentDetails(details){

    cardsGroupFlex.innerHTML += `
        <div class="card"> 
            <img src="${(details.Poster != "N/A") ? details.Poster: "resources/img-not-found.png"}" alt="" class="card-img" />
            <div class="card-description">
              <p class="card-title">${details.Title}
              <span class="card-year">${details.Year}</span></p>
              <p class="card-rate">IMDB Rate: ${details.imdbRating}</p>
              <p>${(details.Plot)}</p>
              <div class="card-tags">
                <p>Tags</p>
                <span>${(details.Genre)} </span>
                <span>${(details.Type)} </span>
              </div>
            </div>
          </div> 
        `;
}