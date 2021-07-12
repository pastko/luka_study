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

function solution(nums) {
    var answer = 0;
    let numbers = nums.length/2;
    let arr = new Set(nums);
    let uniqueArr = [...arr];
    if( uniqueArr.length < numbers)
        return uniqueArr.length();

    return numbers;
}


/**
 * 
 * runing proc
 * 
 * 
 */

let num = [3,1,2,3];
console.log(solution(num));




 /****
  * 
  * another problem solving
  * 
  *  
  *   
  * 
  */
 