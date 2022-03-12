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


// function barcode(len) {
    

    /**
     *  TODO: 바코드 
     *  1,2,3을 이용하여 len길이의 문자열 생성
     *  : 1 -> 1  -> 1,2,3 -> 1,2,3
     *  :      2
     *  :      3
     */

     
//     let re = [1,2,3];
//     let result =  getcombine(re,len);
    
//     return result;
// }

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

function barcode(len) {
    const isValid = (str) => {
        // index 관리를 편하게 하기 위해 string reverse
        const reversed = str.split('').reverse().join('');
        // 인접한 두 개의 부분 수열이 동일한지 확인한다.
        // 최대 절반 길이만큼만 두 개의 부분 수열이 가능하다.
        const halfLen = Math.floor(str.length / 2);
        for (let i = 1; i <= halfLen; i++) {
            if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
                return false;
            }
        }
        return true;
        // 모든 길이에 대해서 순차적으로 유효성을 검사하기 때문에,
        // str.length 보다 낮은 길이의 str은 이미 유효성을 통과했다.
        // 따라서 처음부터 시작하는 부분 수열만 고려해도 된다. (reverse 된 상태라고 가정)
        // 예시. 문자열이 '123123'일 경우
        // 예시. ('1', '2'), ('12', '31'), ('123', '123')
        // 인덱스 1에서 시작하는 부분 수열을 검사할 필요가 없는데,
        // 예시. ('2', '3'), ('23', '12'), ...
        // 이는 이미 이전 문자열이 '32132' 에서 검토되었기 때문인다. '32132'를 뒤짚으면 '23123'
    }
    const chr = '123';
    const aux = (str) => {
        // 유효성을 통과해서 만든 길이 len의 str을 리턴한다.
        if (str.length === len) return str;
        // 조건을 만족하는 가장 작은 수를 찾고 있으므로,
        // 1, 2, 3 순서대로 검토한다.
        // 실제 수(number) 비교는 필요없다.
        for (let i = 0; i < chr.length; i++) {
            if(isValid(str + chr[i])) {
                const founded = aux(str + chr[i]);
                if (founded !== null) return founded;
            }  
        }
        // 현재 str에서 1, 2, 3을 이어붙여서 유효한 문자열을 만들 수 없는 경우
        return null
    }
    return aux('');
}



let output = barcode(3);
console.log(output); // "121"

output = barcode(7);
console.log(output); // "1213121"

output = barcode(20);
console.log(output); // "12131231321231213123"