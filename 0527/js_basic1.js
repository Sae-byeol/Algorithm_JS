// 기초 - 가장 큰 수 찾기

function solution(array) {
    var answer = [];
    let max=0;
    
    for (let i=0; i<array.length;i++){
        if ( array[i] >= max ){
            max = array[i];
        }
    }
    answer.push(max);
    answer.push(array.findIndex((e)=> e === max) );
    return answer;
}