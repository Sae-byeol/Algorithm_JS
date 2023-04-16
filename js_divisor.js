//  약수의 개수와 덧셈
function solution(left, right) {
    var answer = 0;
    
    for (let i= left ; i<=right ; i++){
        //i의 약수 구하기
        let cnt =0;
        for (let j=1; j<=i; j++){
            if (i% j === 0 ){
                cnt++;
            }
        }
        if (cnt % 2 ===0){
            answer+=i;
        }else{
            answer-=i;
        }
    }
    return answer;
}