function solution(sequence, k) {
    var answer = [];
    let sum = 0;
    let right = 0; 
    let minNum = Number.MAX_SAFE_INTEGER;

    for(let left = 0; left < sequence.length; left++){
        sum+=sequence[left];
        right = left + 1;

        while(sum <= k){       
            if(sum === k){
                answer.push([left,right-1,right-left-1]);
                break;
            }
            sum+=sequence[right];
            right++;

        }
    
        sum = 0;
    }
    
answer.sort((a,b) => a[2] < b[2] ?  a[0] < b[0] ? 1 : -1 : 0);
    
    answer[0].pop();
    return answer[0];
}

console.log(solution([1,1,1,2,3,4,5],5));
console.log(solution([2,2,2,2,2],6));