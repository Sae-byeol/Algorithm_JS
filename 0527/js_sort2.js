// H-index

function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=> b-a); 
    let c= citations[0];
    while(c >=0){
        let cnt = citations.filter((e)=> e >= c).length;
        if (cnt >= c){
            return c;
        }
        c--;
    }
    return answer;
}