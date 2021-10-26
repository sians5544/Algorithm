//다익스트라 문제 굉장히 많이 나온다 
// 그래프의 정점이 있는데 한 정점에서 다른 모든 정점으로 가는 최단 거리를 구한다 
// 간선의 가중치 값이 음수는 없고 무조건 양수이다 
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





function solution(n, edges, end) {
  let answer = 0;
  let minH = new minHeap();
  let graph = Array.from(Array(n+1), () => Array());
  let dist = Array.from({length:n+1}, () => 1000); // 각 노드의 최소값을 가지고 있는 배열 

  let ch = Array(n+1).fill(0);
  
  for(let [a, b, c] of edges){ // r가중치 그래프
      graph[a].push([b, c]);
  }
  dist[1] = 0;
  minH.insert([1, 0]);
  while(minH.size() > 0){
      let tmp = minH.get();
      let now = tmp[0]; // 현재정점
      let nowCost = tmp[1]; // 그 정점의 비용 
      if(nowCost > dist[now]) continue; // 더 큰 비용이 들어오면 그냥 나가라 
      for(let [next, cost] of graph[now]){  //next, cost 연결된 정점 
          if(nowCost + cost < dist[next]){
              dist[next] = nowCost + cost;
              minH.insert([next, dist[next]]);
          }
      }
  }
  if(dist[end] === 1000) answer = -1;
  else answer = dist[end];
  return answer;
}
console.log(solution(6, [[1, 2, 12], [1, 3, 4], [2, 1, 2], [2, 3, 5], [2, 5, 5], [3, 4 ,5], [4, 2, 2], [4, 5, 5], [6, 4, 5]], 5));