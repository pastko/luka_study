// DataStructure & Algorithm 
// HACK: 19_[GCD] 빼빼로 데이
function divideChocolateStick(M, N) {
    // TODO: 
    
    // let res = diviser(GCD(M,N));
    let gcd = GCD(M,N);
    let result = [];
    // return res.map(e=>[ e , M/e, N/e ])

    for (let left = 1; left <= Math.floor(Math.sqrt(gcd)); left++) {
        if (gcd % left === 0) {
            result.push([left, M / left, N / left]);
            if (left * left < gcd) {
            
                let right = gcd / left;
                result.push([right, M / right, N / right]);
            }
        }
    }




    // for(let i = 1 ; i <= min; ++i){
    //     for(let j = 1; j <= min; ++j){
    //         if( i * j  === M )
    //             result.push([i,M/i,N/i])
    //     }
    // }
    return result.sort((a,b)=>a[0]-b[0]);
}



function GCD( a , b ){
    while(1){
        let r = a % b;
        if(r == 0) return b;
        a = b;
        b = r;
    }
}

function diviser(a){
    let res = [];
    for(let i = 1 ; i <= Math.floor(a/2) ; ++i)
    {
        if(a%i === 0) res.push(i);
    }res.push(a);
    return res;
}


let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);
// [[1, 4, 8], [2, 2, 4], [4, 1, 2]]