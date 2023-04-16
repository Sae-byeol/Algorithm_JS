//  예산
function solution(d, budget) {
    //소팅 조건 없이 d.sort() 실행시 [1,2,10] 을 [1,10,2]로 소팅함을 주의
    d.sort((a, b) => a - b);
    
    for (let i = d.length ; i >= 0; i-- ){
        let sum =0;
        for (let j=0; j<i; j++){
            sum+=d[j];
        }
        if (sum <= budget){
            return i;
        }
    }
}