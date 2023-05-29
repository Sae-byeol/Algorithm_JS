// 기초 - 문자열 안에 문자열
function solution(str1, str2) {
    var answer = 1;
    if (str1.indexOf(str2) === -1){
        answer =2;
    }
    
    return answer;
}