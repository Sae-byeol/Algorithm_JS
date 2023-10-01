//9655 - 돌게임
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim();

const func = () => {
  if (input % 2 === 0) {
    return "CY";
  } else {
    return "SK";
  }
};
console.log(func());
