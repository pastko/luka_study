// DataStructure & Algorithm 
// HACK: 16_[DP] 금고를 털어라

function ocean(target, type) {
    let result = 0;
    let dp = Array(target+1).fill(0);
    dp[0] = 1;
    type.forEach(element => {
        for(let i = element ; i< target+1 ; ++i){
            dp[i] += dp[i-element];
            console.table(dp);
        }
    });
    return dp[target];
}

// let solve2 = (N) => {
//     let dp = new Array(N+1).fill(0), i, j, k; 
    
//     for (i = 1; i <= N - 1; i++) { 
//         for (j = N; j > i; j--) for (k = j - i; k > 1; k -= i) dp[j] += dp[k]; 
//         for (j = i + 1; j <= N; j++) dp[j]++; 
//     } 
//     console.log("Ans = %d\n", dp[N]);
// }
// let out = solve2(5);
// console.log(out);

// let output = ocean(50, [10, 20, 50]);
// console.log(output); // 4

// output = ocean(100, [10, 20, 50]);
// console.log(output); // 10

output = ocean(30, [5, 6, 7]);
console.log(output); // 4