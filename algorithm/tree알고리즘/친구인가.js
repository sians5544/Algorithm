
// Disjoint set 이란?

// 서로소 집합 자료구조
// 서로 중복되지않은 부분 집합들로 나눠진 원소들에 대한 정보를 저장하고 조작하는 자료구조 
// 노드 누개를 뽑아서 모두 루트 노드가 동일하면 find 함수에서 사이클을 확인한다 


function solution(n, nums, s1, s2){  
    let answer="YES";

    let unf = Array.from(Array(n+1), ( v, i) => i );//메모이제이션을 위한  배열 , 초기값은 자기 자신을  가지도록 한다. 

  function Find(v){ //찾기 - v 가 가지고 있는 부모 노드를  찾는다  , v는 노드 번호 , unf[v] - 부모 노드 번호 
      if(v===unf[v]) return v;  // 루트 노드는 부모 노드 번호로 자기 자신을 가진다 .
      else return unf[v]=Find(unf[v]); // 각 노드의 부모 노드를 찾기 위해  재귀호출이 일어난다 , find하면서 만난 모든 값의 부모 노드를 root로 만든다 

    }
  function Union(a, b){ // a 와 b 가 포함되어있는 집합을 합치는 연산 
    let fa=Find(a);
      let fb=Find(b); // 각원소가 속한 트리의 루트 노드를 찾는다 
      if(fa!==fb) unf[fa]=fb; //  각 원소의 루트 노드가 다르다면 fa의 부모 노드를 fb로 설정해준다 
    }
    for(let [a, b] of nums){
        Union(a, b);
    }

  if(Find(s1)!==Find(s2)) return "NO"; // 부모 노드가 같지않다 ->  사이클이 발생하지 않는다 즉 둘이  친구가 아니다 "NO" 리턴 
    return answer;
}
console.log(solution(9, [[1, 2], [2, 3], [3, 4], [1, 5], [6, 7], [7, 8], [8, 9]], 3, 8)); 
