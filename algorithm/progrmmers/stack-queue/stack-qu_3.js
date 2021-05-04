/***
 * 
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	[]	[]	[7,4,5,6]
1~2	[]	[7]	[4,5,6]
3	[7]	[4]	[5,6]
4	[7]	[4,5]	[6]
5	[7,4]	[5]	[6]
6~7	[7,4,5]	[6]	[]
8	[7,4,5,6]	[]	[]
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.
입출력 예
bridge_length	weight	truck_weights	return
2	10	[7,4,5,6]	8
100	100	[10]	101
100	100	[10,10,10,10,10,10,10,10,10,10] 

 * 
 * 
 *  */



function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let trucks = truck_weights;
    let flag = true;
    let bridge_sizeOver = 0;
    let working = [];
    let pass = [];

    do  {        
       
        working.forEach((val, index) => {
            val.length--;
            if (val.length === 0) {
                bridge_sizeOver -= val.truck;
                pass.push(index);
            }            
        });
        //console.log("pass : " + pass.length);
        pass.forEach((v)=>working.splice(pass.shift(), 1));

        if (trucks.length > 0) {
            let weigh = trucks.shift();
            if (bridge_sizeOver + weigh <= weight) {
                working.push({ truck: weigh, length: bridge_length });
                bridge_sizeOver += weigh;
            }
            else
                trucks.unshift(weigh);
        }

        answer++;
        if(trucks.length === 0 && working.length === 0 )
        {
            flag = false;
        }

    }while(flag)

    return answer;
}


/**
 * 
 * main core
 * 
 * 
 */
 let num1 = { "legth" : 2 , "weight":10 , "truck" : [7,4,5,6] };
 let num2 = { "legth" : 100 , "weight":100 , "truck" : [10] };
 let num3 = { "legth" : 100 , "weight":100 , "truck" : [10,10,10,10,10,10,10,10,10,10]  };

console.log(solution(num2.legth,num2.weight,num2.truck));




/****
 * 
 * another problem solving
 * 
 *  
 *  반복문의 반복 횟수를 줄임으로서 퍼포먼스 향상 
 * 
 */

 function solution(bridge_length, weight, truck_weights) {
   // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
   let time = 0, qu = [[0, 0]], weightOnBridge = 0;
 
   // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
   while (qu.length > 0 || truck_weights.length > 0) {
     // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
     //    다리 위 트럭 무게 합에서 빼준다.
     if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];
 
     if (weightOnBridge + truck_weights[0] <= weight) {
       // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
       //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
       weightOnBridge += truck_weights[0];
       qu.push([truck_weights.shift(), time + bridge_length]);
     } else {
       // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
       //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
       //    참고: if 밖에서 1 더하기 때문에 -1 해줌
       if (qu[0]) time = qu[0][1] - 1;
     }
     // 시간 업데이트 해준다.
     time++;
   }
   return time;
 }