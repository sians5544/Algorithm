class minHeap{
  constructor(){
      this.heap=[];
      this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
  }
  insert([a, b]){
      this.heap.push([a, b]);
      this.upheap(this.heap.length-1);
  }
  upheap(pos){
      let tmp=this.heap[pos]; // pos 가 끄트머리 노드를 가르키고 있음 
      while(tmp[1]<this.heap[parseInt(pos/2)][1]){ // 1번이 디스턴스 값
          this.heap[pos]=this.heap[parseInt(pos/2)]; // 그 디스턴스 값이 부모 보다 작으면 up , 부모는 밑으로 내려줌 
          pos=parseInt(pos/2);
      }
      this.heap[pos]=tmp;
  }
  get(){
      if(this.heap.length===2){
          return this.heap.pop();
      }
      let res;
      res=this.heap[1];
      this.heap[1]=this.heap.pop();
      this.downheap(1, this.heap.length-1);
      return res;
  }
  downheap(pos, len){
      let tmp, i;
      tmp=this.heap[pos];
      while(pos<=parseInt(len/2)){
          i=pos*2;
          if(i<len && this.heap[i][1]<this.heap[i+1][1]) i++;
          if(tmp[1]<=this.heap[i][1]) break; // 자식의 1번하고 비교한다 
          this.heap[pos]=this.heap[i];
          pos=i;
      }
      this.heap[pos]=tmp;
  }
  size(){
      return this.heap.length-1;
  }
  top(){
      return this.heap[1];
  }
}

function solution(N, road, K) {
  let answer = 0;
  
  let minH = new minHeap();  // minheap을 쓰면 최소값을 가져오는 시간이 줄어든다 (log n)
  let graph=Array.from(Array(N+1), ()=>Array());

  let dist = Array(N+1).fill(1e9); // 다익스트라를 위한 디스턴스 배열 선언 ,인접한 노드별 가중치 정보를 담은 배열 
  
  for(let [a, b, c] of road){ // 무방향 그래프 [마을 a, 마을 b , 두곳을 진가는데 걸리는 시간 ]
    graph[a].push([b,c]);
    graph[b].push([a,c]);
  }
  

  dist[1] = 0; // 다익스트라 그래프로 구조화 하려면 시작점이 있어야 하므로 0으로 선언  

  minH.insert([1,0]); 
  
  while(minH.size() > 0){
      let tmp = minH.get() // 최소 값을 꺼내준다 
      let now = tmp[0]; // 현재 노드
      let nowTime = tmp[1]; // 가는데 걸리는 시간 

      if(nowTime > dist[now]) continue; // dist 배열안에 있는 시간보다 크면 아래 for문을 검사하지 않고 통과 처리 (최소값이기 때문)
    
      for(let [next,time] of graph[now]){   // next 이동할 마을, time 걸리는 시간 
        if(nowTime + time < dist[next]){ // 연결된 노드의  시간이 더 작다면 
              dist[next] = nowTime + time;  // dist 에 값을 저장 
              minH.insert([next,dist[next]]); // min heap에도 insert
              
        }
      }
  }

  for(let x of dist){ // 각 구간들의 걸리는 시간 중에 최소 4시간 이하인 애들만 찾아서 count 해준다 
      if(x <= K){
          answer++;
      }
  }

  return answer;
}


console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3))