/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

function solution(goods) {
    var answer = [];

    goods.forEach(ele => {
        let tmp = [];
        let size = 0;
        for(i=0;i<=ele.length;i++){
            for(j=i+1;j<=ele.length;j++){
                if(goods.filter(e=>e.includes(ele.substring(i,j)) === true).length === 1)
                    tmp.push(ele.substring(i,j));
            }
        }
        size = tmp.reduce((acc,res)=>{
            if(res.length < acc) acc = res.length; 
            return acc
        },20);    
        
        answer.push([...(new Set(tmp.filter(e=>e.length <= size).sort()))].join(" "));
    });
    
    return answer.map(e=>{
        if(e==='') return "None";
        else return e;
    });
}




/**
 * 
 * main core
 * 
 * 
 */



let goods = ["pencil","cilicon","contrabase","picturelist"];


let goods2 = ["abcdeabcd","cdabe","abce","bcdeab"]

console.log(solution(goods));
// console.log(solution(goods2));
