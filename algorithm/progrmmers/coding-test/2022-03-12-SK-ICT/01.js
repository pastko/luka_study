/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/


function solution(money, costs) {
    var answer = 0;
    let coin = [500,100,50,10,5,1];
    let counts = Array(6).fill(0);
    let recost = costs.reverse();
    recost = coin.map((res, idx) => {
        return res / recost[idx];
    })

    for (i = 0; i < recost.length ; i++) {
        for (j = i+1; j < recost.length ; j++) {
            if (recost[i] < recost[j]) {
                let t = recost[j];
                let c = coin[j];
                let cs = costs[j];
                recost[j] = recost[i];
                coin[j] = coin[i];
                costs[j] = costs[i];
                recost[i] = t;
                coin[i] = c;
                costs[i] = cs
            }
        }
    }

    let res = coin.reduce((acc, ele, idx) => {
        // console.log(`${acc}, ${ele}, ${idx}`);
        let dvin = Math.floor(acc / ele)
        if (dvin > 0) {
            counts[idx] = dvin;
            return acc % (counts[idx] * ele);
        }
        return acc;
    }, money)

    return counts.map((res,idx)=> costs[idx] * res ).reduce((acc,res)=>acc+res,0);
}


/**
 * 
 * main core
 * 
 * 
 */


let money1 = 4578;
let costs1 = [1, 4, 99, 35, 50, 1000];

let money2 = 1999
let costs2 = [2, 11, 20, 100, 200, 600]//	2308

console.log(solution(money1, costs1));
console.log(solution(money2, costs2));
