

const cards =[
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];


function createBoard(){
	for(let i = 0; i<cards.length; i++){
let cardElement = document.createElement('img');


		cardElement.setAttribute('src' , "images/back.png");
		cardElement.setAttribute('data-id' , i);
		cardElement.addEventListener('click', flipCard);
		document.getElementsByTagName('div')[0].appendChild(cardElement);
	}
}

function checkForMatch(){

	if(cardsInPlay.length == 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
    }
}
};


function flipCard(){
	const cardID = parseInt(this.getAttribute('data-id'), 10);
console.log("User flipped" +  " " + (cards[cardID].rank));
this.src = cards[cardID].cardImage;
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);
cardsInPlay.push(cardID).rank;
checkForMatch();
	
};
createBoard();



