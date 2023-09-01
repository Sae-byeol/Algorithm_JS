//9095 - 1,2,3 더하기

let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((v) => Number(v));

let inputNum = input[0];
let dp = new Array(11).fill(0);
let max = input[inputNum];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
