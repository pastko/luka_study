function solution(n, jump) {
    var answer = [];
    let finish = n * n;
    let current = 1;
    let count = 0, totol =0;;
    let jumper = jump;
    let x = 0, y = 0;
    let top = 0, down = n - 1, left = 0, right = n - 1;
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Array(n).fill(0));
    }
    
    while (current !== finish+1) {
        for (x = left; x <= right && current <= finish; x++ , jumper++) {
            if(array[y][x] !== 0) jumper--;
            if(jump === jumper){
                array[y][x] = current++;
                jumper = 0;
            }
            count++;
        }
        x--; top++;

        for (y = top; y <= down && current <= finish; y++, jumper++) {
            if(array[y][x] !== 0) jumper--;
            if(jump === jumper){
                array[y][x] = current++;
                jumper = 0;
            }
            count++;
        }
        y--; right--;

        for (x = right; x >= left && current <= finish; x--, jumper++) {
            if(array[y][x] !== 0) jumper--;
            if(jump === jumper){
                array[y][x] = current++;
                jumper = 0;
            }
            count++;
        }
        x++; down--;

        for (y = down; y >= top && current <= finish; y--, jumper++) {
            if(array[y][x] !== 0) jumper--;
            if(jump === jumper){
                array[y][x] = current++;
                jumper = 0;
            }
            count++;
        }
        y++; left++;
        if(count === finish){
            top = 0; down = n - 1; left = 0; right = n - 1;
            x = 0, y =0;
            count=0;   
        }
    }   

    for(let i = 0; i < n ; i++){
        for(let j = 0; j < n ; j++){
            if( array[i][j] === finish)
                answer = [i+1,j+1];
        }
    }
    console.table(array)
    return answer;
}




let output = solution(5, 3) //	[5,2]
console.log(output)
output = solution(4, 1)//	[3,2]
console.log(output)

output = solution(3, 10) //	[2,1]
console.log(output)