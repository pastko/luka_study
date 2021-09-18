// toy 37_coinChange
// HACK : dp 잔돈 계산 

const coinChange = function (total, coins) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 0;
    let dp = Array(total + 1).fill(0);
    dp[0] = 1;
    coins.forEach(element => {
        for (let i = element; i < total + 1; ++i) {
            dp[i] += dp[i - element];
            // console.table(dp);
        }
    });
    return dp[total];
};




let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3

total = 4;
coins = [1, 2, 3];
output = coinChange(total, coins);
console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])