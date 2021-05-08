/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/



function solution(s) {

    var answer = 0;
    number.forEach(ele =>{
        if(s.indexOf(ele.value)>=0)
            s = s.replace(ele.value,ele.key);
    })

    number.forEach(ele =>{
        if(s.indexOf(ele.value)>=0)
            s = s.replace(ele.value,ele.key);
    })
    return s;
}





let number = [
    { "key": 0, "value": "zero" },
    { "key": 1, "value": "one" },
    { "key": 2, "value": "two" },
    { "key": 3, "value": "three" },
    { "key": 4, "value": "four" },
    { "key": 5, "value": "five" },
    { "key": 6, "value": "six" },
    { "key": 7, "value": "seven" },
    { "key": 8, "value": "eight" },
    { "key": 9, "value": "nine" },
]



/**
 * 
 * main core
 * 
 * 
 */
 let num1 = "one4seveneight";	//1478
let num2 = "23four5six7";//	234567
let num3 = "2three45sixseven"	//234567
let num4 = "123"	//123
let num5 = "oneoneseveneight";	//1478
console.log(solution(num5));
