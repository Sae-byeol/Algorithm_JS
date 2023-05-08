//  기능 개발
function solution(progresses, speeds) {
    var answer = [];
    var cntArr =[];
    for (var i=0;i<progresses.length; i++){
        var cnt =1;
        while( progresses[i] + speeds[i] * cnt < 100){
            cnt++;
        }
        cntArr.push(cnt);
    }
    console.log(cntArr);
    var m=cntArr[0];
    var cnt = 1;
    for (var i=1; i< cntArr.length; i++){
        if (m >= cntArr[i]){
            cnt++;
           
        }else{
            answer.push(cnt);
             m=cntArr[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}
