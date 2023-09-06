function solution(n, m, section) {
    let answer = 1;
    let start = section[0];
    let end = start + m - 1;
    
    
    for(let i = 1; i < section.length; i++){
           if(start < section[i] && end >= section[i]){
               continue;
           }else{
               start = section[i];
               end = start + m - 1;
               answer++;
               
           }
    }

    return answer;
}