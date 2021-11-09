var rotate = function(nums, k) {
    
  k%=nums.length; // k 가 nums.length 보다 큰 경우가 있기 때문에 나눠준다 
  let left = (nums.length) - k ; 
  let right = nums.length;
  

  let rever = nums.slice(left,right); // k 만큼의  뒷 부분 잘라주기 

  rever.push(...nums.slice(0,left)); // 나머지 앞 부분들 잘라주기 
    
  for(let i = 0; i<nums.length; i++){
      nums[i] = rever[i];
  } // 다시 nums 로 재정의  , return 이 무조건 nums 로 되어야하기 때문 

};