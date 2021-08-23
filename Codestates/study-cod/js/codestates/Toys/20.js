// toy 20
const mergeSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length <= 1 ) return arr;
 
    let centerPoint = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0,centerPoint)), mergeSort(arr.slice(centerPoint)));
};
let merge = (left, right) =>{
    //console.log(left +":" + right);
    let result = [];
    while (left.length !== 0 && right.length !== 0) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());	
    }
    
    return [...result, ...left, ...right];
}

let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
output = mergeSort([ 5, 4, 3, 2, 1 ])
console.log(output); // --> [1, 3, 21]