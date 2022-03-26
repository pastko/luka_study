/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/



function solution(s) {
    let answer = 0;
    let keys = {
        a : {
            ele : '',
            join : 0,
        },
        b : {
            ele : '',
            join : 0,
        },
        c : {
            ele : '',
            join : 0,
        },
        d : {
            ele : '',
            join : 0,
        }
    };

    s.forEach(ele => {
        keys['a'].ele = ((keys['a'].join === 1)&&(ele[0] === (keys['a'].ele))) || (ele[0] === 'a') ? -1 : ele[0] ;
        keys['b'].ele = ((keys['b'].join === 1)&&(ele[1] === (keys['b'].ele))) || (ele[1] === 'b') ? -1 : ele[1] ;
        keys['c'].ele = ((keys['c'].join === 1)&&(ele[2] === (keys['c'].ele))) || (ele[2] === 'c') ? -1 : ele[2] ;
        keys['d'].ele = ((keys['d'].join === 1)&&(ele[3] === (keys['d'].ele))) || (ele[3] === 'd') ? -1 : ele[3] ; 
        keys = findJoin(keys);

        answer += Object.values(keys).filter(e=>e.ele===-1).length > 0 ? Object.values(keys).filter(e=>e.ele===-1).length : 0;
            

        console.log(keys);
        console.log("answer : ", answer)
    });


    return answer
}

function zeroJoins(obj){
    if(obj===null) return null;
    obj['a'].join =0;
    obj['b'].join =0;
    obj['c'].join =0;
    obj['d'].join =0;
    return obj;
}

function findJoin(obj){
    if(obj===null) return null;
    obj = zeroJoins(obj);

    if( obj['a'].ele !== -1){
        if('a' === obj[obj['a'].ele].ele)
        {
            obj['a'].join = 1;
            obj[obj['a'].ele].join = 1;
        }
    }
    if( obj['b'].ele !== -1){
        if('b' === obj[obj['b'].ele].ele)
        {
            obj['b'].join = 1;
            obj[obj['b'].ele].join = 1;
        }
    }
    if( obj['c'].ele !== -1){
        if('c' === obj[obj['c'].ele].ele)
        {
            obj['c'].join = 1;
            obj[obj['c'].ele].join = 1;
        }
    }
    if( obj['d'].ele !== -1){
        if('d' === obj[obj['d'].ele].ele)
        {
            obj['d'].join = 1;
            obj[obj['d'].ele].join = 1;
        }
    }  

    return obj
}




/**
 * 
 * values
 * 
 */
let num1 = [["b", "a", "a", "d"], ["b", "c", "a", "c"], ["b", "a", "d", "c"]];	//1478
let num2 = [["b", "a", "d", "c"],["b", "a", "c", "d"]];//	234567
let num3 = [["b", "a", "d", "c"],["d", "c", "b", "a"],["b", "a", "d", "c"]]	//234567
let num4 = [["d", "a", "a", "a"],["c", "a", "a", "a"],["b", "a", "a", "a"]]	//123
/**
 * 
 * main core
 * 
 * 
 */

// console.log(solution(num1));
// console.log(solution(num2));
// console.log(solution(num3));
console.log(solution(num4));

