// parameters: Input an integer up to 10^14. Call it N.
// return: The maximum number in a sequence that goes like this:
// N =c*d;
// N' = c+d;

// if N'>N then that's a valid step in the sequence.

// example:
// Let N=26
// N' = 2 x 24 = 48
// N = 2 + 24 = 26
// so c is 2 and d is 24 here.

//It is also true that,
// N' = 3 x 23 = 69
// N = 3 + 23 = 26
// so c is 3, d is 23 here.

//and that,
//N' = 4*22 = 88;
//N = 4+22 = 26;

//eventually we get to;
// N' = 13*13 = 169;
// N = 13+13 = 26

//This series of numbers, 48, 69, 88 is called a 'series' that belongs to the starting integer N or 26. The final number is excluded from the series based on a new rue that d cannot equal c.

//find the maximum integer.

//N cannot start at less than 5.

// pseudocode:
// Well, the largest number is obviously just going to be the one with the largest factors. 
// so if the number is even c = N/2-1. If it's odd then c= Math.floor(N/2);
// d = N-c
// then the final number is just c*d;
function maxIntChain(n) {
    if (n<5){
        return -1;
    }
    let c,d = 0;

    if (n%2 == 0){
        c = n/2-1;
        d = n-c;
    } else if (n%2 ==1){
        c = Math.floor(n/2);
        d = n-c;
    }

    return c*d;
}

//Codewars returns,
// Input was 92911: expected 2158113480 to equal -2136853816
// This makes no sense. 

// I get 92911
// c: 46455 d:46456

// there is obviously something wrong with the codewars code. N returned must be larger than the input, not negative when the input is positive. The issue was reported 2 hrs ago. lol and then an hour ago it was fixed so I'll just refresh.

//The description of a "series" here is inane and just obscures the problem. The description is very poorly written when the 'problem' is very simple.