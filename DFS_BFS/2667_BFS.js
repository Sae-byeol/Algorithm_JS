//2667 - 단지 번호 붙이기 (BFS)

let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const num = Number(input.shift());
const arr = input.map((v) => v.split("").map(Number));

//상하좌우 인덱스
const move =[[-1, 0], [1,0], [0,-1], [0,1]]; 



const bfs=(x, y)=>{
    const queue=[[x,y]]
    let houseNumber =0;
    while(queue.length){
    const [curx, cury] = queue.shift(); //현재 좌표 꺼내오기
   houseNumber++;
   //이동: 1이면 큐에 삽입
    for (m of move){
        const _x = curx+m[0];
        const _y=cury+m[1];
        if (_x >=0 && _x < num && _y >=0 && _y<num ){
            if (arr[_x][_y] === 1){
                arr[_x][_y]=0; //방문처리
                queue.push([_x, _y]);
            }
        }
    }
    }
return houseNumber;
}

let count=0;
const houseNumberArray=[];
for (let i=0;i<num;i++){
    for (let j=0;j<num;j++){
        if (arr[i][j] ===1){
            arr[i][j]=0 //방문처리
              count++;
        houseNumberArray.push(bfs(i, j));
        }
    }
}

console.log(count)
houseNumberArray.sort((a,b)=> a-b);
for (i of houseNumberArray){
    console.log(i)
}
