// 01_test01
// HACK : HA3 test 1  최대 공배수 문제 

function test1(A, B) {

    if( A === 1 || B === 1) return 1
    
    // let minHalf =  Math.min(A,B);
    // while(true){
    //     if((A*B) % (minHalf*minHalf) === 0){
    //         if( minHalf === A || minHalf === B){
    //             ;
    //         }else{
    //             break;
    //         }
    //     }
    
    //     minHalf--
    // }
    // return minHalf;
    return GCD(A,B);
}
  

function GCD(a,b)
{
    if(b==0)return a;
    else return GCD(b,a%b);
}

// 가로 20, 세로 8이 주어졌을 때, 최대 4의 길이를 가진 정사각형 타일을 가질 수 있습니다.
let output1 = test1(20, 8);
console.log(output1); // --> 4

// 가로 18, 세로 27이 주어졌을 때, 최대 9의 길이를 가진 정사각형 타일을 가질 수 있습니다.
const output2 = test1(18, 27);
console.log(output2); // --> 9

output1 = test1(200, 80);
console.log(output1)


output1 = test1(12, 12);
console.log(output1)