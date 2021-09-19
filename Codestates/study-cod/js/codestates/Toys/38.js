// toy 38_decompression
// HACK :
const decompression = function (image) {
    let imgageSum = image.length * image[0].length;
    let totalSum = image.flat().reduce((e,acc)=>acc+e,0);
    let result = ''
    result += totalSum === 0 ? '0' : totalSum === imgageSum  ? '1' : 'X';
    

    return result
};



// HACK:
const decompression = function (image) {
    // TODO: 여기에 코드를 작성합니다.
};


let image = [
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

image = [
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'