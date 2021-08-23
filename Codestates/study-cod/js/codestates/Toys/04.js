
// toy 4번 문제 
const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let switchingFlag = false
    for(let i = 0 ; i < arr.length ; ++ i){
        for(let j = 0 ; j + 1 + i < arr.length ; ++j)
        {            
            if( arr[j] > arr[j+1])
            {
                let tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp;
                switchingFlag=true;
            }
        }
        if( switchingFlag === false)
            break;
        else
            switchingFlag = false
    }
    return arr;
};


let output = bubbleSort( [20, -10, -11, 2, 4, 299]);
console.log(output); // --> [1, 2, 3]
