function solution(num_list) {
    var answer = [];
    var n1=0;
    var n2=0;
    for (num of num_list){
        if (num % 2 ===0){
            n1++;
        }else{
            n2++;
        }
    }
    answer.push(n1);
    answer.push(n2);
    return answer;
}
