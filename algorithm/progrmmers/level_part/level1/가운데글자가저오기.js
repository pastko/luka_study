/***
 *   문제 명 : 가운데 글자 가저오긴
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



 function solution(s) {
    let answer = '', 
        middle =  Math.floor(s.length/2);
    
    if( s.length % 2 === 0)
        return s.slice(middle-1,middle+1);
    else
        return s[middle];
}





/**
 * 
 * runing proc
 * 
 * 
 */

let num1 = "abcde"
let num2 = "qwer"
 console.log(solution(num2));




 /****
  * 
  * another problem solving
  * 
  *  
  *   
  * 
  */
 