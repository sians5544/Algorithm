var maxArea = function(height) {
    
  let answer = 0;
  
  let container = 0;
  
  let left = 0;
  
  let right = height.length-1;
  
  while(left < right){
      
      let minH= Math.min(height[left],height[right]);
      
      let width =(right-left);
      
      
      container = Math.max(container,minH * width);
      
      if(height[left] < height[right]) left++;
      else right--;
      
      
  }
  answer = container;
  
  return answer;
  
};