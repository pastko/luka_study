/**
 * 
 * 
 * 
function solution(n, k, cmd) {
    let answer = Array.fill(n,"O");
    let currentk = k;
    let listcmd = [];
    let delelement = [];
    for(let i = 0 ; i < n ; ++i)
    {
        listcmd.push({ "numb" : i , "key":"A"+i})
    }   
    let copy_listcmd = listcmd.slice();

    cmd.forEach(element => {
        let cm = element.split("");
        let siz = cmd.length;
        console.log(cm);
        console.log(currentk);
        if( cm[0] === "D")
        {
            currentk += parseInt(cm[2]);
        }
        if( cm[0] === "U")
        {
            currentk -= parseInt(cm[2]);
        }
        if( cm[0] === "C")
        {
            delelement.push(listcmd[currentk]);
            listcmd.splice(currentk,1);
            if(currentk === (siz-1))
                currentk--;
        }
        if( cm[0] === "Z")
        {
            let del = delelement.pop();
            listcmd.splice(del.numb,0,del);
        }        
        console.log(listcmd);
    });

    copy_listcmd.forEach(ele =>{
        if( listcmd.some(v=> v.key === ele.key) )
        {
            answer.push("O");
        }
        else
            answer.push("X");
    })

    return answer.join();
}
 * 
 * 
 * 
 * 
*/
/*

function solution(n, k, cmd) {
    let answer = [];
    let currentk = k;
    let delelement = [];
    
    for(let i = 0 ; i < n ; ++i)
    {
        answer.push({ "key" : i,  "live" : "O" })
    }   
    let siz = answer.length;
    cmd.forEach(element => {        
        console.log(currentk);
        console.log(element);
        console.log(siz);
        if( element[0] === "D")
        {
            currentk += parseInt(element[2]);
            if( answer[currentk].live === "X" ) currentk++;
        }
        if( element[0] === "U")
        {
            currentk -= parseInt(element[2]);
            if( answer[currentk].live === "X" ) currentk--;
        }
        if( element[0] === "C")
        {
            delelement.push(answer[currentk]);
            answer[currentk].live = "X";

            if(currentk === (siz-1)){
                currentk--;
            }
            else{
                currentk++;
            }
            siz--
        }
        if( element[0] === "Z")
        {
            let del = delelement.pop();
            answer[del.key].live = "O";
            
        } console.log(answer);       
    });
    
        
    return answer.map(val=>val.live).join("");
}

*/
function solution(n, k, cmd) {
    let answer = []
    let currentk = k;
    let listcmd = [];
    let delelement = [];
    for(let i = 0 ; i < n ; ++i)
    {
        listcmd.push({ "key" : i, "name" : "A" + i})
    }   
    let copy_listcmd = listcmd.slice();

    cmd.forEach(element => {
        let siz = listcmd.length;
        console.log(currentk);
        console.log(element);
        console.log(siz);
        if( element[0] === "D")
        {
            currentk += parseInt(element[2]);
        }
        if( element[0] === "U")
        {
            currentk -= parseInt(element[2]);
        }
        if( element[0] === "C")
        {
            delelement.push(listcmd[currentk]);
            listcmd.splice(currentk,1);
            if(currentk === (siz-1))
                currentk--;
        }
        if( element[0] === "Z")
        {
            let del = delelement.pop();
            listcmd.splice(del.key,0,del);
            if(del.key < currentk) currentk++;
            listcmd.sort((a,b)=>a.key - b.key);
        }        
        console.log(listcmd);
    });

    copy_listcmd.forEach(ele =>{
        if( listcmd.some(v=> v.key === ele.key) )
        {
            answer.push("O");
        }
        else
            answer.push("X");
    })

    return answer.join("");
}

/*
function solution(n, k, cmd) {
    let answer = Array(n).fill("O");
    let currentk = k;
    let siz = answer.length -1 ;
    let delelement =[];
    cmd.forEach(element => {        
        console.log(currentk);
        console.log(siz);
        console.log(element);
        console.log(answer);
        console.log("------")
        if( element[0] === "D")
        {
            currentk += parseInt(element[2]);
            if(answer[currentk] == "X"){
                if( answer[currentk+1] === "X" ) currentk = answer.indexof("O",currentk + 1) + 1;
                else currentk++;
            }
        }
        if( element[0] === "U")
        {
            currentk -= parseInt(element[2]);
            if( answer[currentk] == "X"){
                if( answer[currentk-1] === "X" ) currentk = siz - answer.reverse().indexOf("O",siz-currentk + 1);
                else currentk--;
            }
        }
        if( element[0] === "C")
        {
            delelement.push(currentk);
            answer[currentk] = "X";

            if(currentk === (siz-1)){
                if( answer[currentk-1] === "X") currentk = siz - answer.reverse().indexOf("O",siz-currentk + 1);
                else currentk--;
            }
            else{
                currentk++;
            }
        }
        if( element[0] === "Z")
        {
            let del = delelement.pop();
            answer[del] = "O";            
        }        
        console.log(currentk);
        console.log(siz);
        console.log(answer);
        console.log("===========")
    });
        
    
    return answer.join("");
}
*/
/*
[ o o x x o o]
  0 1 2 3 4 5
*/
/**
 * 
 * main core
 * 
 * 
 */


let num1 = { "n": 8 , "k": 2 , "cmd": ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]	 }
let num2= { "n" : 8 , "k": 2, "cmd": ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]}
let num3 = { "n" : 100000 , "k": 2, "cmd": ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C","C","C","C","C","C","C"]}

console.log(solution(num2.n,num2.k,num2.cmd));
