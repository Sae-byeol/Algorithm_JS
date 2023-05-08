// 하샤드 수
function solution(x) {
    var answer = false;
    var arr= String(x).split('');
    var sum=0;
    for (var i=0;i<arr.length; i++){
        sum +=Number(arr[i])
    }
    if (x % sum ===0 ) return true;
    return answer;
}
