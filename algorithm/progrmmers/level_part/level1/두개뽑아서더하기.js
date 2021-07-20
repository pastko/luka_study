/***
 *   문제 명 :  모의고사
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

 function solution(numbers) {
    var answer = [];
    for(let i =0 ; i< numbers.length ; ++i)
    {
        for(let j = i + 1 ; j < numbers.length ; ++j)
        {
            let sum = numbers[i] + numbers[j];
            console.log(`${numbers[i]} , ${numbers[j]} : ${sum}`);
            if( !answer.some(e=>e === sum) )
                answer.push(sum)
        }
    }

    return answer.sort((a,b)=>a-b);
}






/**
 * 
 * runing proc
 * 
 * 
 */

let num1 = [2,1,3,4,1];
let num2 =  [5,0,2,7];
console.log(solution(num1));





 /****
  * 
  * another problem solving
  * 
  *  
  *   
  * 
  */
 