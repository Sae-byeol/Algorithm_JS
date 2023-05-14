//  다음 큰 숫자
function countOne (num) {
    var numOne= 0;
    num.toString(2).split('').forEach((i)=>{
        if (i === '1'){
            numOne++;
        }
    })
    return numOne;
}

function solution(n) {
    var answer= n+1;
    var cnt= countOne(n);
    while(1){
        if (countOne(answer) === cnt){
            return answer;
        }
        answer ++;
    }
    
}