function solution (n,edges){
  let answer = 0;

  let unf = Array.from(Array(n+1) ,(v,i) => i);

    function Find(v){
      if(v===unf[v]) return v;
      else return unf[v]=Find(unf[v]);
    }

    function Union(a, b){
      let fa=Find(a);
      let fb=Find(b);
      if(fa!==fb) unf[fa]=fb;
    }

    edges.sort((a,b) =>a[2]-b[2]);

    for(let [a,b,c] of edges){
      let fa = Find(a);
      let fb = Find(b);

      if(fa!==fb){
        answer +=c;
        unf[fa] = fb;
      }
    }

    return answer;
}


console.log(solution(9, [[1, 2, 12], [1, 9, 25], [2, 3, 10], [2, 8, 17], [2, 9, 8], [3, 4, 18], [3, 7, 55], [4, 
  5, 44], [5, 6, 60], [5, 7, 38], [7, 8, 35], [8, 9, 15]]));