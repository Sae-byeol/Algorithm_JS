// 기초 - A로 B 만들기
function solution(before, after) {
    var answer = 0;
    var arr= before.split('').sort();
    var arr2= after.split('').sort();
  
    if (arr.join('') === arr2.join('')){
        return 1;
    }
    
    return answer;
}