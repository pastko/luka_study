// test 05

function createMatrix(edges) {

	let max = 0;
	for (let i = 0; i < edges.length; i++) {
		const curMax = Math.max(...edges[i].slice(0, 2));
		curMax > max ? (max = curMax) : null;
	}
	const result = new Array(max + 1).fill(0).map((row) => new Array(max + 1).fill(0));


	edges.forEach((edge) => {
		const [row, col] = edge;
			result[col][row] = 1;
            result[row][col] = 1;
	});

	return result;
}

function getDirections(matrix, info) {

    const queue = [0];
    const enqueue = (n) => queue.push(n);
    const dequeue = (n) => queue.shift();

    let sheeps = 1;
    let wolfs = 0;


    const isVisited = new Array(matrix.length).fill(false);
    const isChecked = new Array(info.length).fill(false);

    isVisited[0] = 1
    isChecked[0] = true;

    while (queue.length > 0) {

        const now = dequeue();
        console.log(now);
        if (sheeps === wolfs) return sheeps;

        for (let next = 0; next < matrix[now].length; next++) {
            console.log(sheeps+":"+wolfs)
            // console.log(`[${now},${next}]`)
            if (matrix[now][next] && isVisited[next] < 2){
                if(info[next] === 0){
                    if(!isChecked[next]){
                        sheeps++;
                        isChecked[next]=true;
                    }
                    enqueue(next);
                }
                if(info[next] === 1){
                    if( sheeps != wolfs + 1)
                    {
                        if(!isChecked[next]){
                            wolfs++;
                            isChecked[next] = true
                        }             
                        enqueue(next);
                    }else{
                        continue;
                    }
                }
                isVisited[next]++;
            }
        }
    }

    return sheeps;
}


function solution(info, edges) {
    var answer = 0;
    let matrix = createMatrix(edges);
    console.table(matrix);

    // matrix 만들고
    // 길 찾아가면서 양이 갯수 카운트 양이랑 늑대의 총량이 같으면 안됨 
    // 0 좌우  양인쪽으로 end => 0 

    return getDirections(matrix,info)
   
}


let output = solution([0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], [[0, 1], [1, 2], [1, 4], [0, 8], [8, 7], [9, 10], [9, 11], [4, 3], [6, 5], [4, 6], [8, 9]]);
console.log(output);


output = solution([0,1,0,1,1,0,1,0,0,1,0], [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[6,9],[9,10]]);
console.log(output);