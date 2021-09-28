// 03_test03
// HACK : 

function test3(board, operation) {
    let point = [0, 0];
    let results = 0;
    let visityMap = Array(board[0].length * board.length + 1).fill(0);
    let splitOper = operation.split('');
    let ischecked = (cpoint, cmove) => {
        switch (cmove) {
            case 'U':
                if (point[0] - 1 >= 0) return true;
                else return false;
                break;
            case 'D':
                if (point[0] + 1 < board.length) return true;
                else return false;
                break;
            case 'L':
                if (point[1] - 1 >= 0) return true;
                else return false;
                break;
            case 'R':
                if (point[1] + 1 < board[0].length) return true;
                else return false;
                break;
            default:
                break;
        }
    }

    let checkVisity = () => {
        return visityMap[point[0] + (point[1] * board[0].length)] === 0
    }


    for (let i = 0; i < splitOper.length; ++i) {
        if (ischecked(point, splitOper[i])) {
            console.log(`switch in results : [${splitOper[i]}] : ${results}`)
            switch (splitOper[i]) {
                case 'U':
                    point[0]--;
                    if (checkVisity()) {
                        results = results + board[point[0]][point[1]];
                        visityMap[point[0] + (point[1] * board[0].length)] = 1;
                    }
                    break;
                case 'D':
                    point[0]++;
                    if (checkVisity()) {
                        results = results + board[point[0]][point[1]];
                        visityMap[point[0] + (point[1] * board[0].length)] = 1;
                    }
                    break;
                case 'L':
                    point[1]--;
                    if (checkVisity()) {
                        results = results + board[point[0]][point[1]];
                        visityMap[point[0] + (point[1] * board[0].length)] = 1;
                    }
                    break;
                case 'R':
                    point[1]++;
                    if (checkVisity()) {
                        results = results + board[point[0]][point[1]];
                        visityMap[point[0] + (point[1] * board[0].length)] = 1;
                    }
                    break;
                default:
                    break;
            }
            console.log(`switch out results : ${results} : [${board[point[0]][point[1]]}] : [ ${point[0]},${point[1]} ]`)
        }

    }
    return results;
};


const board1 = [
    [72, 0, 80, 1],
    [1, 9, 11, 10],
    [1, 1, 792, 0],
    [13, 44, 27, 0]
]
const output1 = test3(board1, 'RRDLLD');
console.log(output1); // 102


const board2 = [
    [567, 6734, 132],
    [789, 243, 6],
    [89, 33333, 0]
]
const output2 = test3(board2, 'UUUDD');
console.log(output2); // 878

const board3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
]
const output3 = test3(board3, 'DDRRRUDUDUD');
console.log(output3); // 0

const board4 =
    [
        [999, 999, 999],
        [999, 999, 999],
        [999, 999, 999]
    ];
const output4 = test3(board4, 'UUUUDUDUDUDUDUD')
console.log(output4)