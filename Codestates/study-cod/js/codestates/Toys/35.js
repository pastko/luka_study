// toy 35_uglyNumbers
// HACK: 투포인트 알고리즘 


const uglyNumbers = function (n) {
    // FIX :
    let result = [0,1];
    let min = 99999;
    let p2 = 1,p3 = 1 , p5 = 1;
    if(n === 1) return 1;

    for(let i = 2; i<= n ; ++i){
        if(result[p2] * 2 < result[p3] * 3) min = result[p2]*2;
        else min = result[p3]*3;

        if(result[p5] *5 < min) min = result[p5]*5;

        if(result[p2] * 2 === min) p2++;
        if(result[p3] * 3 === min) p3++;
        if(result[p5] * 5 === min) p5++;
        console.log(`${p2} : ${p3} : ${p5}`);
        console.log(`${result}`);

        result.push(min);
    }
    return result[n];
};  



let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(15);
console.log(result); // --> 3

result = uglyNumbers(8);
console.log(result); // --> 3