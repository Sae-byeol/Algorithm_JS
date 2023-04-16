//  위장
function solution(clothes) {
    var answer = 1;
    
    var object = {};
    
    // 종류별로 묶기 - 하나의 key에 여러 value 할당해야하므로 object 사용
    for ( cloth of clothes ){
       
        if (object[cloth[1]] === undefined){
            //해당 key값에 처음으로 value 넣는 경우에는 push 불가 (undefined 문제 발생)
            object[cloth[1]] = [cloth[0]]; 
            //value 여러개를 할당할 예정이므로 배열로 저장
        }else{
            //기존 value 가 존재하는 경우에는 push 로 뒤에 추가로 붙이기
            object[cloth[1]].push(cloth[0]);
        }
    }

    for ( category in object){
        // 카테고리마다 value1 입거나, value2 입거나, ... 다 안입거나
        answer *= object[category].length +1 ;
    }
    
    // 모든 카테고리를 다 안입은 경우 빼주기
    return answer -1 ;
}