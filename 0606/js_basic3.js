//  한번만 등장한 문자
function solution(s) {
    var answer = '';
    var arr= s.split('');
    for (a of arr){
        if (arr.filter((i)=> i === a).length ===1){
           answer+=a;
        }
    }
    return answer.split('').sort().join('');
}