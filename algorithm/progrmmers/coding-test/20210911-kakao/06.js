
function solution(board, skill) {
    var answer = 0;
    
    skill.forEach(e => {
        console.log(e);
        if(e[0]=== 1){
            for(let i = e[1]; i <= e[3] ; ++i){
                for(let j = e[2] ; j <= e[4]; ++j){
                    board[i][j] -= e[5];
                }
            }
        }
        if(e[0]=== 2){
            for(let i = e[1]; i <= e[3] ; ++i){
                for(let j = e[2] ; j <= e[4]; ++j){
                    board[i][j] += e[5];
                }
            }
        }
        console.table(board)    
    });
    console.log(board)
    
    return board.flat().filter(e=>e>0).length;

}

let output = solution([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]], [[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]);
console.log(output);