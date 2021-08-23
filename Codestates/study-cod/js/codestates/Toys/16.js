
// toy 16 
const quickSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length < 2) {
      return arr;
    }
    const pivot = [arr[0]];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            pivot.push(arr[i]);
        }
    }  
    return [ ...quickSort(left), ...pivot ,...quickSort(right)];
};

  
let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
output = quickSort([ 20, -10, -11, 2, 29 ]);
console.log(output); // --> [1, 3, 21]


// TODO : add advanced coding 