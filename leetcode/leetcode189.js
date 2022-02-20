var rotate = function (nums, k) {
  const n = nums.length;
  let tmp = Array(n);

  for (let i = 0; i < n; i++) {
    tmp[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = tmp[i];
  }

  return nums;
};


var rotate = function(nums, k) {

  k = k%nums.length
  
  var len  =nums.length - 1;
  reverse(nums, 0, len - k);
  reverse(nums, len - k + 1 , len);
  reverse(nums, 0 ,len);
  
  
  function reverse(arr,l, r){
      while(l <  r){
          [ arr[l], arr[r] ] = [ arr[r] , arr[l] ];
          l++;
          r--
      }    
  }
};