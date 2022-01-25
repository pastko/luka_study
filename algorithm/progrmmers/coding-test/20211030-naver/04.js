function solution(board) {
    let answer = 0;
    let pathstack = [];
    let totalpath = [];
    let count = 0;
    console.table(board);

    function DFS(v) {
        if (v === 5) {
            count++
            console.log(pathstack);
        } else {
            for (let i = 1; i < 5; i++) {
                if (board[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1
                    pathstack.push(i)
                    DFS(i);
                    ch[i] = 0;
                    pathstack.pop();
                }
            }
        }
    }

    pathstack.push(1);
    DFS(1);
    return count


    return answer;
}


function countDfs(n, arr) {
    let count = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({
        length: n + 1
    }, () => 0);
    let path = [];
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    
}


let output = solution([[1, -7, -2, 1, -1],[2, 3, 0, -1, -2],[1, -1, 6, -1, -2],[-1, 1, -2, 0, 4],[-10, 5, -3, -1, 1]]) //18
console.log(output);