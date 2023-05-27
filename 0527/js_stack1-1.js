// 프로세스 - 다른 풀이법

function solution (priorities, location){
    
    // arr = [{ 위치값, 우선순위 }, ...] 
    var arr= priorities.map((priority, index)=>{
        return {
            index: index, priority: priority
        }
    })

    var queue =[];

    while(arr.length > 0 ){
        var firstEle = arr.shift(); 
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority); //뒤에 큰 게 있는지
        if (hasHighPriority){
            arr.push(firstEle); //뒤로 보내기
        }else{
            queue.push(firstEle); //우선순위 젤 높은 경우엔 뽑아서 큐에 넣기
        }
    }
    
    return queue.findIndex(el => el.index === location) + 1;
    
    
}
