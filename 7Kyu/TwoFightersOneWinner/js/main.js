// Parameters : fighter objects (2 of them) and a first attacker.
// Return name of the winner
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }
// // Example
// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
//So, after a battle has begun they fight back and forth until one dies.

// Pseudocode
// Flag which begins. Start a while loop, with either health less than zero triggering exit.
// Mutate the attacked fighter, subtracting 
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {

    let fighters = [fighter1, fighter2];
    let attackerIndex = false;

    (firstAttacker == fighters[0].name) ? attackerIndex = 0 : attackerIndex = 1;

    while(fighters[0].health>0 && fighters[1].health>0){
        fighters[Number(!attackerIndex)] = attack(fighters[Number(attackerIndex)], fighters[Number(!attackerIndex)]);
        attackerIndex = !attackerIndex;
    }

    return fighters[Number(!attackerIndex)].name;
}

function attack(attacker, attacked){
    attacked.health -= attacker.damagePerAttack;
    console.log(`${attacker} attacks ${attacked}; ${attacked} now has ${attacked.health} health${(attacked.health<0) ? ' and is dead' : ''}.`)
    return attacked;
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));