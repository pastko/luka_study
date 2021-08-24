// toy 23
const spiralTraversal = function (matrix) {
    // TODO: 반대 순회 코딩 필요
    let x = 0, y = 0, sign = 1, size = matrix[0].length;
    let result = '';
    
    

    for (k = 0; k < size; ++k) {
        result += matrix[y][x];
        x += sign;
    }
    x -= 1;
    for (i = size - 1;i > 0; --i) {
        for (j = 0; j < i; ++j) {
            y += sign;
            result += matrix[y][x];
        }
        sign *= -1;
        for (k = 0; k < i; ++k) {
            x += sign;
            result += matrix[y][x];
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