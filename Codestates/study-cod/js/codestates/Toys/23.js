// toy 23
const spiralTraversal = function (matrix) {
    // TODO: 반대 순회 코딩 필요
    let x = 0, 
        y = 0, 
        sign = 1, 
        xIdx = matrix[0].length,
        yIdx = matrix.length;
    let result = '';
    
    

    for (let i = 0; i < xIdx; ++i) {
        result += matrix[y][x];
        x += sign;
    }
    x -= 1;
    for (let i = xIdx - 1,
         q = yIdx - 1  ; (i > 0) && (q > 0) ; --i, --q) {
        for (let j = 0; j < q; ++j) {
            y += sign;
            result += matrix[y][x];
            console.log(`y ${q}: [${x} ${y}]  : ${result}`);
        }
        sign *= -1;
        for (let k = 0; k < i; ++k) {
            x += sign;
            result += matrix[y][x];
            console.log(`x ${i}: [${x} ${y}] : ${result}`);
        }
        
    }
    return result;
};


let matrix = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

matrix = [
    ['T', 'y', 'r', 'i'],
    ['i', 's', 't', 'o'],
    ['n', 'r', 'e', 'n'],
    ['n', 'a', 'L', ' '],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'

matrix = [
    ['H', 'e', 'l', 'l'],
    ['l', 'd', '!', 'o'],
    ['r', 'o', 'w', ' '],
];

output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'