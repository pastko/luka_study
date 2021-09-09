// toy 34_LCS
// HACK : 

const LCS = function (str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let result = Array(arr1.length).fill(0);
    for(let i = 0 ; i < arr1.length+1; ++i){
        result.push(Array(arr1.length).fill(0));
    }
    console.table(result);

    // for(let i = 1; i <= arr1.length; i++) { 
    //     for(let j = 1; j <= arr1.length; j++) { 
    //         if(arr1[i - 1] === arr2[j - 1]) result[i][j] = result[i - 1][j - 1] + 1 
    //         else result[i][j] = Math.max(result[i][j - 1],result[i - 1][j]) 
    //     } 
    // }

    return result;
};


let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS('acaykp', 'capcak');
console.log(output); // --> 4 ('acak')