// toy 25
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