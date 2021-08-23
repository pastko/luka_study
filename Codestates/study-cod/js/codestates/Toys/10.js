// toy 10
const binarySearch1 = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    if (arr.length === 0)
        return -1;


    let arrayFront = 0;
    let arrayEnd  = arr.length -1;
    let arrCenter = Math.floor(arrayFront+arrayEnd/2);
    console.log(arr[arrCenter], arr);
    if (arr[arrCenter] === target)
        return arrCenter;
    else if (arr[arrCenter] > target)
        return binarySearch(arr.slice(arrayFront,arrCenter), target);
    else
        return binarySearch(arr.slice(arrCenter+1), target);
};

const binarySearch = function (arr, target) {
    if(target === undefined)
        return -1;
    let arrayFront = 0;
    let arrayEnd = arr.length - 1;
    let arrCenter;

    console.log(arr,target);
    
    
    while(arrayFront <= arrayEnd) {
        arrCenter = Math.floor((arrayFront+arrayEnd)/2);
        if (arr[arrCenter] === target){            
            return arrCenter;
        }

        console.log(`[${target} : ${arr[arrCenter]}] ${arrayFront} - ${arrayEnd} [ ${arrCenter} ]`)


        if (arr[arrCenter] > target){
            arrayEnd = arrCenter - 1;
        }
        else
            arrayFront = arrCenter + 1;
    }
    return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 1);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1

output = binarySearch([4, 6, 8, 9, 10, 15], 9)
console.log(output); // --> -1

function fe(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);

    for(let i = 0 ; i < arr.length; ++i)
    {
        const rest = arr.filter((e)=>e!==arr[i]);
        const combinations = fe(rest, select - 1);
        const attached  = combinations.map((rest) => [arr[i], ...rest]);
        results.push(...attached); 
    }
    return results;
}