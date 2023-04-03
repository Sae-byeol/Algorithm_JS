//  두개 뽑아서 더하기
function solution(numbers) {
    var answer = [];
    for (var i=0;i<numbers.length-1;i++){
        for (var j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    const set= new Set(answer);
    answer = [...set];
    answer.sort((a, b)=> a-b)
    return answer;
}