// 최댓값과 
function solution(s) {
    var answer = '';
    
    const arr= s.split(' ');
    
    var min=arr[0];
    var max=arr[0];
    
    for (a of arr){
        
        if (Number(a) > Number(max)){
            max=a;
        }
        if (Number(a) < Number(min)){
            min=a;
        }
    }
    
    answer= min + " " + max;
    return answer;
}
