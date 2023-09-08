// 16953 - A->B
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split(" ");
const [from, to] = input.map(Number);

let answer = -1;
const dfs = (cnt, num) => {
  if (num > to) {
    return;
  }
  if (num === to) {
    answer = cnt;
    return;
  }
  dfs(cnt + 1, num * 2);
  dfs(cnt + 1, Number(String(num) + 1));
};
dfs(1, from);
console.log(answer);
