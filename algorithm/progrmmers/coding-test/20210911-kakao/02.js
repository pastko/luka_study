// test 02
// HACK :

function solution(n, k) {
    let rs =  n.toString(k).split('0');
    let result =  rs.filter(e=>{
        if(e === '') return false
        if(isPrime(Number(e))) return true;
    })

    return result.length;
}


function isPrime(num){
    if(num === 1) return false

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let output = solution(437674, 3)//	3
console.log(output);

output = solution(110011,10)//	2
console.log(output); 