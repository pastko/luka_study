// toy 13 
const insertionSort = function (arr, calFlag) {
    // TODO: 여기에 코드를 작성합니다.
    if(calFlag === undefined){
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
    }
    else{
        let switchingFlag = false
        for(let i = 0 ; i < arr.length ; ++ i){
            for(let j = 0 ; j + 1 + i < arr.length ; ++j)
            {            
                if( calFlag( arr[j]) > calFlag(arr[j+1]))
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
    }

};
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]