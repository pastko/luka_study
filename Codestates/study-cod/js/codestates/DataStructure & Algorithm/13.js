// DataStructure & Algorithm 
// HACK: 13_[DFS / BFS] 연결된 정점들

function connectedVertices1(edges) {
    // TODO: array flag
    let maxNum = 0;
    edges.map(e=> maxNum = Math.max(maxNum,e[0],e[1])); 
    let groupArray = Array(maxNum).fill(0);
    let groupFalg = 1;

    // for(let i = 0 ; i < edges.length; ++i){
    //     if( groupArray[i] === 0 ) groupArray[i] = count;
    //     for(let j = 0 ; j < edges.length ; ++j){
    //         if( edges[j].includes(edges[i][0]) || edges[j].includes(edges[i][1])){
    //             if( groupArray[j] === 0 ) groupArray[j] = count;
    //         }
    //     }
    //     count++;
    // }

    // return [...new Set(groupArray.filter(e=>e!==0))].length;
    let edg = (num, groupN)=>{
        edges.map((e,eidx)=>{
  
            if(e.includes(num[0]) || e.includes(num[1])){
                groupArray[eidx] = groupN;
                edg(e,groupN);
            }
        })
    }

    for(let i = 0 ; i < edges.length ; ++i){
        if(groupArray[i] === 0) groupArray[i] = groupFalg;
        edg(edges[i], groupFalg);
        groupFalg++;
    }

    return groupArray;
}



function connectedVertices(edges) {
    // TODO: DFS / BFS
    let maxNum = Math.max(...edges.flat()); 
    let matrix = [];

    for(let i = 0;i<=maxNum;++i){
        matrix.push(new Array(maxNum + 1).fill(0));
    }
    let visityNode = Array(maxNum+1).fill(0);
    console.log(matrix);
    for(let e of edges)
    {
        matrix[e[0]][e[1]] = 1; 
        matrix[e[1]][e[0]] = 1;
    }
    

    let checkvisit = (idx )=>{
        if(visityNode[idx] !== 0) return;



    }

}

let result = connectedVertices([
	[0, 1],
	[2, 3],
	[3, 4],
	[3, 5],
]);
console.log(result); // 2

result = connectedVertices([
    [0, 1],
    [2, 3],
    [4, 5],
]);

console.log(result); 

result = connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [4, 5],
    [6, 7],
    [7, 8],
]);
console.log(result); 