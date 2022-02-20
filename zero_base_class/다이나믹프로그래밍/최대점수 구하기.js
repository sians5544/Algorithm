
// 가방에 보석 넣는 문제로 보자면  
// 지금 얘는 보석이 한개뿐이것 


// 한개 만 쓴다 할 때는 뒤쪽부터 짜야한다 
function solution(nums,m){
  function solution(nums, m){  
    let answer=0;
    let dy=Array.from({length:m+1}, ()=>0);
    for(let i=0; i<nums.length; i++){
        let ps=nums[i][0];
        let pt=nums[i][1];
        for(let j=m; j>=pt; j--){
            dy[j]=Math.max(dy[j], dy[j-pt]+ps); // 뒤에서부터  그 시간만큼을 빼면서 값을 구해가야지 중복이 안된다 
        }
    }
    answer=dy[m];
    return answer;
}

console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20));