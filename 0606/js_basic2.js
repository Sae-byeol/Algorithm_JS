//  7의 개수
function solution(array) {
    var answer = 0;
    for (a of array){
        var arr=String(a).split('');
        
        for (item of arr){
            if(item === '7'){
                answer++;
                
            }
        }
    }
    return answer;
}