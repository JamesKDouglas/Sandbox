// parameters: input rock paper scissors lizard or spock for each player.
// return: who wins according to the rules:
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors

//So it's a circular diagram with a 5 pointed star. Each point has scissors, paper, rock, lizard spock from the noon position, winning clockwise. Then an internal star that passes left to right. The rule set is a graph.
//5 items. 10 total combinations

//How about an array where the left one wins.
// [
//     ['scissors','paper'],
//     ['paper','rock'],
//     ['rock','lizard'],
//     ['lizard','spock'],
//     ['spock','scissors'],
//     ['scissors','lizard'],
//     ['paper','spock'],
//     ['rock','scissors'],
//     ['lizard','paper'],
//     ['spock','rock'],
// ]
// example:
// pseudocode:

console.log(rpsls('rock', 'paper'));

function rpsls(pl1,pl2){
    pl1 = pl1.toLowerCase();
    pl2 = pl2.toLowerCase();

    let wins = [
        ['scissors','paper'],
        ['paper','rock'],
        ['rock','lizard'],
        ['lizard','spock'],
        ['spock','scissors'],
        ['scissors','lizard'],
        ['paper','spock'],
        ['rock','scissors'],
        ['lizard','paper'],
        ['spock','rock'],
    ];

    for (let i=0;i<wins.length;i++){
        if (pl1 == wins[i][0] && pl2 == wins[i][1]){
            return "Player 1 Won!";    
        } else if (pl2 == wins[i][0] && pl1 == wins[i][1]){
            return "Player 2 Won!";
        } 
    }
    return "Draw!";
}