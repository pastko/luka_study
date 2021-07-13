let x = 2;
let y = x;
y = 3





const arr = ['peanut', 'butter', 'and', 'jelly'];



function transformFirstAndLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {};

    if( arr.length === 0)
        return {};
    
    result[arr[0]] = arr[arr.length-1]
    console.log(result);
    console.log(typeof result);

    return result;
}


function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 10;
    let years  = 0;
    while(true)
    {
        if(result >= 20)
            break;
        years++;

        result = result + (result * interestRate)/100;
        console.log(`${years} : ${result}}`);
    }
    return years;
}
  

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 1;
    if( num === 1 )
      return true;
  
    while(num > count)
    {      
        count *= 2;
        console.log(count)
        if( num === count)
            return true
    }
    return false;
}
  
function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    if( str.length === 0)
      return [];

    
    str.split(' ').forEach(element => {
        result.push(element[0])
    });
    return result.join('');
}






function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.
    return students
            .filter(e=>e.gender !== 'male')
            .map(e=>{
                e.grades = e.grades.reduce((a,b)=>a+b)/e.grades.length;
                return e;
            })
}
  

// console.table(studentReports([
//     {
//       name: 'Anna',
//       gender: 'female',
//       grades: [4.5, 3.5, 4],
//     },
//     {
//       name: 'Dennis',
//       gender: 'male',
//       country: 'Germany',
//       grades: [5, 1.5, 4],
//     },
//     {
//       name: 'Martha',
//       gender: 'female',
//       grades: [5, 4, 4, 3],
//     },
//     {
//       name: 'Brock',
//       gender: 'male',
//       grades: [4, 3, 2],
//     },
//     {
//         grades: [4, 3, 2],
//         name: 'Andrea',
//         gender: 'female',
//       },
//   ]));


  function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    arr.sort((a,b)=>a.length-b.length);
    let leastNumArray = arr.filter(e=>arr[0].length === e.length)
    let largeNumArray = arr.filter(e=>arr[0].length !== e.length)
    console.log(`${leastNumArray} : ${largeNumArray}`);
    
    return leastNumArray.slice(0,leastNumArray.length-1).concat(largeNumArray.slice(0,largeNumArray.length-1));
  }
  

  function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let min = { len : 20, data : 0 }, max = { len: 0, data : 0 };
    let result = [];
    for(let i = 0 ; i < arr.length; ++i)
    {
      if( arr[i].length >= max.len)
      {
        max.len = arr[i].length;
        max.data = i;
      }
      
      if( arr[i].length <= min.len)
      {
        min.len = arr[i].length;
        min.data = i;
      }
    }

    for(let i = 0 ; i < arr.length; ++i)
    {
      if( i === min.data || i === max.data )
      {

      }
      else
        result.push(arr[i]);
    }
  
    return result;
  }



function readVertically(arr) {
  // code goes here
  let siz = Math.max(...arr.map(e=>e.length))
  let result = ''
  console.log(siz)
  for(let i = 0 ; i < siz ; ++i){
    for(let j = 0 ; j < arr.length ; ++j){
      if( arr[j][i] !== undefined)
      {
        result += arr[j][i];
      }
      
    }
  }

  return result;
}

// console.log(readVertically([
//   //
//   'hi',
//   'wolrd',
// ]));

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if( arr.length === 0)
    return false;
  
  for(let i = 1 ; i< arr.length ; ++i){
    console.log(`${arr[i]} : ${arr.slice(0,i).reduce((a,b)=>a+b)}`);
    if( arr[i] <= arr.slice(0,i).reduce((a,b)=>a+b))
      return false
  }

  return true;
}

console.log(superIncreasing( [1, 2, 4, 8, 15]));
console.log(superIncreasing([979, 1737, -2146, -337, 1316]));