// 14716 - 현수막 (BFS ver.)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const banner = input.map((v) => v.split(" ").map(Number));
const [row, col] = banner.shift();

const dir = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

const bfs = (r, c) => {
  const queue = [[r, c]];
  while (queue.length) {
    const [cx, cy] = queue.shift(); // 하나 빼내기
    for (let i = 0; i < 8; i++) {
      const _x = cx + dir[i][0];
      const _y = cy + dir[i][1];
      if (_x >= 0 && _y >= 0 && _x < row && _y < col && banner[_x][_y] === 1) {
        // 주변에서 1인 걸 찾으면
        // 방문처리
        banner[_x][_y] = 0;
        // 새로 bfs 돌리기
        queue.push(_x, _y);
      }
    }
  }
};

let answer = 0;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (banner[i][j] === 1) {
      banner[i][j] = 0;
      answer++;
      bfs(i, j);
    }
  }
}
console.log(answer);
