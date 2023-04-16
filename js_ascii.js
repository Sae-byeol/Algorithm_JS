//  시저 암호
function convertFunc(s,n){
    if (s === " ") return " ";
    let code =0;
    if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90){
        //대문자
        code = s.charCodeAt() + n ;
        if (code >= 91){
            code= code -26;
        }
    }
    else{
        //소문자
        code = s.charCodeAt() + n ;
        if (code >=123){
            code= code -26;
        }
    }
   
    return String.fromCharCode(code);
    
}
function solution(s, n) {
    var answer = '';
    const arr= s.split('');
    for (let i=0;i<arr.length;i++){
        answer +=convertFunc(arr[i], n);
    }
    return answer;
}