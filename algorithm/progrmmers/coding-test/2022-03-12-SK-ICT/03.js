/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

function solution(width, height, diagonals) {
    let points = pointDvision(diagonals);
   
    return points.reduce((acc,p)=> {
        let cal = (p.reduce((acc,res)=>acc+distans(res,[width,height]),0) * p.reduce((acc,res)=>acc+distans([0,0],res),0))%10000019
        return acc < cal ? acc : cal;
    },10000019);
}

function distans(sPoint,dPoint){
    return factorial((dPoint[0] - sPoint[0]) + (dPoint[1] - sPoint[1]))/(factorial(dPoint[0]-sPoint[0])*factorial(dPoint[1]-sPoint[1]))
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function pointDvision(point){
    return point.map((e)=>[[e[0]-1, e[1]],[e[0],e[1]-1]])
}


/**
 * 
 * main core
 * 
 * 
 */


//  let money1 = 4578;
//  let costs1 = [1, 4, 99, 35, 50, 1000];

//  let money2 = 1999
//  let costs2 = [2, 11, 20, 100, 200, 600]//	2308

console.table(solution(2, 2, [[1,1],[2,2]]));
console.table(solution(34, 51, [[17,19]]));
//  console.log(solution(money2, costs2));