// toy 19

const LPS = function (str) {
    if (str.length < 2) return 0;
  
    // 문자열을 두 부분으로 나누고
    // 부분 문자열을 쉽게 구하기 위해
    // 왼쪽 부분의 마지막 인덱스와 오른쪽 부분의 첫 인덱스를 저장
  
    let halfSize = Math.floor(str.length / 2);
    // 문자열의 길이가 홀수일 수 있으므로, 올림한다.
    let rightStart = Math.ceil(str.length / 2);
  
    // 가장 긴 LPS 후보부터 차례대로 검사한다
    for (let offset = 0; offset < halfSize; offset++) {
        let matched = true;
        for (let i = 0; i < halfSize - offset; i++) {
            if (str[i] !== str[rightStart + offset + i]) {
                matched = false;
                break;
            }
        }
        if (matched) return halfSize - offset;
    }
    // LPS가 없는 경우
    return 0;
};

const LPSs = function (str) {
    if (str.length < 2) return 0;
    let resultStr = '';

    // 가장 긴 LPS 후보부터 차례대로 검사한다
    for (let i = 0; i <= str.length / 2; i += 1) {
        let prefix = str.slice(0, i);
        let suffix = str.slice(str.length - i);
    
        if (prefix === suffix) {
            resultStr = prefix;
        }
    };  
    // LPS가 없는 경우
    return resultStr.length;
};



let output = LPS('abbbcc');
console.log(output); // --> 0

output = LPS('aaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS('aaaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.
