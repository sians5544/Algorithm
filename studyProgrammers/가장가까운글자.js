function solution(s) {
    var answer = [];
    let obj = {};
    
    for(let i = 0; i < s.length; i++){
        !obj[s[i]] ? answer.push(-1) : answer.push(i- obj[s[i]] + 1);
        obj[s[i]] = i+1;
    }
    
    return answer;
}