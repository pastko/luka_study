


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





function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  if(str.length === 0)
    return '';
  
  
  // let result = []
  // str.split(' ').forEach(e=>{
    
  //     if(e === '')
  //     {
  //       result.push(' ');
  //     }
  //     else{
  //       result.push( e[0].toUpperCase() + e.slice(1));
  //     }
  //     console.log(`${e} : ${result}`);
  //   })

  // return result.join(' ');
  let flag = false;
  let resultString = ''
  if( str[0] === ' ')
  {
    flag = true;
    resultString += ' '
  }
  else
  {
    resultString = str[0].toUpperCase();
  }
   
  for(let i = 1 ; i < str.length ; ++i)
  {
    if(str[i] === ' ')
    {
      resultString += str[i];
      flag = true;    
    }
    else if(flag){
      resultString += str[i].toUpperCase();
      flag = false;
    }
    else{
      resultString += str[i];
    }

    
  }
  return resultString;
}


function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function mul3(num) {
  return num * 3;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function pipe( ...arg ) {
  // TODO: 여기에 코드를 작성합니다.
  let res = 0;
  console.log(arg);
  return (x) => {
    arg.forEach(e=>{
      x = e(x);
    })
    return x;
  }
}


function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  if( !Array.isArray(obj[property]))
    return [];

  return obj[property].filter(e=>{
    console.log(typeof e)
      if(typeof e === 'number'){
        return lessThan100(e);
      }
      else
        return false;
      
    });
}
//console.log(getElementsLessThan100AtProperty({ arr: ['99', 2, true] }, 'arr'));





console.log(letterCapitalize('javascript  is sexy '));
console.log(letterCapitalize(' nEVER  gIVE uP '));

console.log(solution(5))
