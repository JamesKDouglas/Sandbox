function plural(n){
    let words = n.split(' ');
    
    if (words[2] == 1){
        return false;
    } else {
        return true;
    }
}

console.log(plural("Plural for 1"));

//This is a second perfectly good solution, but again CodeWars is unable to run it.
//Ok, I understand. The incoming thing is just the number. It's just an extremely easy exercise. Ok.
