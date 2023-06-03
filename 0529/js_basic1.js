// 푸드 파이트 대회
function solution(food) {
    var answer = '';
    var str1='';
    for (let i=1;i<food.length; i++){
        let foodPerPerson =Math.floor(food[i]/2);
        console.log(foodPerPerson);
        if (foodPerPerson < 1) {
            continue; //통과
        }
        for (let j=0; j< foodPerPerson; j++){
            str1+=String(i);
        }
    }
    
    //문자열 뒤집기
    var reversedStr1 = str1.split('').reverse().join('');
    
    answer = str1+ '0'+ reversedStr1;

    return answer;
}