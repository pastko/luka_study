
function test1(str) {
// TODO: 여기에 코드를 작성합니다.
if(str.length === 0)
    return {}

let arr = str.toLowerCase().split(" ");
let ob  = {};
arr.map(e=>
{
    if( e !== '')
    return ob[e] = (ob[e] | 0) + 1
})
return ob
}


// console.log(test1('ask a bunch try a BUNCH get a bunch'));


function test2(num) {
// TODO: 여기에 코드를 작성합니다.
let result = 0;
if( num < 0)
{
    result = num.toString().split('');
    result[1] = result[0]+result[1];
    result = result.slice(1).reduce((a,b)=>a+Number(b),0);
}
else{
    result = num.toString().split('').reduce((a,b)=>a+Number(b),0);
}
return result
}

// console.log(test2(-912));

function test3(num) {
// TODO: 여기에 코드를 작성합니다.
if(num < 10)
    return num;

let result= num.toString().split('').reduce((a,b)=>a*Number(b),1);
return test3(result);
}


// console.log(test3(786))


function test4(arr) {
// TODO: 여기에 코드를 작성합니다.
console.log(arr);
return (
    arr.map(e =>`<li><a class="name">${e.firstName} ${e.lastName}</a><div class="age">${e.age}</div></li>`).join('').toString()
)
}

// console.log(test4([
//   { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//   { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
// ]))

function test5(arr) {
// TODO: 여기에 코드를 작성합니다.
let result = [];

arr.forEach(element =>{
    let ob ={};
    element.forEach(res=>{
    ob[res[0]] = res[1];
    }) 
    result.push(ob);
})  

return result.sort((a,b)=>a.age-b.age).map(e=>{
    return e.firstName 
    ? e.lastName ? `${e.firstName} ${e.lastName}` : `${e.firstName}` 
    : e.lastName ? `${e.lastName}` : ''
});  
}

// console.log(test5([
//   [
//     ['firstName', 'Joe'],
//     ['age', 42],
//     ['gender', 'male'],
//   ],
//   [
//     ['firstName', 'Mary'],
//     ['lastName', 'Jenkins'],
//     ['age', 36],
//     ['gender', 'female'],
//   ],
//   [
//     ['lastName', 'Kim'],
//     ['age', 40],
//     ['gender', 'female'],
//   ],
// ]))





let left  = ( )=>{console.log("left");  return true; }
let right = () =>{console.log("right"); return false;}

//console.log( left() | right() );



console.log( 0 || 4 );