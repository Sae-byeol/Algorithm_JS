// 모의고사
function solution(answers) {
    var answer = [];
    var studentCntArr =[];
    
    studentCntArr.push({
        index: 0, cnt: 0,
    })
    studentCntArr.push({
        index: 1, cnt: 0,
    })
    studentCntArr.push({
        index: 2, cnt: 0,
    })
    
    
    var arr1=[1,2,3,4,5];
    var arr2=[2,1,2,3,2,4,2,5];
    var arr3=[3,3,1,1,2,2,4,4,5,5];
    
    var answersLength = answers.length;
    
    // 문제 수에 맞게 각 학생의 답 가공
    
    for (let i=0;i<answersLength; i++){
        if (arr1[i%5] === answers[i]){
            studentCntArr[0].cnt++;
        }
        if (arr2[i%8] === answers[i]){
            studentCntArr[1].cnt++;
        }
        if (arr3[i%10] === answers[i]){
            studentCntArr[2].cnt++;
        }
    }
    var max = studentCntArr.sort((a,b)=> {
        return b.cnt - a.cnt
    });
    var maxCnt = max[0].cnt;
    for (m of max){
        if (m.cnt === maxCnt){
            answer.push(m.index +1);
        }
    }
    
    return answer;
}