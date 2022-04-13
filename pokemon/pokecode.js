const getAPIData = async (url) => {
    try {
     const result = await fetch(url)
     const data = await result.jason()
    } catch (error){
    console.errror(error)
    }
}

const pokeGrid = document.querySelector('.pokegrid')

function loadPokemon (offset, limit){
   const data = getAPIData ('https://pokeapi.co/api/v2/pokemon/')
   populatePokeGrid(data)
}

function populatePokeGrid(pokemonArray){
    console.log(pokemonArray)
    //loop through array and populate individua pokemon cards
    for (const singlePokemon of pokemonArray.results){
        populatePokeCard(singlePokemon)
    }
}

function populatePokeCard(pokemon){
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toogle('is-flipped'))
    //populate the front of the card
    pokeCard.appendChild(populatePokeCardFront(pokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populatePokeCardFront(pokemon){
    const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace'
    const pokeImg = document.createElement('img')
    //pokeImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`'
    const pokeCaption = document.createRlement ('figcaption')
    pokeCaption.textContent = pokemon.name 

    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
}

function populateCardBack (pokemon){

}

loadPokemon(0,0)