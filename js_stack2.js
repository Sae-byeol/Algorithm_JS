// 짝지어 제거하기
function solution(s)
{
    var answer = 0;

    var arr=s.split('');
    var stack = [];

    
    for (let i=0;i<arr.length;i++){
        stack.push(arr[i]);
        if (stack[stack.length-1] === stack[stack.length-2]){
            stack.pop();
            stack.pop();
        }
    }
    if (stack.length === 0) answer =1;
    
    return answer;
}