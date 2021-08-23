// toy 15 
const primePassword = (curPwd, newPwd) => {
    // TODO: 여기에 코드를 작성합니다.
    let result = 0;
    if( curPwd === newPwd)
        return 0;

    for(let i = curPwd ; i <= newPwd ; ++i)
    {
        let flag = 0;
        for(let j = 2 ; j < Math.sqrt(i); ++j)
        {
        if( i % j === 0 ){
            flag = 1;
            break;
        }
        else
        {
            flag = 2;
        }
        }
        if( flag === 2)
        result++;
    }
    // curPwd 와 newpwd 사이의 소수 개수 ..;;; 
    // curPwd 를 변경 하는 횟수 === 변경시 소수여야함..; 흠...
    return result;
};
  
let output = primePassword(1033, 1033);
console.log(output); // --> 0

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)

// TODO : add coding