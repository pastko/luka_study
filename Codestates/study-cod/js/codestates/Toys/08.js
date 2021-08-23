// toy 8

const largestProductOfThree1 = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let minus = arr.filter(e=>e<0).sort((a,b)=>b-a);
    let plus = arr.filter(e=>e>=0).sort((a,b)=>b-a);

    if( arr.length === minus.length)
        return minus.slice(-1,-3).reduce((acc,res)=>acc*res);

    if( plus.length)    
    

    return arr.sort((a,b)=>Math.abs(b)-Math.abs(a)).slice(0,3).reduce((acc,res)=>acc*res);
};


const largestProductOfThree = function (arr) {
// TODO: 여기에 코드를 작성합니다.
    let sortArray = arr.sort((a,b)=>b-a);
    return Math.max(
        sortArray.slice(0,3).reduce((acc,res)=>acc*res),
        sortArray[0] * sortArray[arr.length-1] * sortArray[arr.length-2]
    );
};
      


let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
