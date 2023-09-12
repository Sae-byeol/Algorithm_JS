// 1697 - 숨바꼭질
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split(" ");
const [from, to] = input.map(Number);

//dfs로 접근할 경우 x-1 -> x+1 -> x-1 을 비효율적으로 반복하게 되면서 stack 초과
//따라서 bfs로 그래프를 이동하는 최단거리를 구해보기.

let visited = Array(100001).fill(0);
const queue = [[from, 0]]; // 큐 초기값

const bfs = () => {
  while (queue.length) {
    const [cur, sec] = queue.shift();
    const move = [cur + 1, cur - 1, cur * 2]; //그래프 이동 좌표

    if (visited[cur] === 1) {
      //현재 위치 방문 여부 확인
      continue;
    }
    if (cur === to) {
      return sec; //정답
    }
    visited[cur] = 1; //방문 체크

    for (const i of move) {
      if (visited[i] !== 1 && i >= 0 && i <= 100000) {
        queue.push([i, sec + 1]);
      }
    }
  }
};
console.log(bfs());
