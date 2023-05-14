// 핸드폰번호 가리기
function solution(phone_number) {
    var answer = '';
    var arr=phone_number.split('');
    for (let i=0;i<arr.length ;i++){
        if (i < arr.length - 4) {
            answer+='*';
        }
        else{
         
            answer+=arr[i];
        }
    }
    
    return answer;
}