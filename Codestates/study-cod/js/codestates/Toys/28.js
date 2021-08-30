// toy 28


const robotPath2 = function (room, src, sDir, dst, dDir) {
    // TODO: 여기에 코드를 작성합니다.
    let visity = []
    let x, y


    /*
    if x-1, y 1 or ( undefined or length 보다 클때 )
        count + abs( sDir - 1 ) 위쪽
        // 직진 1 or ( undefined or length 보다 클때 ) 까지
            count + 1
    if x, y+1 1 or ( undefined or length 보다 클때 )
        count + abs( sDir - 2 ) 오른쪽
        // 직진 1 or ( undefined or length 보다 클때 ) 까지
            count + 1
    if x+1, y 1 or ( undefined or length 보다 클때 )
        count + abs( sDir - 3 ) 아래쪽
        // 직진 1 or ( undefined or length 보다 클때 ) 까지
            count + 1
    if x, y-1 1 or undefined
        count + abs( sDir - 4 ) 왼쪽
        // 직진 1 or ( undefined or length 보다 클때 ) 까지
            count + 1
    */
};
