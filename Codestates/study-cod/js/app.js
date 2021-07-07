


function solution(n) {
  let answer = '수박';
  let result = '';

  if( n  % 2 === 0 ) 
  {   
      return answer.repeat(n/2);
  }   
  else
  {
      return answer.repeat(n/2) + '수';
  }
}





console.log(solution(5))
