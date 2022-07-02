let deckID = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(resp => resp.json())
  .then(data => {
       console.log(data)
       deckID = data.deck_id
  })

document.querySelector('button').addEventListener('click', drawTheCards)

function drawTheCards(){
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
    .then( res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.image1 img').src = data.cards[0].image
        document.querySelector('.image2 img').src = data.cards[1].image

        let playerOneVal = convertToNum(data.cards[0].value)
        let playerTwoVal = convertToNum(data.cards[1].value)

        if (playerOneVal > playerTwoVal){
            document.querySelector('.result').innerText = 'Player 1 Wins'
            
        }
        else if(playerOneVal < playerTwoVal){
            document.querySelector('.result').innerText = 'Player 2 Wins'
        }
        else{
            document.querySelector('.result').innerText = 'Time for War'
        }
        
        function convertToNum(str) {
            if (str === 'ACE'){
                return 14
            }
            else if (str === 'KING'){
             return 13
            }
            else if (str === 'QUEEN' ){
                return 12
            }
            else if (str === 'JACK' ){
                return 11
            }
            else{
                return Number(str)
            }
        }


    })
}
