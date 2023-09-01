// 11722 - 가장 긴 감소하는 부분 수열
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");

let arrLength = Number(input[0]);
let arr = input[1].split(" ").map((v) => Number(v));

let dp = new Array(arrLength);

for (let i = 0; i < arrLength; i++) {
  //dp[i] 채우기
  let maxDp = 0;
  for (let j = 0; j < i; j++) {
    //arr[i]의 앞쪽 원소들 탐색
    if (arr[j] > arr[i] && dp[j] > maxDp) {
      //maxDp 갱신
      maxDp = dp[j];
    }
  }
  dp[i] = maxDp + 1;
}

console.log(Math.max(...dp));
