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



let room = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 3;
let dst = [2, 2];
let dDir = 2;
let output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 11
/*
1. 시작 - (3, 0)에서 아래 방향을 향한 상태
장애물은 x로 표시, 출발지점은 s로 표시
[
[0, 0, 0, 0],
[0, x, x, 0],
[0, x, 0, 0],
[s, 0, x, x],
] 

2. 로봇은 아래 방향을 향하고 있음 
3인 이유: 위로 가기 위해서는 90도 회전이 2번, 직진 1번 필요함. 직진 한번으로 도달할 수 있는 모든 칸을 표기. 
2인 이유: 오른쪽으로 가기 위해서는 90도 회전 1번, 직진 1번이 필요함
[
[3, 0, 0, 0],
[3, x, x, 0],
[3, x, 0, 0],
[s, 2, x, x],
] 

3. (0, 0) 지점에서 로봇은 위 방향을 향하고 있음 
5인 이유: 오른쪽으로 가기 위해서는 90도 회전이 1번, 직진 1번 필요함.
1인 이유: 직진 1번으로 충분
[
[3, 5, 5, 5],
[3, x, x, 0],
[3, x, 0, 0],
[s, 2, x, x],
] 

4. 비슷한 방식으로 계산하면 최종적으로 방향 전환까지 11번이 나오게 된다.
*/

room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
];
src = [4, 2];
sDir = 1;
dst = [2, 2];
dDir = 3;
output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 7