// 폰켓몬

function solution(nums) {
    var answer = 0;
    var hash = new Array(nums.length);
    hash.fill(0); 

    // 숫자 종류별로 모으기
    nums.forEach((n)=>{
        hash[n]++;
    })

    //hash에서 0이 아닌 값의 개수가 가짓수
    var cnt=0;
    hash.forEach((n)=>{
        if (n !== 0){
            cnt++;
        }
    })

    //cnt 값과 n/2 중 작은 값이 답
    answer = Math.min(cnt, nums.length/2);
    return answer;
}