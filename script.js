let lastFlippedCard = null;

function flipCard(card) {
    if (lastFlippedCard && lastFlippedCard !== card) {
        lastFlippedCard.classList.remove('flipped');
    }
    card.classList.toggle('flipped');
    lastFlippedCard = card.classList.contains('flipped') ? card : null;
}

function showMessage() {
    const message = document.getElementById('specialMessage');
    message.classList.toggle('hidden');
}