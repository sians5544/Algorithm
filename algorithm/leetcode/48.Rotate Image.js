/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    
  let len = matrix.length;
  let graph = Array.from(Array(len) ,()=> Array(len).fill(0));
  
  
  for(let i = 0; i<len; i++){
      for(let j = len-1; j>=0; j--){
          graph[i][j] = matrix[j][i]; 
      }
  }
  
  for(let i = 0; i<len; i++){
      matrix[i] = graph[i].reverse();
  }
  

};