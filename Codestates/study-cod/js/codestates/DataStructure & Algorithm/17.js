// DataStructure & Algorithm 
// HACK: 17_[순열] 가위바위보


function rockPaperScissors () {
    // HACK: 순열, 순서 상관있는 
    let values = ['rock', 'paper', 'scissors'];
    if(n === undefined)
        return getcombine(values,3);
    else
        return getcombine(values,n)
};



let output = rockPaperScissors();

console.log(output);
/*
[
    ["rock", "rock", "rock"],
    ["rock", "rock", "paper"],
    ["rock", "rock", "scissors"],
    ["rock", "paper", "rock"],
    // ...etc ...
]
*/



function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);
    for(let i = 0 ; i < arr.length; ++i)
    {
        const combinations = getcombine(arr, select - 1);
        const attached  = combinations.map((rest) =>[arr[i] ,...rest]);
        results.push(...attached); 
    }
    return results;
}
