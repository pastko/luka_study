/*
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.
입출력 예
genres	plays	return
["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]
입출력 예 설명
classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

고유 번호 3: 800회 재생
고유 번호 0: 500회 재생
고유 번호 2: 150회 재생

pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

고유 번호 4: 2,500회 재생
고유 번호 1: 600회 재생
따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.

※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.

*/

/***
 * 장르 우선위  정렬
 * 해당 장르에서의 플레순위  정렬
 * 
 

consol.log(solution(['A', 'B', 'A', 'A', 'B'], [ 500, 600, 150, 800, 2500]) == [4, 1, 3, 0])
consol.log(solution(['B', 'A'], [500, 600]) == [1, 0])
consol.log(solution(['B'], [500]) == [0])
consol.log(solution(['B', 'A'], [600, 500]) == [0, 1])
consol.log(solution(['A', 'B'], [600, 500]) == [0, 1])
consol.log(solution(['A', 'A', 'B'], [600, 500, 300]) == [0, 1, 2])
consol.log(solution(['A', 'B', 'A'], [600, 500, 600]) == [0, 2, 1])
consol.log(solution(['A', 'B', 'A'], [600, 500, 700]) == [2, 0, 1])
consol.log(solution(['A', 'A', 'A'], [600, 500, 700]) == [2, 0])
consol.log(solution(['A', 'A', 'A'], [3, 2, 1]) == [0, 1])
consol.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]) == [4, 1, 3, 0])
consol.log(solution(['classic'], [2500]) == [0])
consol.log(solution(['A', 'B', 'C'], [1, 2, 3]) == [2, 1, 0])
consol.log(solution(['A', 'B', 'C', 'D'], [1, 2, 3, 1]) == [2, 1, 0, 3])
consol.log(solution(['A', 'A', 'B', 'A'], [2, 2, 2, 3]) == [3, 0, 2])
consol.log(solution(['A', 'A', 'B', 'A'], [5, 5, 6, 5]) == [0, 1, 2])
consol.log(solution(['A', 'A', 'B', 'A', 'B', 'B'], [5, 5, 6, 5, 7, 7]) == [4, 5, 0, 1])
*/


let genres  = ["classic", "pop", "classic", "classic", "pop"];
let plats   = [500, 600, 150, 800, 2500];


function solution1(genres, plays) {
    var answer = [];
    let genssum = new Map();            // 장르별 재생횟수의 총합
    let res =  new Map();               // 장르별 재생횟수  총합의 반전 map
    let counts_of_genres = new Map();   // 장르별 재생횟수
    let plat = new Map();               // 재생횟수 
    
    genres.forEach((element, index )=> {
        genssum.set( element,(genssum.get(element)|0)+plays[index]);                     // 장르 총합
        if( !counts_of_genres.get(element)){ counts_of_genres.set(element, [ plays[index] ] );}
        else{ counts_of_genres.set(element, counts_of_genres.get(element).concat(plays[index]) );}  // 각 장르별 재생 회수
    });
    console.log(counts_of_genres);

    genssum.forEach((values,key)=>{   //  장르별 재생 횟수총합  반전 map
        res.set(values,key);
    })
    
    let flag = 0.1;
    plays.forEach((name,index)=>{   // 재생횟수별 고유번호 반전
        if(plat.get(name) >= 0){ plat.set((name+flag),index); flag = flag + 0.1; }
        else
            plat.set(name,index);
    });
    console.log(plat);
    counts_of_genres.forEach(res =>{    //장르별 재생회수 정렬 ( 회수 높은 순 내림 차순 )
        res.sort((a,b)=>{ return b-a });
    })

    let rank_gens  = Array.from(genssum.values());  // 장르 랭킹
    rank_gens.sort((a,b)=>{ return b-a;});          // 랭킹 정렬 ( 1등 부터 내림차순 )
    
    rank_gens.forEach((val) =>
    {
        let size = (counts_of_genres.get(res.get(val)).length >= 2 ) ? 2 : counts_of_genres.get(res.get(val)).length;
        for(let i = 0 ; i < size ; ++i){
            //console.log(counts_of_genres.get(val)[i]);
            answer.push(plat.get(counts_of_genres.get(res.get(val))[i]));
        }
    })    

    return answer;
}

function solution(genres, plays) {
    var answer      = [];
    let genssum     = new Map();        // 장르별 재생횟수의 총합
    let sortplatcount ;                 // 정렬된 재생횟수별 고유번호  (내림차순) 
    let counts_of_genres = new Map();   // 장르별 고유번호
    let plat = new Map();               // 재생횟수 ,고유번호 Map
    
    plays.forEach((name,index)=>{   // 재생횟수, 고유번호 MAP형태로 변환
       plat.set(index,name);        
    });

    sortplatcount = new Map([...plat.entries()].sort((a, b) =>  b[1] - a[1] ));
    
    sortplatcount.forEach((values, key) =>{
        //genres[key]  // gens
        genssum.set( genres[key] ,(genssum.get(genres[key])|0)+values); 
        if( !counts_of_genres.get(genres[key]) ){ counts_of_genres.set(genres[key], [ key ] ) }
        else counts_of_genres.set(genres[key], counts_of_genres.get(genres[key]).concat( key ) )
    })

    let rank_gens  = new Map([...genssum.entries()].sort((a, b) =>  b[1] - a[1] ));
    //console.log(rank_gens);   
    
    
    rank_gens.forEach((val, key) =>
    {
        let size = (counts_of_genres.get(key).length >= 2 ) ? 2 : counts_of_genres.get(key).length;
        for(let i = 0 ; i < size ; ++i){
            //console.log(counts_of_genres.get(key)[i]);
            answer.push(counts_of_genres.get(key)[i]);
        }
    })

    return answer;
}


//console.log(solution(genres,plats));
/*
console.log(solution(['A', 'B', 'A', 'A', 'B'], [ 500, 600, 150, 800, 2500])); //  == [4, 1, 3, 0]
console.log(solution(['B', 'A'], [500, 600]));                                 //  == [1, 0]
console.log(solution(['B'], [500]));                                           //  == [0]
console.log(solution(['B', 'A'], [600, 500]));                                 //  == [0, 1]
console.log(solution(['A', 'B'], [600, 500]));                                 //  == [0, 1]
console.log(solution(['A', 'A', 'B'], [600, 500, 300]));                         // == [0, 1, 2]
console.log(solution(['A', 'B', 'A'], [600, 500, 600]));                         // == [0, 2, 1]

console.log(solution(['A', 'B', 'A'], [600, 500, 700]));                         // == [2, 0, 1]
console.log(solution(['A', 'A', 'A'], [600, 500, 700]));                        // == [2, 0]
console.log(solution(['A', 'A', 'A'], [3, 2, 1]));                              // == [0, 1]
console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));  //== [4, 1, 3, 0]
console.log(solution(['classic'], [2500]));                                     //  == [0]
console.log(solution(['A', 'B', 'C'], [1, 2, 3]))                               //  == [2, 1, 0]
console.log(solution(['A', 'B', 'C', 'D'], [1, 2, 3, 1]))                       //  == [2, 1, 0, 3]
console.log(solution(['A', 'A', 'B', 'A'], [2, 2, 2, 3]))                       //  == [3, 0, 2]
console.log(solution(['A', 'A', 'B', 'A'], [5, 5, 6, 5]))                       //  == [0, 1, 2]


console.log(solution(['A', 'A', 'B', 'A', 'B', 'B'], [5, 5, 6, 5, 7, 7]))       //  == [4, 5, 0, 1]
*/

function se (genres, plays)
{
    var dic = {};
    genres.forEach((t,i)=> {
        dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];        
    });

    var dupDic = {};
    let ex =  genres          
          .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
          .sort((a,b)=>{               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           });
           //.filter(t=>  {
            //   if(dupDic[t.genre] >= 2) return false;
            //   dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
            //   return true;
           // })
           //.map(t=> t.index);  

    return ex;
}

console.log(se(['A', 'A', 'B', 'A', 'B', 'B'], [5, 5, 6, 5, 7, 7]))       //  == [4, 5, 0, 1]


function solution(genres, plays) {
    const count = {};
    let answer = [];
    const acc = genres.reduce((a, c, i) => {
        debugger;
        count[c] ? count[c].push([i, plays[i]]) : count[c] = [[i, plays[i]]];
        return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
    }, new Map());

    [...acc].sort((a, b) => b[1] - a[1]).map(v => {
            answer = answer.concat(count[v[0]].sort((c, d)=>d[1]-c[1]).slice(0,2));
    });
    return answer.map(v=>v[0]);
}