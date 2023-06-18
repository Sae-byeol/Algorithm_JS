//  배열의 유사도
function solution(s1, s2) {
    var answer = 0;
    for (let i=0;i<s1.length; i++){
        if (s2.find((e)=> e === s1[i])){
            answer++;
        }
    }
    return answer;
}