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



// toy 5번 문제 

let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    let tileArray = [ 1 , 2 ]
    
    if( n === 1)
        return tileArray[0];
    if( n === 2)
        return tileArray[1];
    
    for(let i = 2 ; i < n ; ++i)
    {
        tileArray.push(tileArray[i-2] + tileArray[i-1]);
        console.table(tileArray)
    }
    return tileArray[n-1]  
};


// let output = tiling(2);
// console.log(output); // --> 2

// output = tiling(4);
// console.log(output); // --> 5
/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------
``
2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/




// toy 6번
const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.
    let emptyNumberArray = [1,2,3,4,5,6,7,8,9];
    // 3x3 순회.
    // 해당 열 순회
    // 해당 행 순회
    // 가능 한 수 찾기 
    for(let i = 0 ; i < 3; ++i)
    {
        for(let j = 0 ; j < 3; ++j)
        {
            let s1 = findNumber(board,i);
            console.log(s1);            
        }
    }
    

    
    return emptyNumberArray
};

const findNumber = (board,x,y)=>{
    let emptyNumberArray = [1,2,3,4,5,6,7,8,9];

    for(let i = 0 ; i < 3 ; ++i)
    {
        for(let j = 0 ; j < 3 ; ++j)
        {
            emptyNumberArray = emptyNumberArray.filter(e=>board[i][j]!==e);
        }
    }    

    for(let i = 0 ; i < board.length ; ++i)
    {
        emptyNumberArray = emptyNumberArray.filter(e=>board[x][i]!==e);
    }

    for(let i = 0 ; i < board.length ; ++i)
    {
        emptyNumberArray = emptyNumberArray.filter(e=>board[i][y]!==e);
    }
    return emptyNumberArray
}

function isCurrect(x, y, num, board){
    for(let i=0; i<9; i++){
        if(num == board[y][i]) return false 
        // 가로에 1~9 중 i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
    }

    for(let i=0; i<9; i++){
        if(num == board[i][x]) return false
        // 세로에 1~9 중 i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
    }

    for(var i=y_; i<y+3; i++){
        for(var j=x_; j<x+3; j++){
          // 3x3 사각형 안에 
            if(num == board[i][j]) return false 
          // i랑 같은 숫자가 있으면 i는 빈칸에 넣을 수 없으니까 false 
        }
    }
    return true
}


let board = [
    [0, 3, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

// let output = sudoku(board);
// console.log(output); // -->
/* 
[
[4, 3, 5, 2, 6, 9, 7, 8, 1],
[6, 8, 2, 5, 7, 1, 4, 9, 3],
[1, 9, 7, 8, 3, 4, 5, 6, 2],
[8, 2, 6, 1, 9, 5, 3, 4, 7],
[3, 7, 4, 6, 8, 2, 9, 1, 5],
[9, 5, 1, 7, 4, 3, 6, 2, 8],
[5, 1, 9, 3, 2, 6, 8, 7, 4],
[2, 4, 8, 9, 5, 7, 1, 3, 6],
[7, 6, 3, 4, 1, 8, 2, 5, 9],
];
   */


// toy 7
let dfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    if(node.children.length === 0)
        return [node.value];
    
    result = [node.value]
    if( node.children[0] !== undefined) result = [...result, ...dfs(node.children[0])]
    if( node.children[1] !== undefined) result = [...result, ...dfs(node.children[1])]

    return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
    this.value = value;
    this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
};
  
// let root = new Node(1);
// let rootChild1 = root.addChild(new Node(2));
// let rootChild2 = root.addChild(new Node(3));
// let leaf1 = rootChild1.addChild(new Node(4));
// let leaf2 = rootChild1.addChild(new Node(5));
// let output = dfs(root);
// console.log(output); // --> [1, 2, 4, 5, 3]




// toy 8

const largestProductOfThree1 = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let minus = arr.filter(e=>e<0).sort((a,b)=>b-a);
    let plus = arr.filter(e=>e>=0).sort((a,b)=>b-a);

    if( arr.length === minus.length)
        return minus.slice(-1,-3).reduce((acc,res)=>acc*res);

    if( plus.length)    
    

    return arr.sort((a,b)=>Math.abs(b)-Math.abs(a)).slice(0,3).reduce((acc,res)=>acc*res);
};


const largestProductOfThree = function (arr) {
// TODO: 여기에 코드를 작성합니다.
    let sortArray = arr.sort((a,b)=>b-a);
    return Math.max(
        sortArray.slice(0,3).reduce((acc,res)=>acc*res),
        sortArray[0] * sortArray[arr.length-1] * sortArray[arr.length-2]
    );
};
      


// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)



// toy 9 

function power2(base, exponent) {
    // todo: 여기에 코드를 작성합니다.
    let result =1.00;
    for(let i = 0 ; i < exponent; ++i)
    {
        result = base *  (result);
        console.log(i,result);
    }
    return result  % 94906249
}
function power(base, exponent) {
    // TODO: 여기에 코드를 작성합니다.

    let results = [3];  
    let pow = function(n,count) {
        if(count === 1){
            return n 
        }
        else { 
        // 피보나치를 계산하여 계산한 결과값을 저장해 둔다.
            results[count] = (n * pow(n, count-1)) % 94906249;
            console.log(results[count],count)
            return results[count]
        }
    }
    return pow(base,exponent)   
}
  
function power1(base, exponent) {
    if (exponent === 0) return 1;
  
    const half = parseInt(exponent / 2);
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;
  
    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
}



let output = power(3, 40);
console.log(output); // --> 19334827





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
