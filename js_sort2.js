//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    var answer = strings.sort((a,b)=>{
        if (a.charCodeAt(n) - b.charCodeAt(n) ==0 ){
            if (a > b) return 1;
            return -1;
        }else{
            return a.charCodeAt(n) - b.charCodeAt(n);
        }
    })
    
    return answer;
}