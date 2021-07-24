function createMatrix(edges) {
	// TODO: 여기에 코드를 작성합니다.
    let matrixArray = [];
    let maxSize     = 0;
    edges.forEach(ele => {
        for(let [from, to, direct] of ele)
        {   
            console.log(from,to)
            maxSize = from > to ? (from > maxSize ? from : maxSize) : (to > maxSize ? to : maxSize )
        }
    });
    console.log(maxSize)
    for (let i = 0; i < maxSize; i++) {
        matrixArray[i].push(0);
    }
    matrixArray.push(new Array(maxSize + 1).fill(0));

    let directedAddEdge  = (from,to) =>{

    }

    let undirectedAddEdge = (from,to)=>{

    }

    
    


    return matrixArray;
}


let output1 = createMatrix([
	[0, 3, "directed"],
	[0, 2, "directed"],
	[1, 3, "directed"],
	[2, 1, "directed"],
]);

console.dir(output1);
/**
 * [
 *  [0, 0, 1, 1],
 *  [0, 0, 0, 1],
 *  [0, 1, 0, 0],
 *  [0, 0, 0, 0]
 * ]
 */

let output2 = createMatrix([
	[0, 2, "directed"],
	[2, 4, "undirected"],
	[1, 3, "undirected"],
	[2, 1, "directed"],
]);

console.dir(output2);
/**
 * [
 *  [0, 0, 1, 0, 0],
 *  [0, 0, 0, 1, 0],
 *  [0, 1, 0, 0, 1],
 *  [0, 1, 0, 0, 0],
 *  [0, 0, 1, 0, 0],
 * ]
 */