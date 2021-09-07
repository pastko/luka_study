// toy 33_LIS
// HACK : 최장 증가 부분 수열(LIS) 알고리즘 => DP 이용


const LIS = function (arr) {
    let result = Array(arr.length).fill(1);

    for(let i = 1 ; i < arr.length ; ++i){
        for(let j = 0; j < i ; ++j){
            if(arr[i]> arr[j]){
                result[i] = Math.max(result[i], result[j] + 1);
                console.log(result);
            }
        }
    }
    console.log(result);
    return [...(new Set(result))].length;
};



let output = LIS([3, 2]);
console.log(output); // --> 1 (3 or 2)

// output = LIS([3, 10, 2, 1, 20]);
// console.log(output); // --> 3 (3, 10, 20)


// output = LIS([50, 3, 10, 7, 40, 80]);
// console.log(output); // --> 4


output = LIS([10, 20, 40, 25, 30, 50, 32, 70, 85]);
console.log(output);