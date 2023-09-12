// 14716 - 현수막
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const banner = input.map((v) => v.split(" ").map(Number));
const [row, col] = banner.shift(); //shift(): 배열의 앞에서부터 자름
// row: 8, col: 19

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

//각 점마다 탐색돌리는 함수
const dfs = (x, y) => {
  for (let i = 0; i < 8; i++) {
    const _x = x + dir[i][0];
    const _y = y + dir[i][1];
    //조건문 쓸 때 주의할 점: _x, _y가 0보다 크거나 같은지 확인하는 조건이 banner[_x][_y] === 1 확인보다 선행되어야 런타임 에러가 안난다.
    if (_x >= 0 && _x < row && _y >= 0 && _y < col && banner[_x][_y] === 1) {
      //1 발견 => 방문처리 (0으로 만들기) + 뻗어나가기(재귀)
      banner[_x][_y] = 0;
      dfs(_x, _y);
    }
  }
};

let answer = 0;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (banner[i][j] === 1) {
      //1을 발견하면 dfs 시작
      banner[i][j] = 0;
      answer++;
      dfs(i, j);
    }
  }
}

console.log(answer);
