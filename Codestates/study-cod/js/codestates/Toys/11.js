

// toy 11
const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let strSort = [ ...(new Set(str.split('').sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))))].join('');
    let result = ['']
    console.log(strSort);

    // 1, 12, 123 , 2 , 23 , 3
    for(let i = 1 , j = 0 ; j < strSort.length ; ++i)
    {
        console.log(`${j} - ${i} : ${result}`)
        if( i < strSort.length){
            result.push(strSort.slice(j,i));
        }else{
            result.push(strSort.slice(j));
            j++;
            i = j
        }
    }
    return result;
};

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

let output3 = powerSet('bbaaa');
console.log(output3)

// TODO : add coding