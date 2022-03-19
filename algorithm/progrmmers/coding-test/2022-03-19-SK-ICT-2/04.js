/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/
// function solution(n, m, k, records) {
//     let answer = [];
//     let arr = Array.from({length: m}, (_, i) => i + 1)
//     // console.log(arr);

//     records = records.map(e=>{
//         return e.map(res=>(res-Math.min(...e)));
//     })
//     console.log(records);
//     records = records.map(e=>{
//         let tmp = e.filter(e=>e!==0);
//         return e.map(res=>Math.ceil(res/Math.min(...tmp)));       
//     })
//     // console.log(records);
    

//     let s = [];
//     if( records.length === 1){
//         if( Math.min(...records[0]) === 0){
//             s.push(Math.min(...arr))
//             let max = records[0].filter(e=>e!==0).length
//             for(i=0;i<max;i++){
//                 s.push(arr[arr.length-(1+i)]);
//             }
//         }else{
//             let max = records[0].length
//             for(i=0;i<max;i++){
//                 s.push(arr[arr.length-1+i]);
//             }
//         }
//         records[0].forEach(ele => {
//             answer.push(s.sort()[ele]);
            
//         });
//     }else{
//         records = [...new Set(records.join('|').split('|'))].map(v=>v.split(',')).map(v=>v.map(a=>+a))
//         records.sort()[0].forEach(ele => {
//             answer.push(arr[ele]);
            
//         });
//     }
//     return answer;
// }

// function solution(n, m, k, records) {
//     let answer = [];
//     let arr = Array.from({length: m}, (_, i) => i + 1)
//     // console.log(arr);
//     if(records.length === 1){
//         let s = [];
//         records = records.flat();
//         records = records.map(res=>
//             res-Math.min(...records)
//         );
    
//         if( Math.min(...records) === 0){
//             s.push(Math.min(...arr))
//             let max = records.filter(e=>e!==0).length
//             for(i=0;i<max;i++){
//                 s.push(arr[arr.length-(1+i)]);
//             }
//         }else{
//             let max = records.length
//             for(i=0;i<max;i++){
//                 s.push(arr[arr.length-1+i]);
//             }
//         }
      
//         while(Math.max(...records) >= k){
//             let tmp = records.filter(e=>e!==0);
//             records = records.map(res=>Math.ceil(res/Math.min(...tmp)));       
//         }
//         records.forEach(ele => {
//             answer.push(s.sort()[ele]);
            
//         });
//     }else{
//         console.log(records);
//         records = records.sort()[records.length-1].map(res=>
//             res-Math.min(...records[records.length-1])
//         );
//         console.log(records);
        
//         let tmp = records.filter(e=>e!==0);
//         if( Math.max(...tmp) % 2 === 0)
//             records = records.map(res=>Math.ceil(res/Math.min(...tmp)));     
//         if( Math.max(...tmp) % 2 === 1)
//             records = records.map(res=>Math.floor(res/Math.min(...tmp)));     
//         console.log(records);  
    
//         console.log(records);
//         records.forEach(ele => {
//             answer.push(arr[ele]);
//         });
//     }
//     return answer;
// }


function solution(n, m, k, records) {
    let answer = [];
    let arr = Array.from({length: m}, (_, i) => i + 1);
    let tmp = Array(1000).fill(0);
    records.map(e=>{
        for(i=0;i<k;i++)
            tmp[e[i]-Math.min(...e)]++;
    })
    console.log(tmp);
    return answer;
}


/**
 * 
 * main core
 * 
 * 
 */

/** 
 * values
 * */ 
let n = 8
let m =	4
let k =	4
let records =	[[1, 5, 1, 3], [5, 7, 5, 6]]
                //0 ,4, 0, 2   0, 2, 0, 1

let n1 = 8
let m1 = 4
let k1 = 4
let records1 =	[[1, 5, 1, 3]]



let n2 = 10
let m2 = 3
let k2 = 3
let records2 =	[[1, 2, 3], [5, 7, 10]]
                            // 0 , 2 , 5
/**
 * runing
 */
console.time()
console.log(solution(n,m,k,records));
console.timeEnd()
// console.time();
// console.log(solution(n1,m1,k1,records1));
// console.timeEnd()
// console.time()
// console.log(solution(n2,m2,k2,records2));
// console.timeEnd()
// console.log(solution(a1,b1,m1));
