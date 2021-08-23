// toy 2
function fibonacci(num) {
    
    if(num ===  0) return 0
  if(num ===  1) return 1

  return fibonacci(num-1) + fibonacci(num -2)
}
// console.log(fibonacci(9));

function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
    // 재귀 사용방법 
    // if (num <= 1) {
    //   return num;
    // }
    // return fibonacci(num - 1) + fibonacci(num - 2);
  
  
  
    let results = [0, 1];  
    let fibo = function(n) {
      if(results[n] !== undefined){
        return results[n] 
      }
      else { 
        // 피보나치를 계산하여 계산한 결과값을 저장해 둔다.
        results[n] = fibo(n - 2) + fibo(n - 1);
        return results[n]
      }
    }
  
    return fibo(n)   
}


let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34