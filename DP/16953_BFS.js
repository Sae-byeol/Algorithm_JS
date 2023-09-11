// 16953 - A->B (BFS 풀이)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split(" ");
const [from, to] = input.map(Number);

const queue = [from, 1];

const dfs = () => {
  while (queue.length) {
    const num = queue.shift();
    const cnt = queue.shift();

    if (num === to) {
      return cnt;
    }
    if (num * 2 <= to) {
      queue.push(num * 2, cnt + 1);
    }
    if (Number(String(num) + 1) <= to) {
      queue.push(Number(String(num) + 1), cnt + 1);
    }
  }
  return -1;
};

console.log(dfs());
