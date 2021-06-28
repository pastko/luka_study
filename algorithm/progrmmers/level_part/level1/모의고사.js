/***
 *   모의고사
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
 function solution(answers) {
    let first_student = [ 1, 2, 3, 4, 5 ]
    let second_student= [ 2, 1, 2, 3, 2, 4, 2, 5 ]
    let third_student = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ]

    let result =[];
    let first = checking(answers,first_student)
    let second = checking(answers,second_student)
    let third = checking(answers,third_student)
   
    if( first === second )
    {
        if (first === third)
        {
            return [1,2,3];
        }
        else
        {
            return first > third ? [1,2] : [3];
        }
    }
    else if( first === third )
    {
        return first > second ? [1,3] : [2];
    }
    else if( second === third)
    {
        return first > second ? [1] : [2,3];
    }
    else{
        if( first > second )
        {
            return first > third ? [1] : [3];   
        }
        else
        {
            return second > third ? [2] : [3];
        }
    }
}

function checking(answer_num, answer_student)
{
    let count = 0;
    //console.log(`${answer_num} : ${answer_student}`)
    for(let index= 0; index < answer_num.length; index++) {
        if( answer_num[index] === answer_student[ (index%(answer_student.length))])
            count++
    }
    //console.log(count);
    return count;
}

/**
 * 
 * runing proc
 * 
 * 
 */

let num1 = [1,2,3,4,5]
let num2 = [1,3,2,4,2]
let num3 = [1, 2, 1, 1, 2];
console.log(solution(num3));



/****
 * 
 * another problem solving
 * 
 *  
 *   
 * 
 */

 function solution(answers) {
     var answer = [];
     var a1 = [1, 2, 3, 4, 5];
     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
 
     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
     var max = Math.max(a1c,a2c,a3c);
 
     if (a1c === max) {answer.push(1)};
     if (a2c === max) {answer.push(2)};
     if (a3c === max) {answer.push(3)};
 
 
     return answer;
 }