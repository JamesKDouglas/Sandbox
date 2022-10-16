// function heavyMetalUmlauts(boringText) {

//         let awesomeText = boringText;
//         let tempString;

//         while (tempString!=awesomeText){//Keep going until no changes are made
//             tempString = awesomeText;

//             awesomeText = awesomeText.replace('A', `\u00c4`);
//             awesomeText = awesomeText.replace('E', `\u00cb`);
//             awesomeText = awesomeText.replace('I', `\u00cf`);
//             awesomeText = awesomeText.replace('O', `\u00d6`);
//             awesomeText = awesomeText.replace('U', `\u00dc`);
//             awesomeText = awesomeText.replace('Y', `\u0178`);
        
//             awesomeText = awesomeText.replace('a', `\u00e4`);
//             awesomeText = awesomeText.replace('e', `\u00eb`);
//             awesomeText = awesomeText.replace('i', `\u00ef`);
//             awesomeText = awesomeText.replace('o', `\u00f6`);
//             awesomeText = awesomeText.replace('u', `\u00fc`);
//             awesomeText = awesomeText.replace('y', `\u00ff`);

//         }
      
//         return awesomeText;
//     }
// something more DRY
function heavyMetalUmlauts(boringText) {
    let awesomeText = boringText;
    let tempString;
    let umMap = [[`A`,`\u00c4`],[`E`,`\u00cb`],[`I`,`\u00cf`],
                [`O`,`\u00d6`],[`U`,`\u00dc`],[`Y`,`\u0178`],
                [`a`,`\u00e4`],[`e`,`\u00eb`],[`i`,`\u00ef`],
                [`o`,`\u00f6`],[`u`,`\u00fc`],[`y`,`\u00ff`]]
    // console.log(umMap[0][1]);
    while (tempString!=awesomeText){//Keep going until no changes are made
        tempString = awesomeText;
        for (let i=0;i<umMap.length;i++){
            awesomeText = awesomeText.replace(`${umMap[i][0]}`, `${umMap[i][1]}`);  
        }
    }
    return awesomeText;
}


let s = "Announcing the Macbook Air Guitar";
console.log(heavyMetalUmlauts(s));