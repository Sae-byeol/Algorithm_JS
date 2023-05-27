// 프로세스
function solution (priorities,location){
    let answer=0;
    let pos_map=[];
    let max_value = Math.max(...priorities);
    // ex) [2,1,3,2] , 2

    //1. position map 만들기
    for (let i=0;i<priorities.length; i++){
        pos_map.push(i); // pos_map=[0,1,2,3]
    }

    //2. 알고리즘 뽑기
    while (priorities.length !== 0){
        if (priorities[0] < max_value){
            //뒤에 더 큰게 있으면
            priorities.push(priorities.shift()); //[0] 뽑아서 멘 뒤로 이동
            pos_map.push(pos_map.shift()); //해당 위치값도 동일하게 수행 (뒤로 이동)
            //[1,3,2,2] [1,2,3,0]
            //[3,2,2,1] [2,3,0,1]
        } 
        else{ 
            //priorities[0] >= max_value
            answer+=1;
            priorities.shift(); //해당 값 빼내기
            if (pos_map.shift() === location)
                //해당 원소가 문제에서 주어진 원소라면 
                return answer;
            max_value=Math.max(...priorities); //하나 빠졌으니 새로 갱신
        }
    }
}