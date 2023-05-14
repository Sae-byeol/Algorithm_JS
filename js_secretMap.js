//  비밀 지도
function solution(n, arr1, arr2) {
    var answer = [];
    // 모두 공백이어야만 공백,
    for (let i=0;i< n ;i++){
        var str='';
        //padStart(): 원하는 문자로 자릿수 채우는 메소드
        let num1= arr1[i].toString(2).padStart(n,'0').split('');
        let num2 = arr2[i].toString(2).padStart(n,'0').split('');
        
        for (let j=0;j<n;j++){
            if (num1[j] === '0' && num2[j] === '0'){
                str+=' ';
            }else{
                str+='#'
            }
        }
        answer.push(str);
    }
    return answer;
}