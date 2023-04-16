//  부족한 금액 계산하기
function solution(price, money, count) {
    var answer = -1;
    var sum=0;
    for (var i=1; i<=count; i++){
        sum += price*i;
    }
   
    if (sum > money){
        answer = sum -money;
    }else{
        answer=0;
    }
    return answer;
}