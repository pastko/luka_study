/***
 *   문제 명 :  소수만들기
 * 
 * 
 * 
 *  */




/**
 * 
 * main core
 * 
 * 
 */


 function solution(nums) {
    var answer = -1;
    let results = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    getCombinations(nums,3).forEach(e=>{
        results.push(e.reduce((a,b)=>a+b))
    })

    return results.filter(el=>{
        if( el === 1 )
            return true;

        if(el % 2 === 0)
            return false;
          
        for(let i = 2; i < el; i++){
            if(el % i === 0){
                return false;
            }
        }
        return true;
    }).length;
}


const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
  }
  


/**
 * 
 * runing proc
 * 
 * 
 */
 let num1 = [1,2,3,4], num2 = [1,2,7,6,4];

//console.log(solution(num3));
console.log(solution(num2));


 /****
  * 
  * another problem solving
  * 
  *  
  *   
  * 
  */
 