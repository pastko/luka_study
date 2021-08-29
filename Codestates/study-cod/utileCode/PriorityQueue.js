// HACK : 우선순위 큐 [ Priority Queue ]

// queue data from
class Qnode {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// 우선순위 큐  Heap 사용
class Queue {
    constructor() {
        this.store = [];
        this.size = 0;
    }
    enqueue(element, priority) {
        // QElement 객체 생성
        const qnode = new Qnode(element, priority);
        let isContain = false;

        // 전체 데이터를 순회하면서 자신의 우선순위가 더 높은 위치를  탐색
        // splice 함수는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
        // array.splice(startIndex, deleteCount, item1, item2, ...)
        for (let i = 0, j = this.size; i < j; i++) {
            if (this.store[i].priority < qnode.priority) {
                this.queue.splice(i, 0, qElement);
                isContain = true;
                break;
            }
        }

        // 큐에 자신보다 더 낮은 우선순위를 가진 요소가 없을 때, 큐의 맨 마지막에 삽입
        if (!isContain) {
            this.queue.push(qElement);
        }
    }
    //우선순위는 code값이 가장 작은 것이 높음.
    dequeue() {
        let entry = 0;
        for (idx in this.store) {
            if (this.store[idx].code < this.store[entry].code) {
                entry = idx;
            }
        }
        return this.store.splice(entry, 1);
    }
    front() {
        return this.store[0];
    }
    back() {
        return this.store[this.size - 1];
    }
    empty() {
        return this.size === 0;
    }
}



// 간단 배열 사용
// 우선순위 큐 max queue 
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