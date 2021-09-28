// 02_test02
// HACK : ha test 2 


function test2(n, m) {
    let arr = [];
    for(let i = 1 ; i <= n ;i++ ) arr.push(i);

    return getcombine(arr, m);
};

function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>e);

    for(let i = 0 ; i < arr.length; ++i)
    {
        const rest = arr.filter((e)=>e!==arr[i]);
        const combinations = getcombine(rest, select - 1);
        const attached  = combinations.map((rest) => Number(arr[i]+""+rest));
        results.push(...attached); 
    }
    return results;
}

// 모든 바코드는 같은 숫자가 있으면 안 됩니다.

// N이 2이고 M이 1일 때, 1, 2를 사용하여 1의 길이에 맞는 바코드를 만들어야 합니다.
const output1 = test2(2, 1);
console.log(output1); // --> [1, 2]

// N이 3이고 M이 2일 때, 1, 2, 3을 사용하여 2의 길이에 맞는 바코드를 만들어야 합니다.
const output2 = test2(3, 2);
console.log(output2); // --> [12, 13, 21, 23, 31, 32]

// N이 3고 M이 3일 때 1, 2, 3을 사용하여 3의 길이에 맞는 바코드를 만들어야 합니다.
const output3 = test2(3, 3);
console.log(output3); // --> [123, 132, 213, 231, 312, 321]