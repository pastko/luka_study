/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/
const ROOMS = 4;
const BATHS = 2;


function solution(n,m, room, bath) {
    if((ROOMS*room)+(BATHS*bath)>=n*m) return 0;
    if((ROOMS*room)+(BATHS*bath)+room+bath>n*m) return 0;

    let answer = 21;
    let homeSize = Array(n).fill(0);
    for (var i = 0; i < homeSize.length; i++) {
        homeSize[i] = new Array(m).fill(0);
    }
    console.table(homeSize);
    // 다 들어가고 빈공간이 남는가
    // while(){
    //     //room
    //     homeSize[i][j] = r1;
    //     homeSize[i+1][j] = r1;
    //     homeSize[i][j+1] = r1;
    //     homeSize[i+1][j+1] = r1;

    //     //
    //     homeSize[i][j] = b1;
    //     homeSize[i+1][j] = b1;
    //     // or
    //     homeSize[i][j] = b1;
    //     homeSize[i][j+1] = b1;
    // }

    homeSize = marking(homeSize,room,bath);
    console.log('result: ');
    console.table(homeSize);


    // 방에 입구가 존재하는가
    // 빈공간이 이어저 있는가
    // 빈공간의 한부분 이상이 테두리와 인접해 있어야함.
    
    return answer
}


function marking(room,r,b){
    let x = room[0].length;
    let y = room.length;
    let countr = r;
    let countb = b; 

    for(i = 0 ; i < y; i++){
        for(j = 0 ; j < x; j++){
            console.log(i,j);
            if(checkingRoom(room,i,j) & countr !== 0){
                countr--;
                markingRoom(room,i,j);
            }

            if(checkingBath(room,i,j) & countb !== 0){
                countb--;
                markingBath(room,i,j);
            }
            if(countb === 0 && countr === 0) break;
            console.log(countr,countb);
            console.table(room);
        }
        
        if(countb === 0 && countr === 0) break;
    }
    return room;
}

function checkingRoom(room,i,j){
    if(i === room[0].length-1 || j ===  room.length-1)
        return false;

    if(room[i][j] === 0  && room[i+1][j] === 0 && room[i][j+1] === 0 && room[i+1][j+1] === 0){
        return true;
    }else{
        return false;
    }
}

function markingRoom(room,i,j){
    console.log('Room');
    room[i][j] = 'Room';
    room[i+1][j] = 'Room';
    room[i][j+1] = 'Room';
    room[i+1][j+1] = 'Room';
}

function checkingBath(room,i,j){
    if(i === room[0].length-1 || j ===  room.length-1)
        return false;

    if(room[i][j] === 0  && room[i+1][j] === 0){
        return true
    }else{
        if(room[i][j] === 0  && room[i][j+1] === 0){
            return true;
        }
        else{
            return false
        }
    }
}

function markingBath(room,i,j){
    console.log('Bath');
    if(room[i][j] === 0  && room[i][j+1] === 0){
        room[i][j] = 'Bath'
        room[i][j+1] = 'Bath'
    }
    else if(room[i][j] === 0  && room[i+1][j] === 0){
        room[i][j] = 'Bath'
        room[i+1][j] = 'Bath'
    }
    console.table(room)
}

/**
 * 
 * values
 * 
 */
let m1=4, n1=5, room1=3, bath1=1;
let m2=2, n2=3, room2=1, bath2=1;
let m3=3, n3=4, room3=2, bath3=1;
let m4=2, n4=4, room4=1, bath4=1;



/**
 * 
 * main core
 * 
 * 
 */
// console.log(solution(n1,m1,room1,bath1));
// console.log(solution(n2,m2,room2,bath2));
// console.log(solution(n3,m3,room3,bath3));
console.log(solution(n4,m4,room4,bath4));


