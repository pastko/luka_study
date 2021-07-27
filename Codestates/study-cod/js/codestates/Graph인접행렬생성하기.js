function createMatrix(edges) {
	// TODO: 여기에 코드를 작성합니다.
    let matrixArray = [];
    let maxSize     = 0;

    
    edges.forEach(ele => {
        let [from, to, direct] = ele
        maxSize = from > to ? (from > maxSize ? from : maxSize) : (to > maxSize ? to : maxSize )
    });
    console.log(maxSize)
    
    for (let i = 0; i < maxSize+1; i++) {
        matrixArray.push(new Array(maxSize+1).fill(0));
    }
    
    edges.forEach(ele => {
        let [from, to, direct] = ele
        if(direct === 'undirected')
        {
            matrixArray[from][to] = 1;
            matrixArray[to][from] = 1;
        }
        
        if(direct === 'directed')
        {
            matrixArray[from][to] = 1;
        }
    });
    return matrixArray;
}


let output1 = createMatrix([
	[0, 3, "directed"],
	[0, 2, "directed"],
	[1, 3, "directed"],
	[2, 1, "directed"],
]);

console.table(output1);
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

console.table(output2);
/**
 * [
 *  [0, 0, 1, 0, 0],
 *  [0, 0, 0, 1, 0],
 *  [0, 1, 0, 0, 1],
 *  [0, 1, 0, 0, 0],
 *  [0, 0, 1, 0, 0],
 * ]
 */