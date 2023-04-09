//  약수의 합
function solution(n) {
    var answer = 0;
    for ( var i =1; i<=n; i++){
        if (n%i === 0){
            //나누어떨어진다면 그때의 i
            answer+=i;
        }
    }
    return answer;
}