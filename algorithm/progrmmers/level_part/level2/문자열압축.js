/**
 * 프로그래머스 문자열 압축 문제
 * 
 * @param {*} String 
 * @returns 
 */

function solution(s) {
    let length = s.length;

    for (let i = 1; i <= Math.floor(s.length/2); i++) {
        let res = numSplit(s, i);
        let front = concateMsg(res);
        // console.log(front);
        length = Math.min(length, front.length)
    }

    return length;
}

function concateMsg(res){
    let result = '';
    
    while (res.length != 0) {
        let front = res.shift();
        let enty = 1;
        while (res.length != 0) {
            let next = res.shift();
            if (front === next) enty++;
            else {
                res.unshift(next);    
                break;
            };
        }
        if(enty === 1) result += front;
        else result += enty+front;
    }

    return result
}



function numSplit(msg,num){
    let res = [];
    let start = 0;
    let flag = 0;
    while(start < msg.length){
        res.push(msg.slice(start, num+start));
        start+=num;
    }
    return res;
}

let sol1 = 'xababcdcdababcdcd';
let result1 = solution(sol1);
console.time('time result1');
console.log('result1 : ' + result1);
console.timeEnd('time result1');

let sol2 = 'ababcdcdababcdcd';
let result2 = solution(sol2);
console.time('time result2');
console.log('result2 : ' + result2);
console.timeEnd('time result2');


let sol3 = 'abcabcabcabcdededededede';
let result3 = solution(sol3);
console.time('time result3');
console.log('result3 : ' + result3);
console.timeEnd('time result3');

