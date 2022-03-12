/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/
function solution(n, clockwise) {
    const matrix = Array.from(Array(n), () => new Array(n).fill(0));
    let number = 1;
    let x1 = 0, y1 = 0, xx1, yy1;
    let x2 = n - 1, y2 = 0, xx2, yy2;
    let x3 = n - 1, y3 = n - 1, xx3, yy3;
    let x4 = 0, y4 = n - 1, xx4, yy4;
    if (clockwise) {
        xx1 = 0, yy1 = 1;
        xx2 = -1, yy2 = 0;
        xx3 = 0, yy3 = -1;
        xx4 = 1, yy4 = 0;
    } else {
        xx1 = 1, yy1 = 0;
        xx2 = 0, yy2 = 1;
        xx3 = -1, yy3 = 0;
        xx4 = 0, yy4 = -1;
    }


    while (true) {
        // x1++ y1
        console.log(`x1 ,${number},${x1},${y1},${xx1},${yy1}`)
        if (((x1 + xx1) < n && (y1 + yy1) < n && (x1 + xx1) >= 0 && (y1 + yy1) >= 0)) {
            matrix[x1][y1] = number;
            if (matrix[x1 + xx1][y1 + yy1] != 0) {
                [ xx1,yy1 ] = rotate(xx1,yy1,clockwise);
            }
            x1 += xx1;
            y1 += yy1;
        } else {
            [ xx1,yy1 ] = rotate(xx1,yy1,clockwise);
            matrix[x1][y1] = number;
            x1 += xx1;
            y1 += yy1;
        }
        // x2 y2++
        console.log(`x2 ,${number},${x2},${y2},${xx2},${yy2}`)
        if (((x2 + xx2) < n && (y2 + yy2) < n && (x2 + xx2) >= 0 && (y2 + yy2) >= 0)) {
            matrix[x2][y2] = number;
            if (matrix[x2 + xx2][y2 + yy2] != 0) {
                [ xx2,yy2 ] = rotate(xx2,yy2,clockwise);
            }
            x2 += xx2;
            y2 += yy2;
        } else {
            [ xx2,yy2 ] = rotate(xx2,yy2,clockwise);
            matrix[x2][y2] = number;
            x2 += xx2;
            y2 += yy2;
        }

        // x3-- y3
        console.log(`x3 ,${number},${x3},${y3},${xx3},${yy3}`)
        if (((x3 + xx3) < n && (y3 + yy3) < n && (x3 + xx3) >= 0 && (y3 + yy3) >= 0)) {
            matrix[x3][y3] = number;
            if (matrix[x3 + xx3][y3 + yy3] != 0) {
                [ xx3,yy3 ] = rotate(xx3,yy3,clockwise);
            }
            x3 += xx3;
            y3 += yy3;
        } else {
            [ xx3,yy3 ] = rotate(xx3,yy3,clockwise);
            matrix[x3][y3] = number;
            x3 += xx3;
            y3 += yy3;
        }

        console.log(`x4 ,${number},${x4},${y4},${xx4},${yy4}`)
        if (((x4 + xx4) < n && (y4 + yy4) < n && (x4 + xx4) >= 0 && (y4 + yy4) >= 0)) {
            matrix[x4][y4] = number;
            if (matrix[x4 + xx4][y4 + yy4] != 0) {
                [ xx4,yy4 ] = rotate(xx4,yy4,clockwise);
            }
            x4 += xx4;
            y4 += yy4;
        } else {
            [ xx4,yy4 ] = rotate(xx4,yy4,clockwise);
            matrix[x4][y4] = number;
            x4 += xx4;
            y4 += yy4;
        }
        if (matrix.flat().filter(e => e === 0).length === 0) break;
        // x4 y4--
        number++;
    }



    return matrix;
}

function rotate(x, y, flag) {
    if (flag) {
        if (x === -1) { x = 0, y = 1 }
        else if (y === 1) { x = 1, y = 0 }
        else if (x === 1) { x = 0, y = -1 }
        else if (y === -1) { x = -1, y = 0 }
    } else {
        if (x === -1) { x = 0, y = -1 }
        else if (y === 1) { x = -1, y = 0 }
        else if (x === 1) { x = 0, y = 1 }
        else if (y === -1) { x = 1, y = 0 }
    }
    return [x,y]
}


/**
 * 
 * main core
 * 
 * 
 */


//  let money1 = 4578;
//  let costs1 = [1, 4, 99, 35, 50, 1000];

//  let money2 = 1999
//  let costs2 = [2, 11, 20, 100, 200, 600]//	2308

console.table(solution(8, false));
//  console.log(solution(money2, costs2));
