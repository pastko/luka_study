// toy 25
<<<<<<< Updated upstream
// HACK : 길찾기 알고리즘 [ BFS / DFS / 다익스트라]
/** 
 * TODO : BFS/ DFS 확인
 * 
 * 
 * 
 */



const robotPath = function (room, src, dst) {
    
    return room
};

// 우선순위 큐를 사용하여 다익스트라 알고리즘 사용 길찾기 ( 미로 찾기 ) 

class Qnode {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class AQueue {
    constructor() {
        this.store = [];
        this.size = 0;
    }

    enqueue( element, priority ) {
        this.size++;
        this.store.push(new Qnode(element, priority));
        this.store.sort((a,b)=>a.priority-b.priority);
    }

    dequeue() {
        if(this.isEmpty())
            return null;

        this.size--;
        return this.store.shift();
    }

    isEmpty(){
        return this.size === 0;
    }

    islength(){
        return this.size;
    }
}
=======
// HACK : 길찾기 알고리즘  [ DFS / BFS / 다익스트라 알고리즘 / A*(Astar) 알고리즘] 
// 

const robotPath = function (room, src, dst) {
    // TODO: 여기에 코드를 작성합니다.
    return room
};



let room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8
>>>>>>> Stashed changes
