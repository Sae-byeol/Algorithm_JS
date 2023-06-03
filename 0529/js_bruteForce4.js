// 소수 찾기
const getPermutations = function (arr, selectNumber) {
    const results = [];
   // nP1일 경우
    if (selectNumber === 1) return arr.map((el) => el); 
   
    // fixed: 현재 루프에서 사용하는 값, index: index, origin: forEach를 호출한 배열(여기서는 arr)
    arr.forEach((fixed, index, origin) => {
      // fixed를 제외한 나머지 배열
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 나머지 배열에 대한 순열
      const permutations = getPermutations(rest, selectNumber - 1); 
      
      // rest에 떼 놓은 fixed 값을 붙여줌
      const attached = permutations.map((el) => fixed.concat(el)); 
      // attached를 spread syntax로 복사해 push
      results.push(...attached); 
    });

    return results; 
}


function solution(numbers) {
    var answerArr=[];
    var arr= numbers.split(''); 
    let permutations= [];

    let i=1;
    
    while( i <= numbers.length){
        permutations.push(...getPermutations(arr, i));
        i++;
    }
    for (p of permutations){
        let num = Number(p);
        if (num === 2) answerArr.push(num);
        for (let i=2; i<num; i++){
            if (num % i ===0){  // 소수 아님 
                break;
            }
            if (i === num -1 ){
                answerArr.push(num);
            }
        }
    }
    const set= new Set(answerArr); //set 객체 생성하여 중복 제거
    const  answer = [...set]; // 중복 제거한 set을 다시 배열로

    return answer.length;
}