
// toy 29_binaryHeap
// HACK : min binary Heap

function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
    heap.push(item);
    let idx = heap.length - 1;
    let parentidx = getParentIdx(idx);
    while (parentidx >= 0 && heap[idx] < heap[parentidx]) {
        swap(idx, parentidx, heap);
        idx = parentidx;
        parentidx = getParentIdx(idx);
    }
    return heap;
}

function removeRoot(heap) {
    return heap;
}


const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};

const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    // TODO: 여기에 코드를 작성합니다.
    return minHeap
};



let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = heapSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

output = heapSort([4, 10, 3, 5, 1]);
console.log(output); // --> [1, 3, 4, 5, 10]