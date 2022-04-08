import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const allMembersOfCongress = [...senators, ...representatives] // modern combining of array data... like a genius!

const senatorsDiv = document.querySelector('.senatorsDiv')
const seniorityHeader = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')

function simplifiedSenators() {
    return senators.map(senator => {
      const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
      return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        gender: senator.gender,
        party: senator.party,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        seniority: senator.seniority,
        state: senator.state,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct
      }
    })
  }

  function populateSenatorDiv(senatorsArray) {
    senatorsArray.forEach(senator => {
      const senFigure = document.createElement('figure')
      const figImg = document.createElement('img')
      const figCaption = document.createElement('figcaption')
  
      figImg.src = senator.imgURL
      figCaption.textContent = senator.name
  
      senFigure.appendChild(figImg)
      senFigure.appendChild(figCaption)
      senatorsDiv.appendChild(senFigure)
    })
  }
  
  populateSenatorDiv(simplifiedSenators())

  const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)
  
  const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)
  
  const biggestVactionerList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(' and ')
  
  seniorityHeader.textContent = `The most senior Senator is ${mostSeniorMember.name} and the biggest fans of vacations are ${biggestVactionerList}.`

  simplifiedSenators().forEach(senator => {
   if(senator.loyaltyPct === 100) {
          let listItem = document.createElement('li')  
          listItem.textContent = senator.name
          loyaltyList.appendChild(listItem)
    }
  })

  
  //const listItem = simplifiedSenators().reduce((acc, senator) => acc.loyaltyPct > senator.loyaltyPct ? acc : senator)
  //const listItem = simplifiedSenators().filter(senator => senator.loyaltyPct === 100)

  //const listItem =  simplifiedSenators().forEach(senator => {
  //      if(senator.loyaltyPct === 100){
  //        let listItemButton = document.createElement('button')
  //        listItemButton.textContent = 'Party Loyals'
  //        listItemButton.addEventListener('click', () => populateDOM(listItem))
  //      }
  //    })


  //Buttons 

  //const mostSeniorMemberButton = document.createElement('button')
  //mostSeniorMemberButton.textContent = 'Most Senior'
 // mostSeniorMemberButton.addEventListener('click', () => populateSenatorDiv(mostSeniorMember))

 // seniorityHeader.appendChild(mostSeniorMemberButton)
 


//  simplifiedSenators().forEach(senator => {
//    if(senator.loyaltyPct === 100) {
//      let listItem = document.createElement('li')  ul;
//      listItem.textContent = senator.name
//      loyaltyList.appendChild(listItem)
//    }
//  })

//simplifiedSenators().forEach(senator => {
//           if(senator.loyaltyPct === 100) {
//         let loyaltyListButton = document.createElement('button')
//         loyaltyListButton.textContent = 'Party Loyals'
//        loyaltyListButton.addEventListener('click', function () {
//           populateDOM(loyaltyList)})
//         }
//})

//loyaltyList.appendChild(loyaltyListButton)

// Anchor list 
 //simplifiedSenators().forEach(senator => {
//       if(senator.loyaltyPct === 100) {
//      let listItem = document.createElement('li')
//      const anchor = document.createElement('a')
//      anchor.href = '#'
//      anchor.textContent = senator.name
//      anchor.addEventListener('click', () => populateloyaltyList(senator))
//      listItem.appendChild(anchor)
//      loyaltyList.appendChild(listItem)
//  }
//  })

// TODO items to consider for your final project
// TODO: Some sort of UI for sorting by party affiliation or by party and gender with a count
// TODO: Much better styling of the grid of senators and their names.
// TODO: Maybe include more data with each congress member such as links to their Twitter or Facebook pages
// TODO: Incorporate a way to select the members of the house of representatives