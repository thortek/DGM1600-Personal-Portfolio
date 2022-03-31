import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'


const senatorsDiv = document.querySelector('.senatorsDiv')

function simplifiedSenators() {
    return senators.map(senator => {
      const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
      return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        gender: senator.gender,
        party: senator.party,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
        seniority: senator.seniority,
        state: senator.state,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct
      }
    })
  }

  function populateSenatorDiv(simplifiedSenators) {
    simplifiedSenators.forEach(senator =>  {
      const senFigure = document.createElement ('figure')
      
    })
    //TODO: create figure element with image and figcaption
    // set the image source to imgURL
    // append children to the DOM
  }