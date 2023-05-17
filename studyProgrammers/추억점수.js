function solution(name, yearning, photo) {
    let answer = [];
    let scoreObj = {};
    
    for(let i = 0; i < name.length; i++){
        scoreObj[name[i]] = +yearning[i];
    }
    
    for(let score of photo){
        let sum = 0;
        score.forEach(s => sum+=scoreObj[s] ? scoreObj[s] : 0);
        answer.push(sum);
    }
    
    return answer;
}