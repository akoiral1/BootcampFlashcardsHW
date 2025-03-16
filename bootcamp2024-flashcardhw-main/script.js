const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    for(let i = 0; i < flashcards.length; i++){
        let cur = flashcards[i];
        let front = cur.term;

        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        let text = document.createElement('p');
        text.innerText = front;

        cardDiv.appendChild(text);
        cardDiv.dataset.flipped = "false";
    }

}

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;
