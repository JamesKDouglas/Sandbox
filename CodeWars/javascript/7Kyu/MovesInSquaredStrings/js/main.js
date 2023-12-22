function vertMirror(strng) {
    let lines = strng.split("\n");
    let newLine = [];
    let newLines = [[],[]];

    for (let j=0;j<(lines.length);j++){ 
        newLine = [];   
        for (let i=(lines.length-1);i>=0;i--){
            newLine.push(lines[j].slice(i,i+1));
        }
        newLines[j] = newLine.join('');
        // console.log(`newlines: ${newLines}`); 
    }
    return newLines.join("\n");    
}
function horMirror(strng) {
    let lines = strng.split("\n");
    let newLines = [];

    for (let i=(lines.length-1);i>=0;i--){
        newLines.push(lines[i]);
    }
    console.log(newLines);
    return newLines.join("\n");
}
function oper(fct, s) {
    console.log(s);
    return fct(s);
}

// let s = "abcd\nefgh\nijkl\nmnop";

// console.log(`vertical reflection: ${oper(vertMirror, s)}`);

// console.log(`horizontal reflection: ${oper(horMirror,s)}`);

//Oh, right I forgot there is a .reverse method.
// function vertMirror(str) {
//     return str.split('\n')
//       .map(line => line.split('').reverse().join(''))
//       .join('\n')
// }
// function horMirror(str) {
//     return str.split('\n')
//       .reverse()
//       .join('\n')
// }
// function oper(fct, s) {
//     return fct(s)
// }

// Expected: 'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw', instead got: 'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb'
let s = "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu";
// console.log(s);
console.log(`vertical reflection: ${oper(vertMirror, s)}`);