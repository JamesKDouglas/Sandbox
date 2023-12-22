function defineSuit(card) {
    let suite = card.slice(card.length-1, card.length);
    console.log(suite);
    if (suite == "♠"){
        return "spades";
    } else if (suite == "♦"){
        return "diamonds";
    } else if (suite == "♥"){
        return "hearts";
    } else {
        return "clubs";
    }
}

console.log(defineSuit('Q♠'))