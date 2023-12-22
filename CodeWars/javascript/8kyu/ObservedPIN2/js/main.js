
function makePins (observedNum){

    let possDigits = [
        [0,8], 
        [1,2,4],
        [2,1,5,3],
        [3,2,6],
        [4,1,5,7],
        [5,2,4,6,8],
        [6,3,5,9],
        [7,4,8],
        [8,0,5,7,9],
        [9,6,8]
    ]

    let possiblePins = "";

    //make a multidimensional array. 
    let possArr = [];

    //populate it
    for (i=0;i<observedNum.length;i++){
        possArr[i] = possDigits[observedNum[i]]; 
    }
    
    if (observedNum.length == 1){
        for(i=0;i<possArr[0].length;i++){
            possiblePins = possiblePins + possArr[0][i] + ",";
        }
    }

    if (observedNum.length == 2){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + ",";
            }
        }
    }

    if (observedNum.length == 3){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                for(k=0;k<possArr[2].length;k++){
                    possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + possArr[2][k] + ",";
                }
            }
        }
    }

    if (observedNum.length == 4){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                for(k=0;k<possArr[2].length;k++){
                    for(l=0;l<possArr[3].length;l++){
                        possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + possArr[2][k] + possArr[3][l] + ",";
                    }
                }
            }
        }
    }

    if (observedNum.length == 5){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                for(k=0;k<possArr[2].length;k++){
                    for(l=0;l<possArr[3].length;l++){
                        for(m=0;m<possArr[4].length;m++){
                            possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + possArr[2][k] + possArr[3][l] + possArr[4][m] + ",";
                        }
                    }
                }
            }
        }
    }

    if (observedNum.length == 6){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                for(k=0;k<possArr[2].length;k++){
                    for(l=0;l<possArr[3].length;l++){
                        for(m=0;m<possArr[4].length;m++){
                            for(n=0;n<possArr[5].length;n++){
                                possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + possArr[2][k] + possArr[3][l] + possArr[4][m] + possArr[5][n] + ",";
                            }
                        }
                    }
                }
            }
        }
    }

    if (observedNum.length == 7){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                for(k=0;k<possArr[2].length;k++){
                    for(l=0;l<possArr[3].length;l++){
                        for(m=0;m<possArr[4].length;m++){
                            for(n=0;n<possArr[5].length;n++){
                                for(o=0;o<possArr[6].length;o++){
                                    possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + possArr[2][k] + possArr[3][l] + possArr[4][m] + possArr[5][n] + possArr[6][o] + ",";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (observedNum.length == 8){
        for(i=0;i<possArr[0].length;i++){
            for (j=0;j<possArr[1].length;j++){
                for(k=0;k<possArr[2].length;k++){
                    for(l=0;l<possArr[3].length;l++){
                        for(m=0;m<possArr[4].length;m++){
                            for(n=0;n<possArr[5].length;n++){
                                for(o=0;o<possArr[6].length;o++){
                                    for(p=0;p<possArr[7].length;p++){
                                        possiblePins = possiblePins + possArr[0][i] + possArr[1][j] + possArr[2][k] + possArr[3][l] + possArr[4][m] + possArr[5][n] + possArr[6][o] + possArr[7][p] + ",";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return possiblePins.slice(0,possiblePins.length-1).split(',');
}

function makePins2 (observedNum){
    let possDigits = [
        [0,8], 
        [1,2,4],
        [2,1,5,3],
        [3,2,6],
        [4,1,5,7],
        [5,2,4,6,8],
        [6,3,5,9],
        [7,4,8],
        [8,5,7,9],
        [9,6,8]
    ]

    let possiblePins = "";

    //make a multidimensional array. 
    let possArr = [];

    //populate it
    for (i=0;i<observedNum.length;i++){
        possArr[i] = possDigits[observedNum[i]]; 
    }

    function core (digits){
        possiblePins = possiblePins;
    }

    return possiblePins;

}