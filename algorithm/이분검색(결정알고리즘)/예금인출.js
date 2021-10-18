// left , right 를 잡는 기준은  최소값 즉 금액이다 

function solution(nums, m){
  let answer=0;
  let n=nums.length;
  let lt=0, sum=0;

  nums.forEach(e => {
      lt=Math.max(lt, e);
      sum+=e;
  });  // right 의 값은 최대 값으로 지정해주는데 , 사용할 금액 보다는 크지는 않을것이기 때문에 sum 한 값을 그 기준으로 잡는다 

  let rt=sum;

  function Count(mid){ // mid 한번 인출할 때의  금액이다 

      let cnt=1; // 인출을 한번 한것으로 시작

      sum=mid; // sum에다가 mid값을 넣는다 (sum을 내가 가지고 있는 돈으로 이해하자 한번 인출 했으니 그 금액이 내가 가진 돈이 되는 것) 

      for(let i=0; i<n; i++){
          if(sum<nums[i]){ // 각 인덱스의 해당하는 날짜들과 mid 값을 비교 
              sum=mid; //  mid 값보다 더 많은 돈을 사용했으므로 인출해야함  , 이전에 가지고 있던 돈은 신경쓰지 않고 다시 새롭게 시작 하므로 sum = mid 로 지정  
              cnt++; // 인출한 횟수 ++ 
          }
          sum-=nums[i]; // 내가 가지고 있는 비용에서 그날 사용한 비용 nums[i] 를 빼준다 
      } 
      return cnt;
  }
  while(lt<=rt){ // 이분  검색의 기본 공식 left 가 right 보다 작을 때까지 비교 
      let mid=parseInt((lt+rt)/2); // left 와 right 의 중간값을 구한다  
      if(Count(mid)<=m){  
          answer=mid; // 돈을 많이 뽑을수록 인출 횟수는 줄어든다  부족한 것이 아니기 때문에 일단 저장하고 
          rt=mid-1; // 더 작은 값을 구해보기 위해서 -1 을하며 값을 줄여준다 
      }
      else{
          lt=mid+1; // 돈을 뽑는 횟수가 정해진 것보다 크면 금액이 적다는 것을 의미 그러므로 lt 의 값을 늘려준다 
      }
  }
  return answer;
}
console.log(solution([200, 300, 200, 200, 300, 100, 300], 3));