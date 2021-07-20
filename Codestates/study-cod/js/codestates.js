/// 01 번

function getcombine(arr, select)
{
    let results = [];    
    if( select === 1 ) return arr.map(e=>[e]);

    for(let i = 0 ; i < arr.length; ++i)
    {
        const rest = arr.filter((e)=>e!==arr[i]);
        const combinations = getcombine(rest, select - 1);
        const attached  = combinations.map((rest) => [arr[i], ...rest]);
        results.push(...attached); 
    }
    return results;
}


function getcombine(arr) {
    

    let firstFlag   = add[0];
    let results     = [];
    let filterrFlga = arr.filter((e)=>e!==firstFlag);



}


function orderOfPresentation (N, K) 
{
    // TODO: 여기에 코드를 작성합니다.
    let oderArray   = [];
    let countArray  = 0;
    for(let i = 1 ; i<=N ; ++i)
    {
        oderArray.push(i);
    }
    let combinArray = getcombine(oderArray, N );

    
    for(let i = 0 ; i<=combinArray.length ; ++i)
    {
        if(arrayEquals(K,combinArray[i]))
            countArray = i;
    }
    return countArray;
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

//console.log(orderOfPresentation(5, [1, 3, 2, 4, 5]));
console.log(orderOfPresentation(3, [1, 3, 2]));





function fibonacci(num) {
    
    if(num ===  0) return 0
  if(num ===  1) return 1

  return fibonacci(num-1) + fibonacci(num -2)
}
// console.log(fibonacci(9));


function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
  
    if( giftBox.length === 0 || giftBox[0] === '' ) return false;
    if( giftBox[0] === wish  )  return true;
    
    console.log(giftBox);
  
  
    if( Array.isArray( giftBox[0])) {
      return unpackGiftbox(giftBox[0],wish) || unpackGiftbox(giftBox.slice(1),wish)
    }
    else return unpackGiftbox(giftBox.slice(1),wish)
}



function unpackGiftbox1(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    console.log('callnumm');
    if( giftBox.length === 0 || giftBox[0] === '' ) return false;
    if( giftBox[0] === wish  )  return true;
    
   return giftBox.reduce((acc,res)=>{
       console.log(acc,res);
       if (Array.isArray(res)){ return acc || unpackGiftbox1(res,wish);}
       else if(res === wish){ return true;}
       else { return false || acc}
   },false)
}


const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];
const giftBox2 = [
    'airmax97',
    'ps4',
    ['wallet', 'postcard'],
    ['cookie', 'ohyes', 'money'],
    'iphone',
  ];
 //console.log(unpackGiftbox1(giftBox2, 'money'));
//console.log(giftBox2.includes('cookie'));



function flattenArr(arr) {
    console.log('1');
    // TODO: 여기에 코드를 작성합니다.
    if( arr.length === 0)return [];
    if( !Array.isArray(arr)) return [arr];
    
    return [ ...flattenArr(arr[0]), ...flattenArr(arr.slice(1)) ];
}

function flattenArr(arr) {
    console.log('1');
    // TODO: 여기에 코드를 작성합니다.
    if( arr.length === 0)return [];
    if( !Array.isArray(arr)) return [arr];

    return arr.reduce((acc,res)=>{
        if (Array.isArray(res)){ return acc.concat(flattenArr(res));}
        else { return [...acc, res]}
    },[]);
}

// console.log(flattenArr( [[1], 2, [3, 4], 5]));

