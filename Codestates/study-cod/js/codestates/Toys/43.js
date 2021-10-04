// 43_shadowOfPapers
// HACK : sweeping 알고리즘

function shadowOfPapers(papers) {
    // TODO: 여기에 코드를 작성합니다.
}


let result = shadowOfPapers([[0, 1, 4, 4]]);
console.log(result); // --> 16

/*
4 | x x x x
3 | x x x x 
2 | x x x x 
1 | x x x x 
0 |   
--------------
   0 1 2 3 4 
*/

result = shadowOfPapers([
    [0, 0, 4, 4],
    [2, 1, 2, 6],
    [1, 5, 5, 3],
    [2, 2, 3, 3],
]);
console.log(result); // --> 36
/*
7 |   x x x x x
6 |   x x x x x
5 |   x x x x x
4 |     x x x
3 | x x x x x
2 | x x x x x
1 | x x x x
0 | x x x x
------------------
0 1 2 3 4 5 6 7
*/