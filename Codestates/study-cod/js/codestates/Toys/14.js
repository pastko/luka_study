

// toy 14
const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    // let newObj = rotated.reduce((newob, e, idx)=>{
    // newob[e] = idx
    // return newob;
    // },{});

    // console.log(newObj);
    // return (newObj[target]) ? newObj[target] : -1;
    let result = -1;
    if(rotated[0] > target)
    {
        for(let i = rotated.length - 1 ; i >= 0 ; --i )
        {
            if(rotated[i] === target){
                result = i;
                break;
            }
        }
    }
     // 반대로 서칭

    else if(rotated[0] < target){
        rotated.forEach((e,idx)=>{
            if(e===target){
                console.log(e,target,idx);
                result = idx;
                return;
            }
        });
    }
    //정상 서칭

    return result;
};

let output = rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1

output = rotatedArraySearch([9, 10, 15, 4, 6, 8], 6);
console.log(output); // --> 4