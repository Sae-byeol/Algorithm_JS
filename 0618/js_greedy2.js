//  구명보트
function solution(people, limit) {
    var answer = 0;
    //배열 앞에서부터 순차적으로 풀면 '보트의 개수가 최소가 되어야한다'를 만족하지 못하는 경우가 생김 => 따라서, 투포인터로 양 옆에서 (제일 작은 값, 제일 큰 값)을 비교하여 최대한 limit를 꽉 채워 두명을 태워야함. 
    
    people.sort((a,b)=> a-b);
   
    while(people.length > 0){
        //[0]과 [length-1]비교
        if (people[0] + people[people.length -1] <= limit){
            //가벼운 애도 태울 수 있음 
            people.shift();
            
        }
        //무거운애는 무조건 태우기
        people.pop();
        
        answer++;
    }
    return answer;
}