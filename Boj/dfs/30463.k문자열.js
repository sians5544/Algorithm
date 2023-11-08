const fs = require('fs');
const { fileURLToPath } = require('url');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);

let strs = [];
let tmp = [];
let answer = 0;

for(let i = 1; i <= N; i++){
    strs.push(input[i]);
}


const DFS = (v,s) => {
    if(v === 2){
        let setCount = new Set(tmp.join(''));
        if(setCount.size === K) answer+=1;
    }else{
        for(let i = s ; i < N; i++){
            tmp.push(strs[i]);
            DFS(v + 1, i + 1);
            tmp.pop();
        }
    }
}

DFS(0,0);

console.log(answer);