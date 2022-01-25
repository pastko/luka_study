function solution(logs) {
    let answer = {};
    let human = [];
    logs.forEach(element => {
        let res = element.split(' ');
        // console.log(res[0],res[1],res[2]);
        answer[res[0]+'|'+res[1]] = res[2];         
        human.push(res[0]);
    }); 
    human = [...new Set(human)];

    // console.log(human)
    let result = Object.keys(answer).map((key) => [key, answer[key]]);
    result = result.map(e=>{return [ ...e[0].split('|'),e[1]]}) 
    // console.log(human)
    let cheetman = [];

    for(let i = 0 ; i < human.length ; ++i){
        let _AmethodN = result.filter(e=>e[0].startsWith(human[i]))
        if(_AmethodN.length < 5 )   
            continue;

        for(let j = i+1 ;j < human.length ; ++j ){
            let _BmethodN = result.filter(e=>e[0].startsWith(human[j]))
            if( _AmethodN.length === _BmethodN.length){
                if(currection(_AmethodN, _BmethodN) === _BmethodN.length){
                    if(currectionSocor(_AmethodN, _BmethodN) === _BmethodN.length){
                        cheetman.push(human[i],human[j]);
                    }
                }
            }
        }
    }
    if( cheetman.length === 0)
    {
        return ['None']
    }
    else{
        return [...new Set(cheetman)].sort();
    }
}

function currection(A, B){
    let count = 0;
    A.forEach(e=>{
        B.forEach(s=>{
            if(e[1] === s[1])
                count++;
        })
    })
    return count;
}

function currectionSocor(A, B){
    let count = 0;
    A.forEach(e=>{
       B.forEach(s=>{
           if(e[1] === s[1]){
               if(e[2] === s[2])
                    count++;
           }
       })
    })
    return count;
}

let output = solution(["0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80", "0001 10 90", "0002 10 90", "0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"]) //	[5,2]
console.log(output)
output = solution(["1901 1 100", "1901 2 100", "1901 4 100", "1901 7 100", "1901 8 100", "1902 2 100", "1902 1 100", "1902 7 100", "1902 4 100", "1902 8 100", "1903 8 100", "1903 7 100", "1903 4 100", "1903 2 100", "1903 1 100", "1101 1 95", "1101 2 100", "1101 4 100", "1101 7 100", "1101 9 100", "1102 1 95", "1102 2 100", "1102 4 100", "1102 7 100", "1102 9 100"])//	[3,2]
console.log(output)

output = solution(["1901 10 50", "1909 10 50"]) //	[2,1]
console.log(output)