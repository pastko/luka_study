
// toy 36_closestPairOfPoints
// HACK: merge sort , divide and conquer

// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
    const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
    return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
    // TODO: 여기에 코드를 작성합니다.



};


let points = [
    [0, 0],
    [1, 3],
    [2, 2],
];
let output = closestPairOfPoints(points);
console.log(output); // --> 141 ([1, 3], [2, 2])
/*
3 | 
2 |     x
1 |       x
0 | x 
------------
    0 1 2 3 
*/

points = [
    [0, 0],
    [0, 1],
    [0, 3],
    [0, 5],
];
output = closestPairOfPoints(points);
console.log(output); // --> 100 ([0, 0], [0, 1])
/*
5 | x
4 |
3 | x
2 |
1 | x
0 | x
------------
    0 1 2 3
*/