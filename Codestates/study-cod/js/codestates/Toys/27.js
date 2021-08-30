// toy 27_gossipProtocol
// HACK : matrix ??


const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        const row = [];
        for (let i = 0; i < line.length; i++) row.push(line[i]);
        matrix.push(row);
    });
    return matrix;
};

const gossipProtocol1 = function (village, row, col) {
    
    let matrix = createMatrix(village);
    let visity = []
    for(let i = 0;i < matrix.length;++i){
        visity.push(...matrix[i]);
    }
    console.log(matrix)
    console.log(visity);
    console.log(visity.length)
};


const gossipProtocol = function (village, row, col) {
    
    let matrix = createMatrix(village);
    let rowMax = matrix[0].length,
        colMax = matrix.length;

    let visity = [];
    let woker = [];
    let dayCount = 0;
    for(let i = 0;i < colMax; ++i){
        visity.push(...matrix[i]);
    }

    const marker = (xrow, ycol)=>{

        if(((xrow + 1) < rowMax) && (matrix[xrow+1][ycol] === '1'))
                woker.push([xrow+1, ycol]);

        if(((xrow - 1) >= 0) && (matrix[xrow-1][ycol] === '1'))
            woker.push([xrow-1, ycol]);

        if(((ycol + 1) < colMax) && (matrix[xrow][ycol+1] === '1'))
            woker.push([xrow, ycol+1]);

        if(((ycol - 1) >= 0) && (matrix[xrow][ycol-1] === '1'))
            woker.push([xrow, ycol-1]);
    }   

    const changMarker = (xrow, ycol)=>{
        visity[xrow + (ycol*colMax)] = '0'
    }

    marker(row,col);
    while(visity.some('1')){
        
        
    }


    console.log(visity);
    console.log(woker)
};

let village = [
    '0101', // 첫 번째 줄
    '0111',
    '0110',
    '0100',
];
let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 3
/*
1. 시작: (1, 2)에서 시작, 소문이 퍼진 곳을 x로 표기
[
'0101',
'01x1',
'0110',
'0100',
]

2. 1일 뒤
[
'0101',
'0xxx',
'01x0',
'0100',
]

3. 2일 뒤
[
'0x0x',
'0xxx',
'0xx0',
'0100',
]

4. 3일 뒤: 소문이 전부 퍼짐 (끝)
[
'0x0x',
'0xxx',
'0xx0',
'0x00',
]
*/