//  체육복
function solution(n, lost, reserve) {
    var answer = 0;
    //answer = n - 결국 못 빌린 학생 수
    lost.sort();
    reserve.sort();
    
    let i =0;
    for (l of lost){
        //전체 돌면서 중복되는 것부터 제거하고 시작
        let findSame= reserve.find((r)=> ( r=== l));
        lost =[...lost.filter((l)=> l!== findSame)];
        reserve =[...reserve.filter((r)=> r!== findSame)];
    }
    while(lost[i]){
        let findResult = reserve.find((r)=> ( r=== lost[i] -1 || r=== lost[i] + 1 ))
        if (findResult)
        {
            lost.splice(i,1);
            reserve =[...reserve.filter((r)=> r!== findResult)]
        }
        else{
            i++;
        }
    }
    answer = n- lost.length;
    
    return answer;
}
