// 최소 직사각형
function solution(sizes) {
    var answer = 0;
    var long=[]; // 긴 면들
    var short = []; // 짧은 면들
    
    for ( arr of sizes){
        if (arr[0] > arr[1]){
            long.push(arr[0]);
            short.push(arr[1]);
        }else{
            long.push(arr[1]);
            short.push(arr[0]);
        }
    }
    
    long.sort((a,b) => {
        return b-a
    });
    short.sort((a,b) => {
        return b-a
    });
    
    answer = long[0]* short[0];
    return answer;
}