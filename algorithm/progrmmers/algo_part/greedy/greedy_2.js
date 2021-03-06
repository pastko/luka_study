/**
 * 
 * 
 * 
 * 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동
예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.
입출력 예
name	return
"JEROEN"	56
"JAN"	23
 * 
 * 
 * 
 * 
*/


function solution(name) {
    
    let answer = 0;
    let rever = 0;
    let char = 'N';
    let splitName = name.split("");

    splitName.forEach(element => {
        
        if ( element === "A")                               { answer += 0;}
        else if (element === 'N')                           { answer += 13; }
        else if (element < 'N') { answer += Math.abs('A'.charCodeAt(0) - element.charCodeAt(0)); }
        else if (element > 'N') { answer += Math.abs('Z'.charCodeAt(0) - element.charCodeAt(0) + 1); }
        
        console.log(element+":"+answer)
        answer++;
    });answer--;

    
    for (let  i = 0, j = 0 , size =  splitName.length  ;; j++ , i = size - j){
        let element = splitName[i];        

        if ( element === "A")                               { rever += 0;}
        else if (element === 'N')                           { rever += 13; }
        else if (element.charCodeAt(0) < 'N'.charCodeAt(0)) { rever += Math.abs('A'.charCodeAt(0) - element.charCodeAt(0)); }
        else if (element.charCodeAt(0) > 'N'.charCodeAt(0)) { rever += Math.abs('Z'.charCodeAt(0) - element.charCodeAt(0) + 1); }       
        
        console.log(i + ":" +element +":"+rever);
        if(i === 1 ) {
            if(element === "A")
                rever--;

            break;
        }        
        rever++;        
    };
    
    console.log(answer +":"+ rever);
    return answer > rever ? rever : answer;
}

function solution1(name) {
    let answer = 0;
    let anflag = [];
    name.split("").map((e)=>{
        if(e === "A") anflag.push(0);
        else if (e === "N")                           { anflag.push(13); }
        else if (e.charCodeAt(0) < "N".charCodeAt(0)) { anflag.push(Math.abs('A'.charCodeAt(0) - e.charCodeAt(0))); }
        else if (e.charCodeAt(0) > "N".charCodeAt(0)) { anflag.push(Math.abs('Z'.charCodeAt(0) - e.charCodeAt(0) + 1)); }
        
    });

   let index = 0;
   let siz = anflag.length - 1
    while(true){
        answer += anflag[index];
        anflag[index] = 0;

        if(!anflag.some(e=>e>0))
            break;

        let right = calculation_right(anflag,index,siz)
        let left  = calculation_left(anflag,index,siz)  

        if( right > left )
        {
            if( index - left < 0)
                index = index+siz+1 - left;
            else
                index -= left;

            answer += left;
        }
        else
        {
            index = (index + right )%(siz+1);
            answer += right;
        }
        if(index<0)
            index = siz        
    }
    
    return answer;
}



function calculation_right(arrays,start,end)
{
    let a = 0;
    for (let  i = start + 1 , a = 1 ;; ++i , ++a){
        if( i > end ) 
            i = 0;
        
        if(arrays[i] !== 0)
        {
            return a;
        }
        if(i == start )
            return a;
    }
}


function calculation_left(arrays,start,end)
{    
    for (let  i = start - 1 , a = 1 ;; --i , ++a){
        if( i < 0 ) 
            i = end;
        
        if(arrays[i] !== 0)
        {
            return a;
        }
        if(i == start )
            return a;
    }
}


/**
 * 
 * main core
 * 
 * 
 */
 let num1 ="JEROEN";
 let num2 ="JAN";
 let num3 = "ABABAAAAABA";

//console.log(solution(num3));
console.log(solution2(num3));





/****
 * 
 * another problem solving
 * 
 * 
 * 
 * 
 */
 function solution2(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}