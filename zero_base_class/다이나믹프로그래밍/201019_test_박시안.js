function solution(nums, n){
  let answer;
  function count(len){
      let cnt=0;
      for(let x of nums){
          cnt+=Math.ceil(x/len); 
      }
      return cnt;
  }
  let lt= 0;

  let rt=Math.max(...nums);

  while(lt<=rt){
      let mid=parseInt((lt+rt)/2);
      if(count(mid)<=n){
          answer=mid;
          rt=mid-1;
      }
      else{
          lt=mid+1;
      }
  } 
  return answer;                              
}

console.log(solution([29, 12, 24, 5, 19],6));







