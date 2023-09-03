function solution(cards1, cards2, goal) {
    let answer = '';
    let point1 = 0; 
    let point2= 0; 
    let flag= true;
    
    for(let i = 0; i < goal.length; i++){
        
        if(goal[i] === cards1[point1]){
            point1++;
            continue;
        }else if(goal[i] === cards2[point2]){
            point2++;
            continue;
        }else{
            flag = false;
            break;
        }
    }
    
    flag ? answer = "Yes" : answer = "No";
    
    return answer 
}