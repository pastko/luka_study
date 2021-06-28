/****
 * 
 * 
 * 
 * 
 * 
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
입출력 예
numbers	return
[6, 10, 2]	"6210"
[3, 30, 34, 5, 9]  "9534330"
 * 
 * 
 */


let num = [6, 10, 2];
let num2 = [3, 30, 34, 5, 9];
let num3 = [0, 0, 0, 0];
let num4 = [21, 212];
let num5 = [15,151];
let num6 = [1020, 2010, 6002, 2006, 6010, 1006];


function solution(numbers) {
    var answer = '';
    let sumstring = [];
    let segment = permutation(numbers, numbers.length);    

    segment.map((v)=>{
        sumstring.push(v.join(''));
    });
    return sumstring.sort((a,b)=>{ return b - a})[0];
}


function solution1(numbers)
{    
  return  parseInt(numbers.sort((a,b)=>{
    if( (b.toString())[0] === (a.toString())[0] ) return b%10 - a%10;
    return (b.toString())[0] - (a.toString())[0];
  }).join('')).toString();
}

function solution2(numbers)
{    
  let res = numbers.sort((a,b)=>  (a.toString() + b.toString()) > (b.toString() + a.toString()) ? -1 : 1   ).join('');
  if( parseInt(res) === 0 )
    return "0";
  return res;
}

function solution3(numbers)
{    
  return numbers.sort((a,b)=>  (a.toString() + b.toString()) > (b.toString() + a.toString()) ? -1 : 1   ).join('');
}
/***
 * 
 *  main proc
 * 
 * 
 */


console.log(solution2(num3));
console.log(solution3(num3));





function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);


  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}



function pe(start, array, end)
{
  let result =[];
  if(size === end) return array;

  array.forEach((value, index, arr)=>{
      result = swap(arr[start], arr[end]);
      pe( start + 1, result, end );

  })
}



const dfs = (graph, startNode) => {
    let needVisitStack = []; // 탐색을 해야 할 노드들
    let visitedQueue = []; // 탐색을 마친 노드들
  
    needVisitStack.push(startNode);
  
    // 탐색을 해야 할 노드가 남아 있다면
    while (needVisitStack.length !== 0) {
      const node = needVisitStack.pop();
      if (!visitedQueue.includes(node)) {
        visitedQueue.push(node);
        needVisitStack = [...needVisitStack, ...graph[node]];
      }
    }
  
    return visitedQueue;
  };