/// 01 번

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


// function getcombine(arr) {
    

//     let firstFlag   = add[0];
//     let results     = [];
//     let filterrFlga = arr.filter((e)=>e!==firstFlag);



// }


function orderOfPresentation (N, K) 
{
    // TODO: 여기에 코드를 작성합니다.
    let oderArray   = [];
    let countArray  = 0;
    for(let i = 1 ; i<=N ; ++i)
    {
        oderArray.push(i);
    }
    let combinArray = getcombine(oderArray, N );

    
    for(let i = 0 ; i<=combinArray.length ; ++i)
    {
        if(arrayEquals(K,combinArray[i]))
            countArray = i;
    }
    return countArray;
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

console.log(orderOfPresentation(5, [1, 3, 2, 4, 5]));
console.log(orderOfPresentation(3, [1, 3, 2]));

