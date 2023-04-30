//가장 가까운 같은 글자

function solution(s) {
    var answer = [];
    var strArr = s.split('');
    answer.push(-1);
    for (var i=1;i<strArr.length;i++){
        for (var j=i-1;j>=0; j--){
            if (strArr[j] === strArr[i]){
                answer.push(i-j);
                break;
            }
        }
        if (!answer[i]){
            answer.push(-1);
        }
    }
    return answer;
}