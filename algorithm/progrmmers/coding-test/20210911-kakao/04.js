// test 4

function solution(n, info) {
    var answer = [];
    let point = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let isVisited = Array(11).fill(0);
  
    

        // 이기는 경우 ( 점수가 높아야함)
        // 크게 이기는것
        // 작은 값을 많이 쏜 경우 

    let resu = getcombine([5,4,3,2,1], 5);
    console.log(resu)


    return answer;
}


function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);

    for(let i = 0 ; i < arr.length; ++i)
    {
        const rest = arr.filter((e)=>e!==arr[i]);
        const combinations = getcombine(rest, select - 1);
        const attached  = combinations.map((rest) => [arr[i], ...rest]);
        results.push(...attached); 
    }
    return results;
}



let output = solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
console.log(output);


output = solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(output);
