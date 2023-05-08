// 올바른 괄호 
function solution(s){

    var stackCnt =0;
    
    for (str of s){
        if (str === '('){
            stackCnt +=1;
        }else{
            stackCnt -=1;
            if (stackCnt < 0) return false;
        }
    }
    
    if (stackCnt === 0){
        return true;
    }
return false;
}
