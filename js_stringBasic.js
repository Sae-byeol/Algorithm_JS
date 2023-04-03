//  문자열 다루기 기본
function solution(s) {
    var answer = false;
    if (s.length === 4 || s.length === 6){
        var arr=s.split('');
        for( var i=0; i<s.length ; i++){
            if (isNaN(arr[i])){
                return false;
            }
        }
        return true;
    }
    return false;
}