// 가장 큰 수 

function solution(numbers) {
    //sort를 활용
    var answer = '';
    numbers.sort((a,b)=> `${b}${a}` - `${a}${b}`);
    answer= numbers.join(''); //.join(''): 배열의 원소들을 합해서 하나의 문자열로 만들어주는 메소드
    
    return answer;
}
