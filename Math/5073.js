// 5073 - 삼각형과 세변
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = input.map((v) => v.split(" ").map(Number));

const answer =[];
const func =() =>{
   let index =0;
    while (arr[index][0] !== 0){
        const tri = arr[index];
        index++;
        tri.sort((a, b)=> b-a);
        if (tri[0] >= tri[1]+tri[2]){
            answer.push('Invalid')
            continue;
        }
        if (tri[0] == tri[1] && tri[1] == tri[2]){
            answer.push('Equilateral')
            continue;
        }
        if (tri[0] == tri[1] || tri[1] == tri[2]){
            answer.push('Isosceles')
            continue
        }
        if (tri[0]!= tri[1] && tri[1] !== tri[2]){
            answer.push('Scalene')
            continue
        }
        
    }

    console.log(answer.join('\n'))
}
func()
