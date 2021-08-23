// toy 9 

function power2(base, exponent) {
    // todo: 여기에 코드를 작성합니다.
    let result =1.00;
    for(let i = 0 ; i < exponent; ++i)
    {
        result = base *  (result);
        console.log(i,result);
    }
    return result  % 94906249
}
function power(base, exponent) {
    // TODO: 여기에 코드를 작성합니다.

    let results = [3];  
    let pow = function(n,count) {
        if(count === 1){
            return n 
        }
        else { 
        // 피보나치를 계산하여 계산한 결과값을 저장해 둔다.
            results[count] = (n * pow(n, count-1)) % 94906249;
            console.log(results[count],count)
            return results[count]
        }
    }
    return pow(base,exponent)   
}
  
function power1(base, exponent) {
    if (exponent === 0) return 1;
  
    const half = parseInt(exponent / 2);
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;
  
    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
}



let output = power(3, 40);
console.log(output); // --> 19334827


// TODO : add advanced coding 