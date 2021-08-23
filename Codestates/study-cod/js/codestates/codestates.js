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






class Tree {
    constructor(value) {
          // constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
}

    // 트리의 삽입 메서드를 만듭니다.
insertNode(value) {
        // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
        // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
    const childNode = new Tree(value);
    this.children.push(childNode);
}

    // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.a
contains(value) {
    console.log(`pre data = ${this.value} : ${value}`)
        // TODO: 값이 포함되어 있다면 true를 반환하세요. 
    if (this.value === value) {
        return true;
    }
        // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
    
    for(let element of this.children){
        console.log(element, value);
        if( element.contains(value))
            return true;
    }        

        // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
}
}


const rootNode = new Tree(null);

for(let i = 0; i <= 2; i++) {
if(rootNode.children[i]) {
rootNode.children[i].insertNode(i)
}
rootNode.insertNode(i); 
}

// console.table(rootNode)
// //rootNode; // {value: null, children: Array(5)}
// console.log(rootNode.contains(5)); //false
// console.log(rootNode.contains(1)); //true


// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)

class GraphWithAdjacencyMatrix {
	constructor() {
		this.matrix = [];
	}

	addVertex() {
        //버텍스를 추가합니다.
		const currentLength = this.matrix.length;
		for (let i = 0; i < currentLength; i++) {
			this.matrix[i].push(0);
		}
		this.matrix.push(new Array(currentLength + 1).fill(0));
	}

	contains(vertex) {
        //TODO: 버텍스가 있는지 확인합니다.
        if(this.matrix[vertex])
            return true;
        else return false;
	}

	addEdge(from, to) {
		const currentLength = this.matrix.length;
		if (from === undefined || to === undefined) {
			console.log("2개의 인자가 있어야 합니다.");
			return;
		}
        console.log(from,to, currentLength)
        //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
		if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
			console.log("범위가 매트릭스 밖에 있습니다.");
			return;
		}
        //TODO: 간선을 추가해야 합니다.
        this.matrix[from][to] = 1;
	}

	hasEdge(from, to) {
		//TODO: 두 버텍스 사이에 간선이 있는지 확인합니다.
        return this.matrix[from][to] === 1
	}

	removeEdge(from, to) {
		const currentLength = this.matrix.length;
		if (from === undefined || to === undefined) {
			console.log("2개의 인자가 있어야 합니다.");
			return;
		}
        //TODO: 간선을 지울 수 없는 상황에서는 지우지 말아야 합니다.
		if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
            console.log("범위가 매트릭스 밖에 있습니다.");
			return;
		}
        //TODO: 간선을 지워야 합니다.
        this.matrix[from][to] = 0;
	}
}

// const adjMatrix = new GraphWithAdjacencyMatrix();
// adjMatrix.addVertex();
// adjMatrix.addVertex();
// adjMatrix.addVertex();
// console.table(adjMatrix.matrix);
// /*
// 							TO
// 		 	  	 0  1  2
// 		  	0	[0, 0, 0],
// 	FROM 	1	[0, 0, 0],
// 		  	2	[0, 0, 0]
// */
// let zeroExists = adjMatrix.contains(0);
// console.log(zeroExists); // true
// let oneExists = adjMatrix.contains(1);
// console.log(oneExists); // true
// let twoExists = adjMatrix.contains(2);
// console.log(twoExists); // true

// adjMatrix.addEdge(0, 1);
// adjMatrix.addEdge(0, 2);
// adjMatrix.addEdge(1, 2);

// let zeroToOneEdgeExists = adjMatrix.hasEdge(0, 1);
// console.table(zeroToOneEdgeExists); // true
// let zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
// console.table(zeroToTwoEdgeExists); // true
// let oneToZeroEdgeExists = adjMatrix.hasEdge(1, 0);
// console.table(oneToZeroEdgeExists); // false

// console.table(adjMatrix.matrix);
// /*
// 							TO
// 		 	  	 0  1  2
// 		  	0	[0, 1, 1],
// 	FROM 	1	[0, 0, 1],
// 		  	2	[0, 0, 0]
// */

// adjMatrix.removeEdge(1, 2);
// adjMatrix.removeEdge(0, 2);
// let oneToTwoEdgeExists = adjMatrix.hasEdge(1, 2);
// console.table(oneToTwoEdgeExists); // false
// zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
// console.table(zeroToTwoEdgeExists); // false

// console.table(adjMatrix.matrix);
// /*
// 							TO
// 		 	  	 0  1  2
// 		  	0	[0, 1, 0],
// 	FROM 	1	[0, 0, 0],
// 		  	2	[0, 0, 0]
// */
