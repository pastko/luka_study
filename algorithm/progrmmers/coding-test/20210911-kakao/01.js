// test 01 
// 

function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0);
    let splitreport = [];
    let picked = Array(id_list.length).fill(0);
    let key = {};
    id_list.map((e,idx)=>{
        key[e] = idx;
    })
    console.log(key)
    report = [...(new Set(report))];
    console.log(report);

    for(let repo of report){
        splitreport.push(repo.split(' '));
    }
    console.log(splitreport);

    splitreport.map(e=>{
        picked[key[e[1]]]++;
    })

    console.log(`picked: ${picked}`)

    // 신고 누적 카운트 
    // 정지 처리
    // 정지 메일 카운트
    let banuser = [];
    picked.forEach((e,idx)=>{
        if(e>=k){
            banuser.push(id_list[idx]);
        }
    })
    console.log(banuser);
    splitreport.forEach(e=>{
        if(banuser.includes(e[1])){
           answer[key[e[0]]]++;
        } 
    })

    return answer;
}












                    //   0        1        2        3        0    1       2      1       1     3   0     3       2    0   
let output = solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"] ,2);
console.log(output); //  => 2 ,1 ,1 0

output = solution(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"] ,3);
console.log(output);//   => 0 , 0