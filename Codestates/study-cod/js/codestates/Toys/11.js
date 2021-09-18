
// toy 11_powerSet
// HACK : 

const powerSet1 = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let strSort = [...(new Set(str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))))].join('');
    let result = ['']
    console.log(strSort);

    // 1, 12, 123 , 2 , 23 , 3
    for (let i = 1, j = 0; j < strSort.length; ++i) {
        console.log(`${j} - ${i} : ${result}`)
        if (i < strSort.length) {
            result.push(strSort.slice(j, i));
        } else {
            result.push(strSort.slice(j));
            j++;
            i = j
        }
    }
    return result;
};

const powerSet = function (str) {
    // 정렬
    const sorted = str.split('').sort();
    console.log(sorted)
    // 중복 제거
    const deduplicated = sorted.reduce((acc, item) => {
        if (acc[acc.length - 1] === item) {
            return acc;
        } else {
            return acc.concat(item);
        }
    });

    let subSets = [];
    const pickOrNot = (idx, subset) => {
        // base case
        if (idx === deduplicated.length) {
            // 마지막 문자까지 검토한 경우
            subSets.push(subset);
            return;
        }

        // recursive case
        // idx번째 문자가 포함되지 않는 경우
        pickOrNot(idx + 1, subset);

        // idx번째 문자가 포함되는 경우
        pickOrNot(idx + 1, subset + deduplicated[idx]);
    };

    pickOrNot(0, '');

    return subSets.sort();
};


let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

let output3 = powerSet('bbaaa');
console.log(output3)

