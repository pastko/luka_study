
// toy 06_sudoku
// HACK : sudoku
const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.
    let emptyNumberArray = [1,2,3,4,5,6,7,8,9];
    // 3x3 순회.
    // 해당 열 순회
    // 해당 행 순회
    // 가능 한 수 찾기 
    for(let i = 0 ; i < 3; ++i)
    {
        for(let j = 0 ; j < 3; ++j)
        {
            let s1 = findNumber(board,i);
            console.log(s1);            
        }
    }
    

    
    return emptyNumberArray
};


const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.
    let emptyNumberArray = [1,2,3,4,5,6,7,8,9];
    // 3x3 순회.
    // 해당 열 순회
    // 해당 행 순회
    // 가능 한 수 찾기 
    for(let i = 0 ; i < 3; ++i)
    {
        for(let j = 0 ; j < 3; ++j)
        {
            let s1 = findNumber(board,i);
            console.log(s1);            
        }
    }
    

    
    return emptyNumberArray
};

// 들어갈수 있는 수 검색
const findNumber = (board,x,y)=>{
    let emptyNumberArray = [1,2,3,4,5,6,7,8,9];

    for(let i = 0 ; i < 3 ; ++i)
    {
        for(let j = 0 ; j < 3 ; ++j)
        {
            emptyNumberArray = emptyNumberArray.filter(e=>board[i][j]!==e);
        }
    }    

    for(let i = 0 ; i < board.length ; ++i)
    {
        emptyNumberArray = emptyNumberArray.filter(e=>board[x][i]!==e);
    }

    for(let i = 0 ; i < board.length ; ++i)
    {
        emptyNumberArray = emptyNumberArray.filter(e=>board[i][y]!==e);
    }
    return emptyNumberArray
}


// 해당 숫자가 들어갈수 있는지 판단
function isCurrect(x, y, num, board){
    for(let i=0; i<9; i++){
        if(num == board[y][i]) return false 
        // 가로에 1~9 중 i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
    }

    for(let i=0; i<9; i++){
        if(num == board[i][x]) return false
        // 세로에 1~9 중 i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
    }

    for(var i=y_; i<y+3; i++){
        for(var j=x_; j<x+3; j++){
          // 3x3 사각형 안에 
            if(num == board[i][j]) return false 
          // i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
        }
    }
    return true
}



const findNumber = (board,x,y)=>{
    let emptyNumberArray = [1,2,3,4,5,6,7,8,9];

    for(let i = 0 ; i < 3 ; ++i)
    {
        for(let j = 0 ; j < 3 ; ++j)
        {
            emptyNumberArray = emptyNumberArray.filter(e=>board[i][j]!==e);
        }
    }    

    for(let i = 0 ; i < board.length ; ++i)
    {
        emptyNumberArray = emptyNumberArray.filter(e=>board[x][i]!==e);
    }

    for(let i = 0 ; i < board.length ; ++i)
    {
        emptyNumberArray = emptyNumberArray.filter(e=>board[i][y]!==e);
    }
    return emptyNumberArray
}

function isCurrect(x, y, num, board){
    for(let i=0; i<9; i++){
        if(num == board[y][i]) return false 
        // 가로에 1~9 중 i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
    }

    for(let i=0; i<9; i++){
        if(num == board[i][x]) return false
        // 세로에 1~9 중 i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
    }

    for(var i=y_; i<y+3; i++){
        for(var j=x_; j<x+3; j++){
          // 3x3 사각형 안에 
            if(num == board[i][j]) return false 
          // i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
        }
    }
    return true
}


let board = [
    [0, 3, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

let output = sudoku(board);
console.log(output); // -->
/* 
[
[4, 3, 5, 2, 6, 9, 7, 8, 1],
[6, 8, 2, 5, 7, 1, 4, 9, 3],
[1, 9, 7, 8, 3, 4, 5, 6, 2],
[8, 2, 6, 1, 9, 5, 3, 4, 7],
[3, 7, 4, 6, 8, 2, 9, 1, 5],
[9, 5, 1, 7, 4, 3, 6, 2, 8],
[5, 1, 9, 3, 2, 6, 8, 7, 4],
[2, 4, 8, 9, 5, 7, 1, 3, 6],
[7, 6, 3, 4, 1, 8, 2, 5, 9],
];
   */



// TODO : add coding