/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/
function solution(arr, processes) {
    let answer = [];
    let stay = [];
    let work = []; 
    let time = 0;
    let sendtime =0;
    processes = processes.map(e=>{
        e = e.split(" ")
        e[1] = Number(e[1]);
        e[2] = Number(e[2]);
        e[3] = Number(e[3]);
        e[4] = Number(e[4]);
        return e;
    });

    while((processes.length || work.length || stay.length ) > 0){
        time++;
        console.log(time+" : "+sendtime);
        if(processes.length !=0 && processes[0][1] === time){
            if(work.length === 0){
                if(stay.length === 0){
                    work.push(processes.shift());
                }else{
                    stay.push(processes.shift());
                    let idx = stay.findIndex(e=>e[0]==='write');
                    if(idx > 0){
                        work.push(stay[idx]);
                        stay.splice(idx,1);
                    }else{
                        work.push(stay.shift());
                    }
                }
            }else{
                if(work[0][0] === processes[0][0] && work[0][0] === 'read' && stay.length === 0){
                    work.push(processes.shift());
                }else{
                    stay.push(processes.shift());
                }
            }
        }else{
            if(stay.length > 0){
                if(work.length === 0){
                    let idx = stay.findIndex(e=>e[0]==='write');
                    if(idx >= 0){
                        work.push(stay[idx]);
                        stay.splice(idx,1);
                    }else{
                        work = stay;
                        stay = [];
                    }
                }else{
                    if(work[0][0]==='read' && stay[0][0] ==='read')
                        work.push(stay.shift());
                }
            }
        } 

        console.log(`front arr : ${arr},  
            work : ${work},
            stay : ${stay},
            process : ${processes}`);

        work.forEach(e=>e[2]--);

        if(work.length === 0 && stay.length === 0) sendtime++;


    
        if(work.length != 0){
            let delet = []


            if(work[0][2] === 0){
                work.forEach((res,idx)=>{
                    let tmp = '';
                    if(res[2] <= 0) {
                        if(res[0] ==='read'){
                            console.log("read")
                            for(i = res[3] ; i <= res[4] ; i++)
                                tmp += arr[i];
                            console.log(tmp);
                            answer.push(tmp);
                        }
            
                        if(res[0] ==='write'){
                            console.log("write")
                            for(i = res[3] ; i <= res[4] ; i++)
                                arr[i] = res[5];
                        }
                        delet.push(idx)
                    };
                })
            }
            
            console.log("delete : ["+work+"]:["+delet+"]");

            delet.forEach(res=>{
                if( res > 0){ 
                    work.splice(work.findIndex(e=>e[2] === 0),1)
                }
                if( res === 0 ){
                    work.shift();
                }
            })
        };
            

            console.log(`back arr : ${arr},  
            work : ${work},
            stay : ${stay},
            process : ${processes}`);
    }
    answer.push((time-sendtime).toString());


    return answer;
}







/**
 * 
 * main core
 * 
 * 
 */

/** 
 * values
 * */ 
let arr = ["1","2","4","3","3","4","1","5"];
let processes = ["read 1 3 1 2","read 2 6 4 7","write 4 3 3 5 2","read 5 2 2 5","write 6 1 3 3 9", "read 9 1 0 7"]
// ["24","3415","4922","12492215","13"]
let arr1 = ["1","1","1","1","1","1","1"]
let processes1 = ["write 1 12 1 5 8","read 2 3 0 2","read 5 5 1 2","read 7 5 2 5","write 13 4 0 1 3","write 19 3 3 5 5","read 30 4 0 6","read 32 3 1 5"]
// ["338","38","8888","3385551","38555","29"]


/**
 * runing
 */
// console.log(solution(arr,processes));
console.log(solution(arr1,processes1));
