/**
 *  오픈채팅방 문제
 * 
 * @param {*} record 
 * @returns 
 */

function solution(record) {
    let userId = {}
    let splitRecord = record.map(e=>{
        e = e.split(' ');
        userId[e[1]] = e[2];
        return e;
    });
    console.log(userId)
    splitRecord
            .filter(e=>e[0]==='Change')
            .forEach(changeE => userId[changeE[1]]=changeE[2]);
    console.log(userId)

    return splitRecord
            .filter(e=>e[0]!=='Change')
            .map(e => `${userId[e[1]]}${(e[0]==='Enter') ? '님이 들어왔습니다.' : '님이 나갔습니다.'}`)
}



let sol1 = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
let result1 = solution(sol1);
console.time('time result1');
console.table('result1 : ' + result1);
console.timeEnd('time result1');

let sol2 = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Enter uid4557 Prodo","Leave uid1234","Leave uid4557 Prodo","Enter uid1234 Prodo","Change uid4567 Ryan","Leave uid1234","Enter uid1234 Prodo","Change uid1234 wmcd","Leave uid1234","Enter uid1234 Prodo","Enter uid4557 Prodo","Change uid4567 star"];
let result2 = solution(sol2);
console.time('time result2');
console.log('result2 : ' + result2);
console.timeEnd('time result2');


// let sol3 = 'abcabcabcabcdededededede';
// let result3 = solution(sol3);
// console.time('time result3');
// console.log('result3 : ' + result3);
// console.timeEnd('time result3');

