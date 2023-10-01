//1157 - 단어 공부
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().toUpperCase().split("");

const func = () => {
  const obj = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };

  input.forEach((char) => {
    obj[char] = obj[char] + 1;
  });

  let maxNum = 0;
  let maxKey = "";
  for (key in obj) {
    const num = obj[key];
    if (num > maxNum) {
      maxNum = num;
      maxKey = key;
    }
  }

  let cnt = 0;

  for (key in obj) {
    if (obj[key] == maxNum) {
      cnt++;
    }
  }
  if (cnt > 1) {
    console.log("?");
  } else {
    console.log(maxKey);
  }
};

func();
