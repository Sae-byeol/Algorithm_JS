//23971 - ZOAC 4
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split(" ");

const [col, row, num1, num2] = input.map( Number);

const func = ()=>{
  const x = Math.ceil(row/(num1+1));
  const y = Math.ceil(col / (num2+1))

  console.log(x*y);
}
func();
