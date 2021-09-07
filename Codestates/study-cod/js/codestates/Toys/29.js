// toy 29_binaryHeap
// HACK : max binary heap


// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법

    // 1) 임시 변수를 활용한 방법
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;

    // 2) Destructuring assignment를 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
    
    return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {

    let array = [...heap, item];
    let idx = array.indexOf(item);
    let parentidx = getParentIdx(idx);


    if (array[parentidx] < array[idx])
        swap(parentidx, idx, array);
    
    return array
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};


let output = binaryHeap([5, 4, 3, 2, 1]);
console.log(output); // --> [5, 4, 3, 2, 1]

output = binaryHeap([3, 1, 21]);
console.log(output); // --> [21, 1, 3]

output = binaryHeap([4, 10, 3, 5, 1]);
console.log(output); // --> [10, 5, 3, 4, 1]