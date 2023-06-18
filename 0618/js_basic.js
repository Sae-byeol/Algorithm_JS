//  문자열 정렬하기 (1)
function solution(my_string) {
    var answer = [];
    var num = my_string.length;
    var arr= my_string.split('');
    
    for (let i=0;i<arr.length;i++){
        if (!isNaN(Number(arr[i])) ){
            answer.push(Number(arr[i]));
        }
    }
    answer.sort((a,b)=> a-b)
    return answer;
} 