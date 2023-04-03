//  크기가 작은 부분문자열
function solution(t, p) {
    var answer = 0;
    for (var i=0;i<t.length -p.length+1 ; i++){
        var str= t.substr(i, p.length);
        if (Number(str) <= Number(p)){
            answer++;
        }
    }
    return answer;
}