function get(a,b)
{
    return a*b/2
}

let aps = (a,b)=>(a*b/2);

let wee = (a,b)=>{ return a*b/2 };

let sok = function(a,b){return a*b/2};


let change_tostring = (_dat) => (_dat.toString());
let change_tostring2 = (_dat) => (String(_dat));

let a = 10 + ('10' - 0);
let b = 10 + Number('10');

parseInt

// console.log(a);
// console.log(!"h");
// console.log(!undefined);
// console.log(true == 6);
// if([]){console.log("true") } 
// else {console.log("false")}
// console.log("")
// if(6){console.log("true") } 
// else {console.log("false")}

// console.log(typeof []);


function daysInMonth(month) {
    // TODO: 여기에 코드를 작성합니다.
    // 31 > 1,3, 5 , 7,  8 10 12
    // 30 > 6,9,11
    // 28 > 2
    let daysTo31 = [1, 3, 5 , 7, 8, 10, 12]
    let daysTo30 = [6, 9, 11]
  
    consol.log( daysTo30.some(month))
  
    if( daysTo30.some(month))
    {
      return Number(30);
    }
    else if( daysTo31.some(month))
    {
      return Number(31);
    }
    else{
      return Number(28);
    }
  }
  
  function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    if( score > 100 || score < 0)
      return 'INVALID SCORE';
  
    let grade = parseInt(score/10)
  
    switch(true)
    {
      case 10 >= grade && grade >= 9:
        return 'A' + isGradeWithPlusAndMinus(score)
      break; 
      case 8 === grade:
        return 'B' + isGradeWithPlusAndMinus(score)
      break;
      case 7 === grade:
        return 'C' + isGradeWithPlusAndMinus(score)
      break;
      case 6 === grade:
        return 'D' + isGradeWithPlusAndMinus(score)
      break;
      case 5 > grade && grade >= 0:
        return 'F' + isGradeWithPlusAndMinus(score)
      break;
      default:
        return 'INVALID SCORE';
      break
    }
  }
  
  
  function isGradeWithPlusAndMinus(score)
  {
    if( score === 100 )
        return '+';
    
    return (score%10 >= 8) ? '+' :  (score % 10 < 7) ? '-' : ''
  }


  function isPythagorean(side1, side2, side3) {
    // TODO: 여기에 코드를 작성합니다.
    let sqrtNumberList = [ Math.pow(side1,2), Math.pow(side2,2), Math.pow(side3,2) ]
    let maxsqrtnumber  =  sqrtNumberList.reduce((a,b) => { return Math.max(a,b)})
    // console.log(sqrtNumberList);
    // console.log(maxsqrtnumber);
    // console.log(sqrtNumberList.filter(m => m !== maxsqrtnumber))
    // console.log(sqrtNumberList.filter(m => m !== maxsqrtnumber).reduce((a,b)=>a+b , 0));
    if( maxsqrtnumber === sqrtNumberList.filter(m => m !== maxsqrtnumber).reduce((a,b)=>a+b , 0))
      return true;
    else
      return false;
  }
  
  //console.log(isPythagorean(3,4,5))
//console.log(bigInt(30).square());




function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  if( num  < 2 ) return ''
  if( num === 2) return '2'
  
  // 
  let resultString = ''
  let flag = false;

  for(let i = 2 ; i <= num ; ++i ){
    for (let j = 2; j < i; ++j)
    {
      if (i % j == 0) { flag = true; break; };   
    } 
    console.log(`${i} : ${flag}`);


    if( flag === false )  
    {
      resultString += i + '-'
    }
    else
      flag = false;
  }
  return resultString.substring(0,resultString.length-1);
}

// console.log(listPrimes(18));


let arr = [1,2,3,45,6]

// let str = 'Teamwork skills will take you anywhere';
// console.log(arr.reduce((a,b) => a.length >= b.length ? a : b))


return arr.filter(e=>e % 2 === 0)

let asdbb =4

arr.reduce(e=>{ if( e % 2 === 0) num.push(e); return e; })
let aaaanum = `dmkfe ${asdbb}`

console.log(aaaanum)
