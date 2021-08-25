// DataStructure & Algorithm 
// HACK: 20_(Advanced) [멱집합] 집밥이 그리워


function missHouseMeal1(sideDishes) {
    let subSets = [];


    console.log(sideDishes);

    function pickOrNot(i, subset) {
        if (i === sideDishes.length - 1) {
            subSets.push(subset[i])
            return;
        }

        // 재귀
        // i번째 문자를 포함하지 않는 경우
        pickOrNot(i + 1, subset);
        // i번째 문자를 포함하는 경우
        pickOrNot(i + 1, [ subset[i] , ...subSets]);
    };

    pickOrNot(0, sideDishes);

    return subSets.sort();
}

const missHouseMeal = function (arr) {
    let flag = new Array(arr.length).fill(false);
    const subSets = [];
    const subSet = function DFS(depth) { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
        if (depth === arr.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
            const subSet = arr.filter((value, index) => flag[index]); // 해당 flag true => 부분집합 포함
            subSets.push(subSet); // 부분집합들을 담는 배열에 push
            return;
        }
        flag[depth] = true;
        subSet(depth + 1);
        flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
        subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    }

    subSet(0); // depth 0 부터 시작
    return subSets.sort();
}



let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/

output = missHouseMeal(['pasta', 'oysterSoup', 'beefRibs', 'tteokbokki']);
console.log(output);


const dfs = (start, arr) => {
    
    for (let i = start; i < nums.length; i++) {
        dfs(i + 1, [...arr, nums[i]]);
    }
  };