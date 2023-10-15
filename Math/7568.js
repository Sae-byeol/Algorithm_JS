//7568 - 덩치
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const num = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

const func = () => {
  const rank = new Array(num).fill(0);
  for (let i = 0; i < num; i++) {
    const x = arr[i][0];
    const y = arr[i][1];
    let count = 0;
    arr.forEach((e) => {
      if (e[0] > x && e[1] > y) {
        count++;
      }
    });
    rank[i] = count + 1;
  }
  console.log(rank.join(" "));
};

func();
