function solution(id_list, k) {
    let answer = {};
    id_list.forEach(element => {
        let res = [...(new Set(element.split(' ')))];
        res.forEach(e=>{
            answer[e] = (answer[e]|0) + 1;
        })
    }); 
    let result = 0;
    for(let el in answer){
        if( answer[el] >= k )
            result += k
        else
            result += answer[el]
    }

    return result;
}




let output = solution(["A B C D", "A D", "A B D", "B D"],2) // 7
console.log(output)
output = solution(["JAY", "JAY ELLE JAY MAY", "MAY ELLE MAY", "ELLE MAY", "ELLE ELLE ELLE", "MAY"],	3)//	8
console.log(output)