class workQueue {
    
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    working ()
    {
        let deleteWorkor = 0;
        for(let i = this.front ; i < this.rear ; ++i){
            console.log(`${i} : ${this.storage}`)

            this.storage[i].value--;
            if(this.storage[i].value <= 0){
                deleteWorkor = this.storage.key;
                this.front++;
            }        
        }
        console.log(deleteWorkor)
        return deleteWorkor;        
    }

    size() {
        return this.rear - this.front;
    } 
      // 큐에 데이터를 추가 할 수 있어야 합니다.
    enqueue(element) {
        this.storage[this.rear] = element;
        this.rear += 1;
    }  

    get() {
        return Object.values(this.storage);
    }

    emtpy() {
        return Object.keys(this.storage).length === 0;
    }
    
      // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
    dequeue() {
      // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
        if (this.front === this.rear) {
            return;
        }
    
        const result = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
    
        return result;
    }

    makeEmtpy(){
        this.storage    = {};
        this.rear       = 0;
        this.front      = 0;
    }
}

function queuePrinter1(bufferSize, capacities, documents) {
    // TODO: 여기에 코드를 작성합니다.
    let workerQueue = new workQueue(),
        workTime    = 0
        workcap     = capacities;

    workcap -= documents[0];
    workerQueue.enqueue({ "key" : documents.shift() , "value" : bufferSize })
    while(!workerQueue.emtpy() && documents.length !== 0)
    {
        workTime++;
        workcap  += workerQueue.working();

        if(documents.length !== 0){
            if( capacities >= workcap + documents[0])
            {
                workcap -= documents[0];
                workerQueue.enqueue({ "key" : documents.shift() , "value" : bufferSize })
            }
        }
        // timer ++
        // working
        // cap 
        // if cap .entpy than enque
        console.log(`[post : ${workTime}] --  : ${workerQueue.get()} [${ workerQueue.size()}] : [${ documents.length}]`)
    }
    return workTime;
}

function queuePrinter(bufferSize, capacities, documents) {
    // TODO: 여기에 코드를 작성합니다.
    let workerQueue = [];
    let workerFlag  = 0;
    let workcap     = 0;
    let workTime    = 0;

    while( workerFlag !== 0 || documents.length !== 0)
    {
        workTime++;
        // 작업 시간 감소
        for(let i = 0 ; i < workerFlag ; ++i)
        {
            workerQueue[i].value--;
        }
        
        // 작업 공간에 작업이 끝난 문서가 있는지 확인.
        if(workerQueue.length != 0){
            if(workerQueue[0].value === 0)
            {
                workcap -= workerQueue[0].key;
                workerQueue.shift();
                workerFlag--;
            }
        }
        console.log(`[pre : ${workTime}] --  : ${JSON.stringify(workerQueue)} [${ workerFlag}] : [${workcap}]: [${documents.length}]`)

        // 작업 공간에 자리가 비었거나, 용량이 남았다면 새로운 문서를 작업공간에 입력한다.
        if(documents.length !== 0){
            if( capacities >= workcap + documents[0] && workerFlag < bufferSize)
            {
                workcap += documents[0];  // worker buffer size
                workerQueue.push({ "key" : documents.shift() , "value" : bufferSize });
                workerFlag++;
                // workerFlag : worker 크기 최대 2칸 
            }
        }


        console.dir(workerQueue);

        // timer ++
        // working
        // cap 
        // if cap .entpy than enque
        console.log(`[post : ${workTime}] --  : ${JSON.stringify(workerQueue)} [${ workerFlag}] : [${workcap}]: [${documents.length}]`)
    }
    return workTime;
}




let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
//let output = queuePrinter(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
console.log(output) // 8

