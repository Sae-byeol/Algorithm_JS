//2292 - 벌집
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim();

const endNumber = Number(input);

const func =()=>{
    let num =1;
    let i =1;
    while(num < endNumber){
        num = num + (6 * i);
        i++;
    }
    console.log(i);
}

func();
