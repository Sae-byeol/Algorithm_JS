//11052 - 카드 구매하기

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0];
let arr = input[1].split(" ");

//DP[n] = Math.max(arr[n] , DP[n-i]+c[i])
//DP[n] 값을 만들어 저장하는 함수
let Dp = new Array(num + 1); //[0,0,0,0]
Dp[0] = 0;

for (let i = 1; i <= num; i++) {
  //각 Dp 원소 값 넣어주기
  let max = 0;
  for (let j = 0; j < i; j++) {
    let n = Number(arr[j]) + Number(Dp[i - j - 1]);
    if (n >= max) {
      max = n;
      Dp[i] = n;
    }
  }
}

console.log(Dp[num]);
