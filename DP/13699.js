//13699 - 점화식
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString();

let num = Number(input);

let dp = new Array(num + 1);

dp[0] = 1n;
for (let i = 0; i < num; i++) {
  let n = i + 1;
  let sum = 0n;
  for (let j = n - 1; j >= 0; j--) {
    sum += BigInt(dp[j]) * BigInt(dp[n - 1 - j]);
  }
  dp[n] = sum;
}
console.log(dp[num].toString());
