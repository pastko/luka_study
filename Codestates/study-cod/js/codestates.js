/// 01 번

function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);

    for(let i = 0 ; i < arr.length; ++i)
    {
        const rest = arr.filter((e)=>e!==arr[i]);
        const combinations = getcombine(rest, select - 1);
        const attached  = combinations.map((rest) => [arr[i], ...rest]);
        results.push(...attached); 
    }
    return results;
}


function getcombine(arr) {
    

    let firstFlag   = add[0];
    let results     = [];
    let filterrFlga = arr.filter((e)=>e!==firstFlag);



}


function orderOfPresentation (N, K) 
{
    // TODO: 여기에 코드를 작성합니다.
    let oderArray   = [];
    let countArray  = 0;
    for(let i = 1 ; i<=N ; ++i)
    {
        oderArray.push(i);
    }
    let combinArray = getcombine(oderArray, N );

    
    for(let i = 0 ; i<=combinArray.length ; ++i)
    {
        if(arrayEquals(K,combinArray[i]))
            countArray = i;
    }
    return countArray;
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

//console.log(orderOfPresentation(5, [1, 3, 2, 4, 5]));
// console.log(orderOfPresentation(3, [1, 3, 2]));





function fibonacci(num) {
    
    if(num ===  0) return 0
  if(num ===  1) return 1

  return fibonacci(num-1) + fibonacci(num -2)
}
// console.log(fibonacci(9));

function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
    // 재귀 사용방법 
    // if (num <= 1) {
    //   return num;
    // }
    // return fibonacci(num - 1) + fibonacci(num - 2);
  
  
  
    let results = [0, 1];  
    let fibo = function(n) {
      if(results[n] !== undefined){
        return results[n] 
      }
      else { 
        // 피보나치를 계산하여 계산한 결과값을 저장해 둔다.
        results[n] = fibo(n - 2) + fibo(n - 1);
        return results[n]
      }
    }
  
    return fibo(n)   
  }
  





// const isSubsetOf = function (base, sample) {
//     // TODO: 여기에 코드를 작성합니다.

//     let s = sample.filter(e=>{
//         let i = base.filter(f=>f===e)
//          console.log(i)
//         return i.length > 0})
//     console.log(s);
    
//     return (s).length === sample.length
// };

//toy
const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    let ob = {};
    let baseCopy = base.map(e=>ob[e] = true);
    let filterSample = sample.filter(e=>ob[e] === true)
    console.log(filterSample);
    return filterSample.length === sample.length
};
  



// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// //let sample = [6, 7];
// let output = isSubsetOf(base, sample);

// console.log(output);



// toy 4번 문제 
const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let switchingFlag = false
    for(let i = 0 ; i < arr.length ; ++ i){
        for(let j = 0 ; j + 1 + i < arr.length ; ++j)
        {            
            if( arr[j] > arr[j+1])
            {
                let tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp;
                switchingFlag=true;
            }
        }
        if( switchingFlag === false)
            break;
        else
            switchingFlag = false
    }
    return arr;
};


// let output = bubbleSort( [20, -10, -11, 2, 4, 299]);
// console.log(output); // --> [1, 2, 3]







function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
  
    if( giftBox.length === 0 || giftBox[0] === '' ) return false;
    if( giftBox[0] === wish  )  return true;
    
    console.log(giftBox);
  
  
    if( Array.isArray( giftBox[0])) {
      return unpackGiftbox(giftBox[0],wish) || unpackGiftbox(giftBox.slice(1),wish)
    }
    else return unpackGiftbox(giftBox.slice(1),wish)
}



function unpackGiftbox1(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    console.log('callnumm');
    if( giftBox.length === 0 || giftBox[0] === '' ) return false;
    if( giftBox[0] === wish  )  return true;
    
   return giftBox.reduce((acc,res)=>{
       console.log(acc,res);
       if (Array.isArray(res)){ return acc || unpackGiftbox1(res,wish);}
       else if(res === wish){ return true;}
       else { return false || acc}
   },false)
}


const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];
const giftBox2 = [
    'airmax97',
    'ps4',
    ['wallet', 'postcard'],
    ['cookie', 'ohyes', 'money'],
    'iphone',
  ];
 //console.log(unpackGiftbox1(giftBox2, 'money'));
//console.log(giftBox2.includes('cookie'));



function flattenArr(arr) {
    console.log('1');
    // TODO: 여기에 코드를 작성합니다.
    if( arr.length === 0)return [];
    if( !Array.isArray(arr)) return [arr];
    
    return [ ...flattenArr(arr[0]), ...flattenArr(arr.slice(1)) ];
}

function flattenArr(arr) {
    console.log('1');
    // TODO: 여기에 코드를 작성합니다.
    if( arr.length === 0)return [];
    if( !Array.isArray(arr)) return [arr];

    return arr.reduce((acc,res)=>{
        if (Array.isArray(res)){ return acc.concat(flattenArr(res));}
        else { return [...acc, res]}
    },[]);
}

// console.log(flattenArr( [[1], 2, [3, 4], 5]));





class stack{
    constructor(){
        this.storage = {};
        this.top = 0;
    }

    size() {
        return this.top;
    }

        // 스택에 데이터를 추가 할 수 있어야 합니다.
    push(element) {
        this.storage[this.top] = element;
        this.top++;
    }
        
        // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
    pop() {
        // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
        if (this.top === 0) {
            return '';
        }
        this.top -= 1;
        const result = this.storage[this.top];
        delete this.storage[this.top];
        
        
        return result;
    }

    get() {
        return Object.values(this.storage);
    }

    emtpy() {
        return Object.keys(this.storage).length === 0;
    }

    makeEmtpy() {
        if (this.top === 0) {
            return ;
        }

        for(let i = this.top ; i > 0 ; --i)
        {
            this.top -= 1;
            const result = this.storage[this.top];
            delete this.storage[this.top];
        }
        return this.top;
    }
}

function browserStack(actions, start) {
    // TODO: 여기에 코드를 작성합니다.
    let prev = new stack(),
        next = new stack();
    let current = start;
    actions.forEach(el => {
        console.log(`[pre : ${el}] --   ${ prev.get()} [${ prev.size()}]  : ${current} : ${next.get()} [${ next.size()}]`)
        if(typeof el === 'number')
        {   
            if(el === -1)
            {
                // el -1 뒤로 가기 prev
                if( !prev.emtpy())
                {
                    next.push(current);
                    current = prev.pop();
                }
            }

            
            if(el === 1)
            {
                // el 1 앞으로 가기 next
                if( !next.emtpy() )
                {
                    prev.push(current);
                    current = next.pop();
                }
            }
        }else if(typeof el === 'string'){
            prev.push(current);
            current = el;

            next.makeEmtpy();
        }    
        //console.log(`[post : ${el}] --   ${ prev.get()} [${ prev.size()}]  : ${current} : ${next.get()} [${ next.size()}]`)
    });  
    
    return [prev.get(),current,next.get()];
}

// let actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
// let start = "A";

// let output = browserStack(actions, start);
// console.log(output);

// let output = browserStack([-1,-1], "A");
// console.log(output);


class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
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
        this.storage = {};
        this.rear = 0;
        this.front = 0;
    }
}


function paveBox(boxes) {
    // TODO: 여기에 코드를 작성합니다.
    let boxeQueue = new Queue();
    let current   = 0;
    let maxRes    = 0;

    boxes.forEach(e=>{
        if(boxeQueue.emtpy())
        {
            boxeQueue.enqueue(e);
            current = e;
        }
        else{
            if(current >= e){
                boxeQueue.enqueue(e);
            }
            else{
                let res  = boxeQueue.get().length;
                maxRes = maxRes > res ? maxRes : res
                boxeQueue.makeEmtpy();
                boxeQueue.enqueue(e);current = e;

            }
        }
        console.log(`[post : ${e}] --    ${current} : ${boxeQueue.get()} [${ boxeQueue.size()}]`)
    })

    if(!boxeQueue.emtpy())
    {
        let res  = boxeQueue.get().length;
        maxRes = maxRes > res ? maxRes : res
        boxeQueue.makeEmtpy();
    }
    return maxRes;
}


// let boxes = [5, 1, 4, 6];
// let output = paveBox(boxes);
// console.log(output); // 3

// boxes = [95, 90, 99, 99, 80, 99];

// output = paveBox(boxes);
// console.log(output); // 1



class workQueue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    working ()
    {
        let deleteWorkor = []
        for(let [key, ob] of Object.entries(this.storage))
        {
            console.log(key,ob)
            this.storage[key].value = ob.value--;
            if(this.storage[key].value <= 0){
                deleteWorkor(key);
                this.front--;
            }
                
        }
        console.log(deleteWorkor)
        return deleteWorkor.reduce((acc,res)=>{
            this.enqueue(res);
            return acc + res
        },0)
        
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

function queuePrinter(bufferSize, capacities, documents) {
    // TODO: 여기에 코드를 작성합니다.
    let workerQueue = new workQueue(),
        workTime    = 0
        workcap     = capacities;

    workcap -= documents[0];
    workerQueue.enqueue({ "key" : documents.shift() , "value" : bufferSize })
    while(!workerQueue.emtpy() && documents.length !== 0)
    {
        workTime++;
        workcap += workerQueue.working();

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
        console.log(`[post : ${workTime}] --  : ${workerQueue.get()} [${ workerQueue.size()}] : [${ documents}]`)
    }
    return workTime;
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8

