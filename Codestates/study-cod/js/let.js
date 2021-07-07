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
  

console.table(studentReports([
    {
      name: 'Anna',
      gender: 'female',
      grades: [4.5, 3.5, 4],
    },
    {
      name: 'Dennis',
      gender: 'male',
      country: 'Germany',
      grades: [5, 1.5, 4],
    },
    {
      name: 'Martha',
      gender: 'female',
      grades: [5, 4, 4, 3],
    },
    {
      name: 'Brock',
      gender: 'male',
      grades: [4, 3, 2],
    },
    {
        grades: [4, 3, 2],
        name: 'Andrea',
        gender: 'female',
      },
  ]));