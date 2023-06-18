//숫자 찾기
function solution(num, k) {
   
    var arr = String(num).split('');

    var index = arr.findIndex((e)=> e=== String(k));
    if (index === -1){
       return index;
    }else{
        return index+1;
    }

}