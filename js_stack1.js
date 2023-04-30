//같은 숫자는 싫어

function solution(arr)
{
    var answer = [];
    answer.push(arr[0]);
    var answerIndex =0;
    for (let i=1;i<arr.length;i++){
       if (arr[i] !==answer[answerIndex]){
       answer.push(arr[i]);    
           answerIndex++;
       }   
    }
   
    return answer;
}