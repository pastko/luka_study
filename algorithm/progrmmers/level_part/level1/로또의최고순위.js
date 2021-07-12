/***
 *   문제 명 :  로또의 최고 순위와 최저 순위
 * 
 * 
 * 
 *  */




/**
 * 
 * main core
 * 
 * 
 */

 function solution(lottos, win_nums) {
    let rank_score = [ 6, 6, 5, 4, 3, 2, 1 ];
    lottos.sort();
    win_nums.sort();
    let matchNumbers = lottos.filter((e)=> win_nums.some(a=>e === a)).length;
    let longNumbers  = lottos.filter(e=>e===0).length;
    

    return [ rank_score[matchNumbers+longNumbers] ,  rank_score[matchNumbers]];
}






/**
 * 
 * runing proc
 * 
 * 
 */

 let num1 = { 'lottos' : [44, 1, 0, 0, 31, 25] ,    'win_nums' :[31, 10, 45, 1, 6, 19]	    }   
 let num2 = { 'lottos' : [0, 0, 0, 0, 0, 0]	,       'win_nums' :[38, 19, 20, 40, 15, 25]	}
 let num3 = { 'lottos' : [45, 4, 35, 20, 3, 9]	,   'win_nums' :[20, 9, 3, 45, 4, 35]	    }

console.log(solution(num2.lottos,num2.win_nums));




/****
 * 
 * another problem solving
 * 
 *  
 *   
 * 
 */


array.forEach(element => {
    
});