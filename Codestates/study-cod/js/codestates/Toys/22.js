// toy 22
const rotateMatrix = function (matrix,k) {
    if(matrix.length === 0)
      return []
    // TODO: 여기에 코드를 작성합니다.
    if(k === undefined){
      return rotate(matrix);
    }
    else{
      for(let i = 0 ; i < k % 4 ; ++i){
        matrix = rotate(matrix);
      }
      return matrix;
    }
    return [];
  };
  
  let rotate = (matrix) =>{
    let result = [];
    for(let i = 0 ; i < matrix[0].length ;++i){
      let row = []
      for(let j = matrix.length - 1; j >= 0 ; --j){
        row.push(matrix[j][i]);
      }
      result.push(row);
    }
    return result;
};

const matrix = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8