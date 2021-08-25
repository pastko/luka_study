// DataStructure & Algorithm 
// HACK: 14_[DFS] 바코드


// function barcode(len) {
//     // TODO: dfs
//     let code = [1,2,3];
    

//     let conbin = (code,len)=>{
//         let results = [];    
//         if( len === 1 ) return code.map(e=>[e]);

//         for (let i = 0; i < len; ++i) {
//             const rest = code.filter((e)=>e!==code[i]);
//             const combinations = conbin(rest, len - 1);
//             const attached  = combinations.map((rest) => [code[i], ...rest]);
//             results.push(...attached); 
//         }
//         return results;
//     }

//     return conbin(code,len)
// }


function barcode(len) {
    // TODO: 
    

    /**
     *  TODO:
     *  1,2,3을 이용하여 len길이의 문자열 생성
     *  : 1 -> 1  -> 1,2,3 -> 1,2,3
     *  :      2
     *  :      3
     */

     
    let re = [1,2,3];
    let result =  getcombine(re,len);
    
    return result;
}

function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);

    for(let i = 0 ; i < arr.length; ++i)
    {
        const combinations = getcombine(arr, select - 1);
        const attached  = combinations.map((rest) =>{ 
            let rs = arr[i]+rest
            if(checking(rs)){
                return rs;
            }
            else return -1;
        });
        results.push(...attached); 
    }
    return results;
}


let checking = value => {
    console.log(value)
    for(let j = 1 ; j <= Math.floor(value.length/2); ++j)
    {
        for(let i = 0 ; i < value.length - j; ++i){
            console.log(value.slice(0,j))
            console.log(value.slice(i,j+i))

            if( value.slice(0,j) === value.slice(0+i,j+i)) return false;      
        }
    }
    return true;
}


let output = barcode(3);
console.log(output); // "121"

// output = barcode(7);
// console.log(output); // "1213121"

// output = barcode(20);
// console.log(output); // "12131231321231213123"