// 주사위의 개수
function solution(box, n) {
    var answer = 1;
    for (b of box){
        answer*=Math.floor(b / n);
    }
    return answer;
}