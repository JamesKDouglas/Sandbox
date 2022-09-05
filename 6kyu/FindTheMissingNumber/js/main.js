// let str= "2491771842155490223116351359624312364528611014378220168235412194624714016711713319814428177371372322483356775157513821213812018915616178169180422057425055702049257200441752021649520319463179155401482271358391661117611818617619918524622611214787196431912247122923132852316022867242822118221107236471216824475181150239121712918214915910923798652331532147215125222170494190146216102161182971832061006216327616919791582131417224013622832171920823414111920188116842613237131811954516213053245241210105361242183110491312860155099247920710123810311423018722589102126931061741129193139134341491423011512712511380881921451541731651085920912215220148";
// let a=1;
// let b=250;

// Wrong value - Expected: [709, 790], instead got: [79, 97];

let str = "376668895315701798801768637391366761775802343393734618488419733333770410893633388810340563516879721487872815424425492675725583592605885902411684850799745447595369786712307845555512680296445269539267293352354742847606356294704596276723446693832868456759459463676863578818763568656640814729318890716557303279496556804336403624882271341517518796795342791789530412554415848782769582314892635312714735383381538480423780427817751873830855846828755811593838438486545688479572304784474407406367731672524272682308858601584473891843764464327387404844299289297809491542302454348878877458351460461462280874465466827821469820471472281355819273357478894359481816360361813362283871812870284309368494495901370498499808805502503371505803869286867510864287513514515377313859519520797380288904525794290384529385787532533317291783537319389390541320781392292546778548549854551552553853852322398558559560773771399400401402567323569570767324766405575888577326579762849409903328329586757756413754753414330594416417752598599331887746603420421422744608587741611740738736900335617426277620621622732428625626337628629630730632278634339636432298728434726642643644270724436648649437720652653718897439715841713660661662663664441711710839708670896837344674345346677697448449681833683451690452687807638489455349453500760526597898470523698373737706806396886588631382379300522612477655749654444861534875694705571543779561623822590793665305776372876285573881651332645274306777646739475347365826692686589702268275585311581353576574765899906358565564562641282774550696678547301544627667619535785883374788865375862615666685613659689511658880508394657408501699350604497430431602433440443747748476717750468600823824825700467836829719673860363835905709295325509647834321482639316758378528792418507364669429727540857722435671490493691679707703889536450772484650395580831591607743386856614334616884338531866457483840566527310800521442695504485609397842506610851";
let a= 267;
let b = 906;
findNumber(a,b,str);

function findNumber(start, stop, string){
    // console.log(`${start} ${stop} ${string}`);

    let arr = string.split('').map(Number);//get that string into an array of numbers.
    let stringSeqDigs = new Array(10); //make an array for tallying digits from the sequence missing a number
    for (let i=0;i<=9;i++){
        stringSeqDigs[i] = 0;
    }
    
    let fullSeq = [];// for the sequence with no numbers missing
    
    let fullSeqDigs = new Array(10); //make an array for tallying digits from the full sequence
    for (let i=0;i<=9;i++){
        fullSeqDigs[i] = 0;
    }

    //make the full sequence
    for (let i=start;i<=stop;i++){
        fullSeq.push(i);
    }
    fullSeq = fullSeq.join('').split('');

    //check it
    // console.log(fullSeq.length);
    // console.log(string.length);

    // console.log(arr);

    //tally digits in both sequences

    for (let i=0;i<fullSeq.length;i++){
        fullSeqDigs[fullSeq[i]]++;
    }
    // console.log(fullSeqDigs);
    
    for (let i=0;i<=arr.length-1;i++){
        stringSeqDigs[arr[i]]++;
    }
    // console.log(stringSeqDigs);

    //now compare then to see what digits are missing
    let missingNum = [];
    for (let i=0;i<=9;i++){
        if (stringSeqDigs[i] == fullSeqDigs[i]){
            // console.log(`all digits ${i} are present`)
            continue;
        } else {
            // console.log(`I see a ${i} missing`)
            let numMissingDigs = fullSeqDigs[i] - stringSeqDigs[i];
            for (let j=0;j<numMissingDigs;j++){
                missingNum.push(i);
            }
            // console.log(missingNum);
        }
    }
    console.log(`missing digits: ${missingNum}`);

    let perm = permute(missingNum);
    function permute(permutation) {
        var length = permutation.length,
            result = [permutation.slice()],
            c = new Array(length).fill(0),
            i = 1, k, p;
      
        while (i < length) {
          if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
          } else {
            c[i] = 0;
            ++i;
          }
        }
        return result;
      }

    // missingNum = [Number(missingNum.join(''))];//This does drop a leading zero, which isn't great
    // missingNum.push(Number(missingNum[0].toString().split('').reverse().join('')));
    // console.log(missingNum);
    let permJoined = [];
    console.log(perm);
    for (let i=0;i<perm.length;i++){
        permJoined.push(Number(perm[i].join('')));
    }
    permJoined = permJoined.filter(el => (el>=start && el<=stop)).sort((a,b) => a-b);
    // console.log(`permutations of missing digits: ${permJoined}`)
    return permJoined;
}

//I'm done with this problem because between the above and the permutations code I solved it. However, I can see from the test program that the program is not following the instructions. For example,
// Wrong value - Expected: [263], instead got: [236, 632]
// the instructions state that all possible combinations must be reported. Yet, they are not doing that. So there is no possibility to solve the problem and get "points" for it in Codewars.

//I think I see what's happening - of all the permutations I also have to filter out ones that are outside the range. Ok. 