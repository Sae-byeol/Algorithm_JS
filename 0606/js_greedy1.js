// 짐 나르기
function movingStuff (stuff, limit){ //[70,50,80,50] , 100
    let count =0;
    let sortedStuff = stuff.sort((a,b)=> a-b); //[50,50,70,80]
    while(sortedStuff.length > 0){
        if (sortedStuff[0] + sortedStuff[sortedStuff.length-1] <= limit){
            //가장 가벼운것 + 가장 무거운 것 <= limit 라면
            sortedStuff.shift(); //가장 가벼운 값도 추가로 삭제 
            //3. [50]
        }
        //가장 무거운 값 삭제 
        sortedStuff.pop(); 
        //1. [50,50,70] 
        //2. [50,50]
        //3-1. [0]
        count++;
    }
    
}