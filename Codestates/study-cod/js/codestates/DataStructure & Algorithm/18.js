// DataStructure & Algorithm 
// HACK: 18_[조합] 블랙잭은 지겨워

function boringBlackjack(cards) {
    /**
     * HACK : 비순서 조합 
     * 
     * 
     *  */ 
    let count = 0;
    let length = cards.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                const number = cards[i] + cards[j] + cards[k];
                if (isPrime(number)) count++;
            }
        }
    }
    return count;

    // return getcombine(cards,3).map(e=>{
    //     return e[0]+e[1]+e[2];
    // });

    // return  [...new Set(getcombine(cards,3).map(e=>{
    //     let sumValue = e[0]+e[1]+e[2];
        
    //     if(isPrime(sumValue))
    //         return sumValue;
    //     else   
    //         return sumValue*-1;
    // }))];
}

// let output = boringBlackjack([1, 2, 3, 4]);
// console.log(output); // 1

// output = boringBlackjack([2, 3, 4, 8, 13]);
// console.log(output); // 3

// output = boringBlackjack([2, 4, 6, 8, 14, 27]);
// console.log(output); // 5

// output = boringBlackjack([4, 6, 9, 13, 21, 28, 32, 37, 48]);
// console.log(output); // 27


function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);
    for(let i = 0 ; i < arr.length; ++i)
    {
        let res = arr.filter(e=>e!==arr[i]);
        const combinations = getcombine(res, select - 1);
        const attached  = combinations.map((rest) =>[arr[i] ,...rest]);
        results.push(...attached); 
    }
    return results;
}


function isPrime(num){
    for (let i = 2; i < num/2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(117))