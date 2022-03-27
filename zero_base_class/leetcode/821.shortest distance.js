

function solution(s,c){
    let answer = Array(s.length).fill(1e10);
    
    let count = 1e10;
    
    
    for(let right = 0; right < s.length; right++){
    
        if(s[right] === c) count = 0;
        answer[right] = Math.min(answer[right],count);
        count++;
    }
    
    
    for(let left = s.length-1; left >=0;left--){
        
        if(s[left] === c) count=0;
        answer[left] = Math.min(answer[left],count);
        count++;
    }
    
    return answer;
}

console.log(solution("loveleetcode","e"));