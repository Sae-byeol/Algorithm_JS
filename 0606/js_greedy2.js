//편의점 알바
function partTimeJob(k){
    //동전 개수가 최소화 되어야함 -> 큰 동전부터 사용
    const arr = [500,100,50,10,5, 1];
    let cnt =0;
    for (item of arr){
       cnt+= Math.floor(k/item); //거스름돈 동전의 수
       //k 갱신 
       k= k- (item *  Math.floor(k/item));
    }
    return cnt;
}
