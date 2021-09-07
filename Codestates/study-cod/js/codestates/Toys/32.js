// toy 32_largestRectangularArea
// HACK : 구간트리 세그먼트 트리(Segment Tree)

const largestRectangularArea = function (histogram) {
    // TODO: O(N^2 )이외의  NlogN방법 찾기 

    let maxSize = 0;
    for(let i = 0; i< histogram.length; ++i) {
        console.log("["+i+"]");
        for(let j = i+1 ; j < histogram.length ; ++j){
            let min = Math.min(...histogram.slice(i,j+1))
            
            maxSize = Math.max(maxSize, (min*(j-i+1) ));
            console.log(min+":"+maxSize);
        }
    }

    return maxSize;
};


let histogram = [2, 1, 4, 5, 1, 3, 3];
let output = largestRectangularArea(histogram);
console.log(output); // --> 8

histogram = [6, 2, 5, 4, 5, 1, 6];
output = largestRectangularArea(histogram);
console.log(output); // --> 12
/*
6 | x           x
5 | x   x   x   x
4 | x   O O O   x
3 | x   O O O   x
2 | x x O O O   x
1 | x x O O O x x
------------------
*/

histogram = [2, 1, 5, 6, 2, 3];
output = largestRectangularArea(histogram);
console.log(output); // --> 12