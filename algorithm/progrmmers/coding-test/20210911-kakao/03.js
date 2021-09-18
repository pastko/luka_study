// test 3
// HACK: 


function solution(fees, records) {
    let answer = [];
    let numbers = [];
    let splitRecord =[];
    let res = {};

    records.map(e=>{
        let spl = e.split(' ');
        splitRecord.push(spl);
        numbers.push(spl[1]);
    })
    splitRecord.sort((a,b)=>a[1]-b[1])
    numbers = [...(new Set(numbers))];
    numbers.sort();
    
    numbers.forEach(numb=>{
        let work = [];
        let duringTime = 0;
        splitRecord.filter(e=>e[1]===numb).forEach(data=>{
            // console.log(data);

            if(data[2]==='IN') work.push(data[0].split(':'));
            if(data[2]==='OUT'){
                let inTime = work.pop();
                let outTime = data[0].split(':');
                duringTime += ((outTime[0]-inTime[0])*60) + ((outTime[1]-inTime[1]));
            }
            // console.log(duringTime);
        });
        if(work.length != 0)
        {
            let inTime = work.pop();
            let outTime = '23:59'.split(':');
            duringTime += ((outTime[0]-inTime[0])*60) + ((outTime[1]-inTime[1]));
        }
        
        answer.push(duringTime);
    });
    // console.log(answer);
   
    return answer.map(e=>{
        if(e > fees[0] ){
            return fees[1] + (Math.ceil((e - fees[0]) / fees[2]) * fees[3]);
        }
        else
            return fees[1];
    });
}


let output = solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]);
console.log(output);

output = solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]);
console.log(output);


output = solution([1, 461, 1, 10], ["00:00 1234 IN"]);
console.log(output);