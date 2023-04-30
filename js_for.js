//문자열 내 p와 y의 개수

function solution(s){
    
    var p=0;
    var y=0;
    s.split('').forEach((c)=>{
        if (c === 'p' || c=== 'P'){
            p++;
        }if (c === 'y' || c=== "Y"){
            y++;
        }
        
    })
    if (p===y){
        return true;
    }else{
        return false;
    }

}