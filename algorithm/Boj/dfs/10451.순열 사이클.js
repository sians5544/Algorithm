
const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n=Number(input[0]);

for(let i=0;i<n;i++){
  input.shift();

  let nums=input[i+1].split(' ').map(Number);

  let answer = 0;

  let len = nums.length;

  let checkarr = Array(len+1).fill(0);

  checkarr[0] = Number.MIN_SAFE_INTEGER;

  function DFS(i,target){
    if(i === target) return;
    else{ 
      checkarr[i]=1
      DFS(nums[i-1],target);
    }
  }

  for(let i =1; i <=len; i++){
      if(checkarr[i] === 0){
        DFS(nums[i-1],i);
        answer+=1;
    }
  }

  console.log(answer);
}

