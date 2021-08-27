// toy 26
// HACK : LSCS sorting - O(n) sortting

const LSCS = function (arr) {
    let sub = arr[0];
    let max = arr[0];
    for(let i = 1;i< arr.length;i++){
        sub = Math.max(sub + arr[i], arr[i])
        max = Math.max(max,sub);
    }
    return max;
};

let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])

LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7 ([1, 2, 3, -4, 5])

LSCS([10, -11, 11]);
console.log(output); // --> 11 ([11])

