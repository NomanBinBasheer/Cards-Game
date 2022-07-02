let deckID = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(resp => resp.json())
  .then(data => {
       console.log(data)
  })