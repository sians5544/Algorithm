// 크루스칼 알고리즘 
// 1. 모든 정점을 독립적인 집합으로 만든다 
// 2. 모든 간선을 비용을 기준으로 정렬하고 비용이 작은 간선부터 양끝의 정점을 비교 
// 두 정점의 최상위 정점을 확인하고 서로 다를 경우 두 정점을 연결 

// 모든 도시를 서로 연결하는 최소 비용 반환 
// (a번도시,b번도시, 유지비용 c)

function solution(n,edges){

  let answer = 0;
  // 최소 비용을 찾기 때문에 우리는 간선의 작은 비용부터 나열
  edges.sort((a,b) => a[2]-b[2]);

  // 도시의 개수 만큼의 배열을 만든다 , 부모가 같은지(사이클이 되는 부분인지 확인하기 위함)
  // 처음에는 자기 자신으로 세팅
  let unf = Array.from(Array(n+1),(v,i)=>i);

  function find(v){
    if(v === unf[v]) return v; // root 가 같으면 부모가 같은 -> 사이클이 생김 자기 자신을 리턴 
    else return unf[v] = find(unf[v]); // 재귀함수를 호출하여 자기의 루트를 찾는다 ,  unf[v] 를 찾아줘야지 그냥 v 찾으면 완전 탐색하게된다 
  }

  function union(a,b){
    let findA = find(a);
    let findB = find(b);

    // 부모가 다르면 사이클 발생하지 않기 떄문에 간선 추가 해준다 
    if(findA !== findB){
      unf[findA] = findB;
    } 
  }


  for(let [a,b,c] of edges){
    let fa = find(a);
    let fb = find(b);

    if(fa!==fb){ // 두개가 연결되어있지만 사이클은 없다면 
      unf[fa] = fb;
      answer+=c; // 비용을 더해준다 
    }
  }

  return answer;
}



console.log(solution(9, [[1, 2, 12], [1, 9, 25], [2, 3, 10], [2, 8, 17], [2, 9, 8], [3, 4, 18], [3, 7, 55], [4,
  5, 44], [5, 6, 60], [5, 7, 38], [7, 8, 35], [8, 9, 15]]
  ));
