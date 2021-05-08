/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

class tnode{
    constructor(data, left, right)
    {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    showdata(){ return data }
}


function solution(k, num, links) {
    let answer = 0;
    let tree =[];
    for(let i = 0 ; i < num.length ; i++)
    {
        tree.push({ "id" : i, "data" : num[i], "left" : links[i][0], "right" : links[i][1]});
    }
    return tree;
}





/**
 * 
 * main core
 * 
 * 
 */


let num1 = {
    "k" : 3,
    "num" : [12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1],
    "link" : [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 5], [2, 10], [3, 0], [6, 1], [11, -1], [7, 4], [-1, -1], [-1, -1]]
}


console.log(solution(num1.k, num1.num , num1.link));
