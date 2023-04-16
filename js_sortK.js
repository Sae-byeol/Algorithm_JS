//  K번째 수
function solution(array, commands) {
    var answer = [];
    for ( command of commands){
        let arr = array.slice(command[0]-1, command[1]);
        //정렬 조건 꼭 명시해줘야함을 유의
        arr.sort((a, b) => a - b);
        answer.push(arr[command[2]-1])
    }
    return answer;
}