function solution(players, callings) {
    let answer = Array(players.length).fill(0);
    let nameObj = {};
    let counterObj = {};
    
    for(let i = 0; i < players.length; i++){
        nameObj[players[i]] = i;
        counterObj[i] = players[i];
    }
    
    for(let j = 0; j < callings.length; j++){
        
        let ranking = nameObj[callings[j]];
        let origin = counterObj[ranking-1];
        
        counterObj[ranking-1] = callings[j];
        counterObj[ranking] = origin;
        
        nameObj[callings[j]]--;
        nameObj[origin]++;
        
    }

    for(let [index, name] of Object.entries(counterObj)){
        answer[index] = name;
    }
    
    return answer;
}