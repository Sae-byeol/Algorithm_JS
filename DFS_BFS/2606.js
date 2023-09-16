let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const pointNum = Number(input.shift());
const lineNum = Number(input.shift());

const arr = input.map((v) => v.split(" ").map(Number));

//양방향 그래프 만들기
const graph=[...Array(pointNum + 1)].map(() => []);
for (let i=0; i<lineNum;i++){
    const [from, to] = arr[i]
    graph[from].push(to);
    graph[to].push(from);
}

let visited=Array(pointNum + 1).fill(0);
let count =0;
const dfs=(n)=>{
  if (!visited[n]){
    visited[n]=1;
    count++;
    for(i of graph[n]){
        dfs(i);
    }
  }
}

dfs(1);

console.log(count-1);
