/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/


function solution(beds, tables, cost) {
    let answer = Number.MAX_SAFE_INTEGER;
    let homeSize = 0;

    // // 두개를 가로로 나란히 
    // (beds[i][0]+tables[i][0])*Math.max(beds[i][1],tables[i][1])
    // // 두개중 하나를 가로로 눞혀서
    // (beds[i][0]+tables[i][1])*Math.max(beds[i][1],tables[i][0])
    // (beds[i][1]+tables[i][0])*Math.max(beds[i][0],tables[i][1])
    // // 두개를 세로로 나란히 
    // (beds[i][1]+tables[i][1])*Math.max(beds[i][0],tables[i][0])
   

    beds.forEach((bed) => {
        tables.forEach((table)=>{
            homeSize = Math.min(
                (bed[0]+table[0])*Math.max(bed[1],table[1]),
                (bed[0]+table[1])*Math.max(bed[1],table[0]),
                (bed[1]+table[0])*Math.max(bed[0],table[1]),
                (bed[1]+table[1])*Math.max(bed[0],table[0]),
            )    
            console.log(homeSize);
            answer = Math.min(answer, bed[2]+table[2]+(homeSize*cost))
            // console.log(answer);
        })
    });
    
    return answer
}




/**
 * 
 * values
 * 
 */
let beds1 = [[4, 1, 200000]], table1 = [[2, 3, 100000]], cost1 = 10000;
let beds2 = [[2, 3, 40], [2, 5, 20]], table2 = [[1, 1, 30]], cost2 = 10000;
let beds3 = [[2, 3, 40000], [2, 5, 20000]], table3 = [[1, 1, 30000]], cost3 = 10;


/**
 * 
 * main core
 * 
 * 
 */
console.log(solution(beds1,table1,cost1));
console.log(solution(beds2,table2,cost2));
console.log(solution(beds3,table3,cost3));

