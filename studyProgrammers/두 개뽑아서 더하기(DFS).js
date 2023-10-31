function solution(numbers) {
    let setNums = new Set();
    let check = [];

    const DFS = (len,tmp) => {
        if(len === 2){
            setNums.add(tmp[0]+tmp[1]);
        }else{
            for(let i = 0; i < numbers.length; i++){
                if(check[i]) continue;

                check[i] = 1;
                tmp.push(numbers[i]);
                DFS(len+1,tmp);
                tmp.pop();
                check[i]= 0;
            }
        }
    }
    
    for(let i = 0; i < numbers.length; i++){
        let tmp = [numbers[i]];
        check = Array(numbers.length).fill(0);
        check[i] = 1;
        DFS(1,tmp);
    }

    return [...setNums].sort((a,b) => a-b);
}

console.log(solution([2,1,3,4,1],[2,3,4,5,6,7]));