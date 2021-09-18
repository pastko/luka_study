// toy 34_LCS
// HACK : LCS 알고리즘 

const LCS = function (str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let result = [];

    for (let i = 0; i < arr1.length + 1; ++i) {
        result.push(Array(arr2.length + 1).fill(0));
    }


    for (let i = 1; i <= arr1.length; i++) {
        for (let j = 1; j <= arr2.length; j++) {
            if (arr1[i - 1] === arr2[j - 1]) result[i][j] = result[i - 1][j - 1] + 1
            else result[i][j] = Math.max(result[i][j - 1], result[i - 1][j])
        }
    }
    console.table(result);
    let max = 0;
    result.forEach(e => {
        max = Math.max(...e);
    })

    let s = findLSCToString(arr1,arr2,result,max);
    console.log(s);
    return max;
};


let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS('acaykp', 'capcak');
console.log(output); // --> 4 ('acak')


output = LCS('1c2o3d4d5e', 'ss1tt2aa3tt4ee5ss');
console.log(output);

// find LCS string
function findLSCToString(str1, str2,table, len){
    let LCS = "";
    let yCol = table.length-1;
    let xRow = table[0].length-1;
    str1.unshift('0')
    str2.unshift('0')
 
    for (let i = yCol ; i > 0; i--) {
        for (let j = xRow ; j > 0; j--) {
            if (table[i][j] == len && table[i][j - 1] == len-1 && table[i - 1][j - 1] == len-1 && table[i - 1][j] == len-1) {
                len--;
                LCS = str2[j] + LCS;
                xRow = j-1;

                console.log(`[${i}:${j}] - ${str1[i]} ${str2[j]}`);
                break;
            }
        }
    }
    return LCS;
}