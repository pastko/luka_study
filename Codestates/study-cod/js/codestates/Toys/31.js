// toy 31_rangeMinimum
// HACK : segment tree 구간트리

const rangeMinimum = function (arr, ranges) {
    // TODO: 여기에 코드를 작성합니다.
    let result = ranges.map(e => {
        if (e[0] === e[1]) return arr[e[0]];
        return Math.min(...arr.slice(e[0], e[1] + 1));
    })

    return result;
};


const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);
console.log(mins); // --> [2, 1]