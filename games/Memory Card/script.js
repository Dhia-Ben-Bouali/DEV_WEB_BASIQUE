

const back = `area`


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


var array = ["js", "js", "python", "python", "csharp", "csharp", "cplusplus", "cplusplus", "html", "html", "css", "css"]
let paragraphe = ""

for (var i = 0; i < 12; i++) {
    var j = 1
    let randomnumber = Math.floor(Math.random() * array.length)
    paragraphe += ` <div class="memory-card" data-framework="${array[randomnumber]}">
                      <img class="front-face" src="${array[randomnumber]}.png"} />
                      <img class="back-face" src="${back}.png"} />
                    </div> \n`
    array.splice(randomnumber, 1)
}

document.getElementById("memory-game").innerHTML = paragraphe
const cards = document.querySelectorAll('.memory-card');

cards.forEach(card => card.addEventListener('click', flipCard));




function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;


        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 800);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}












