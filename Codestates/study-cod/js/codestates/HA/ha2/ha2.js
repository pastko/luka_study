// test1 
function test1() {
    // TODO: 여기에 코드를 작성하세요.
    let result = [0,1];
    let flag = 0;
    return ()=>{
        result.push(result[flag]+result[flag+1]);
        return result[flag++];
    }
}

// const fn = test1();
// console.log(fn()); // --> 0
// console.log(fn()); // --> 1
// console.log(fn()); // --> 1
// console.log(fn()); // --> 2
// console.log(fn()); // --> 3
// console.log(fn()); // --> 5


// test2 
function test2(arr, id) {
    // TODO: 여기에 코드를 작성합니다.
    
    let result = null;
    for(let i = 0 ; i < arr.length; ++i){        
        if(arr[i].id === id){
            result = arr[i];
            break;
        }
        else
        {
            if(arr[i].children !== undefined)
            {
                result = test2(arr[i].children, id)
                if( result !== null)
                    break;
            }
        }
    }
    return result;
}

let input = [
  {
    id: 1,
    name: 'johnny',
  },
  {
    id: 2,
    name: 'ingi',
    children: [
      {
        id: 3,
        name: 'johnson',
      },
      {
        id: 5,
        name: 'steve',
        children: [
          {
            id: 6,
            name: 'lisa',
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: '13',
  },
];

// let output = test2(input, 1);
// console.log(output); // --> { id: 1, name: 'johnny' }

// output = test2(input, 5);
// console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

// output = test2(input, 99);
// console.log(output); // --> null



// test3
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
        //console.log(from,to, currentLength)
        //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
		if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
			console.log("범위가 매트릭스 밖에 있습니다.");
			return;
		}
        //TODO: 간선을 추가해야 합니다.
        this.matrix[from][to] = 1;
        this.matrix[to][from] = 1;

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
        this.matrix[to][from] = 0;
	}
    getMatrix(){
        return this.matrix.slice();
    }
}

function test3(insertEdges, removeEdges) {
    // TODO: 여기에 코드를 작성하세요.
    let max = insertEdges.reduce((acc,el)=>acc > Math.max(el[0],el[1])? acc : Math.max(el[0],el[1]) ,0) + 1;
    let matrixs = new GraphWithAdjacencyMatrix();
    for(let i = 0 ; i < max ; ++i ) 
        matrixs.addVertex();
    
    insertEdges.forEach(e=>matrixs.addEdge(e[0],e[1]));
    console.dir(matrixs);
    removeEdges.forEach(e=>matrixs.removeEdge(e[0],e[1]));
    console.dir(matrixs);
    return matrixs.getMatrix();
}

const insertEdges = [
    [0, 3],
    [0, 2],
    [1, 3],
    [2, 1],
  ];
  const removeEdges = [[1, 3], [1, 0]];
//   let output1 = test3(insertEdges, removeEdges);
  
//   console.log(output1);
//   /**
//    * [
//    *  [0, 0, 1, 1],
//    *  [0, 0, 1, 0],
//    *  [1, 1, 0, 0],
//    *  [1, 0, 0, 0]
//    * ]
//    */
  
  const insertEdges2 = [
    [0, 2],
    [2, 4],
    [1, 3],
    [2, 1],
  ];
  const removeEdges2 = [
    [0, 3],
    [2, 1],
    [1, 0],
    [4, 2]
  ];
  
  let output2 = test3(insertEdges2, removeEdges2);
  
  console.log(output2);
  /**
   * [
   *  [0, 0, 1, 0, 0],
   *  [0, 0, 0, 1, 0],
   *  [1, 0, 0, 0, 0],
   *  [0, 1, 0, 0, 0],
   *  [0, 0, 0, 0, 0],
   * ]
   */