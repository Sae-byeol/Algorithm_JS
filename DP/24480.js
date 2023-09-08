// 24480 - 알고리즘 수업 - 깊이우선탐색2
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

const graph = [...Array(N + 1)].map(() => []);
const visited = Array(N).fill(0);

let cnt = 1;

//무방향(양방향) 그래프 만들기
arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

// 내림차순으로 그래프 정렬
graph.map((v) => v.sort((a, b) => b - a));

//DFS
const dfs = (node) => {
  //방문여부 체크
  if (!visited[node - 1]) {
    visited[node - 1] = cnt;
    cnt++;
    // for ... in: 객체 순회하며 키 값 반환
    // for ... of: 배열 등 iterable한 자료구조 순회하며 각 요소 반환
    for (i of graph[node]) {
      dfs(i);
    }
  }
};

dfs(R);
console.log(visited.join("\n"));
