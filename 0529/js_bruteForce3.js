// 카펫
function solution(brown, yellow) {
    var answer = [];
    var divisor =[];
    
    var brownWithoutCorner = brown - 4;
    
    // yellow 의 약수 구하기
    for (let i=1 ; i<=yellow; i++){
        if (yellow % i === 0){
            divisor.push(i)
        }
    }
    
    for (d of divisor){
        //올바른 yellow의 배치 찾기
        if ( ( d + (yellow / d) ) * 2 === brownWithoutCorner ){
            answer.push((yellow / d) + 2); //가로
            answer.push(d + 2); //세로
            return answer;
        }
    }

}