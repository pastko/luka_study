// toy 5번 문제 
// HACK: dynamic with tabulation

let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    let tileArray = [ 1 , 2 ]
    
    if( n === 1)
        return tileArray[0];
    if( n === 2)
        return tileArray[1];
    
    for(let i = 2 ; i < n ; ++i)
    {
        tileArray.push(tileArray[i-2] + tileArray[i-1]);
        console.table(tileArray)
    }
    return tileArray[n-1]  
};


let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5

output = tiling(10);
console.log(output); // --> 5
/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------
``
2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/
