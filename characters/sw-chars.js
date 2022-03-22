import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from './utils/index.js'
const header = document.querySelector('header')
const main = document.querySelector('main')

const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener('click', function () {
  console.log('Thanks for clicking!')
  populateDOM(people)
})

const maleCharacters = people.filter (person => person.gender === 'male') //elegant filter
// todo: filter for female 
// todo: filter for other genders (ie, n/a, non, jabba)


const maleCharsButton = document.createElement('button')
maleCharsButton.textContent = 'Male Characters'
maleCharsButton.addEventListener('click', () => populateDOM(maleCharacters) )

//todo: add famale char button and have it populate the dom 
//todo: add other charters button

header.appendChild(allCharsButton)
header.appendChild(maleCharsButton)

function populateDOM(characters) {
  removeChildren(main)
  characters.forEach((person) => {
    const personFig = document.createElement('figure')
    const personImg = document.createElement('img')
    let charNum = getLastNumber(person.url)
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const personCap = document.createElement('figcaption')
    personCap.textContent = person.name

    personFig.appendChild(personImg)
    personFig.appendChild(personCap)
    main.appendChild(personFig)
  })
}

