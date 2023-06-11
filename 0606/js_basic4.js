//잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];
    let start=0;
    let cnt = my_str.length / n ;
    for (let i=0; i< cnt; i++){
        let str=my_str.substr(start, n);
        answer.push(str);
        start+=n;
        
    }    
    return answer;
}