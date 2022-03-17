import { people } from '../data/people.js'

const header = document.querySelector('header')
const main = document.querySelector('main')

const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener('click', function () {
  console.log('Thanks for clicking!')
  populateDOM()
})
header.appendChild(allCharsButton)

function populateDOM() {
  people.forEach((person) => {
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

function getLastNumber(url) {
  //'https://swapi.co/api/films/1/'
  //'https://swapi.co/api/people/10/'
  
  let end = url.lastIndexOf('/')
  let star = end - 2  
  console.log(star,end)
  if (url.charAt (star === '/')) {
    star++
  }
  return url.slice(star, end)

}
