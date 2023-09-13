//2667 - 단지 번호 붙이기
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const num = Number(input.shift());
const arr = input.map((v) => v.split("").map(Number));

let houseNumber = 1;
const dfs = (i, j) => {
  //상하좌우 이동
  const move = [
    [i, j - 1],
    [i - 1, j],
    [i, j + 1],
    [i + 1, j],
  ];
  arr[i][j] = 0; //방문 체크
  for (m of move) {
    if (
      m[0] >= 0 &&
      m[0] < num &&
      m[1] >= 0 &&
      m[1] < num &&
      arr[m[0]][m[1]] === 1
    ) {
      dfs(m[0], m[1]);
      houseNumber++;
    }
  }
};

let sizeArray = [];
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (arr[i][j] === 1) {
      dfs(i, j);
      sizeArray.push(houseNumber);
      houseNumber = 1;
    }
  }
}
sizeArray.sort((a, b) => a - b);
let answer = [sizeArray.length, ...sizeArray];
console.log(answer.join("\n"));
