//2210 - 숫자판 점프
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let banner = input.map((v) => v.split(" "));

//이동할 방향
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const answer = new Set();

const dfs = (str, x, y) => {
  //인접한 방향 이동하면서 숫자 이어붙이기
  if (str.length === 6) {
    return answer.add(str);
  }
  for (let i = 0; i < 4; i++) {
    const _x = x + dir[i][0];
    const _y = y + dir[i][1];
    if (_x >= 0 && _y >= 0 && _x < 5 && _y < 5) {
      dfs(str + banner[_x][_y], _x, _y);
    }
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(banner[i][j], i, j);
  }
}
console.log(answer.size);
