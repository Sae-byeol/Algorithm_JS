//k의 개수
function solution(i, j, k) {
    var answer = 0;
    for (let n= i;n<=j; n++){
        var arr= String(n).split('');
        for (a of arr){
            if (a === String(k)){
                answer++;
            }
        }
    }
    return answer;
}