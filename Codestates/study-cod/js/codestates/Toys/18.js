// toy 18 

// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//     // TODO: 여기에 코드를 작성합니다.
//     return sort([...arr1,...arr2])[k-1];
// };
  
  
let sort = function (arr,flag) {
    // TODO: 여기에 코드를 작성합니다.
        if (arr.length < 2) {
            return arr;
        }
        const pivot = [arr[0]];
        const left = [];
        const right = [];
    
        for (let i = 1; i < arr.length; ++i) {
            if(!flag){
            if (arr[i] <= pivot) left.push(arr[i]);
            else right.push(arr[i]);
            }else{
            if(flag(arr[i]) <= pivot) left.push(arr[i]);
            else right.push(arr[i]);
            }
        }
        //return arr;
        return [ ...sort(left,flag), ...pivot ,...sort(right,flag)];
    };
      
    // const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    //     // TODO: 여기에 코드를 작성합니다.
    //     let resul = sortArray([...arr1,...arr2]); 
    //     console.log(resul)
    //     return resul[k-1];
    // };
      
    const sortArray = function (arr) {
        // TODO: 여기에 코드를 작성합니다.
        if (arr.length < 2) {
            return arr;
        }
        const pivot = [arr[0]];
        const left = [];
        const right = [];
        
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i] <= pivot) left.push(arr[i]);
            else right.push(arr[i]);     
        }
        //return arr;
        return [ ...sortArray(left), ...pivot ,...sortArray(right)];
    };
    
    const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
        // TODO: 여기에 코드를 작성합니다.
        let arrsize1 = arr1.length,
            arrsize2 = arr2.length;
    
    
    
        return arr;
    };
    
    let arr1 = [1, 4, 8, 10];
    let arr2 = [2, 3, 5, 9];
    let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
    console.log(result); // --> 8
    
    arr1 = [1, 1, 2, 10];
    arr2 = [3, 3];
    result = getItemFromTwoSortedArrays(arr1, arr2, 4);
    console.log(result); // --> 3
    

    // TODO : add coding 