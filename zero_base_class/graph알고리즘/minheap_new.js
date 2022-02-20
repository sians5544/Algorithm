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

let minheap = new minHeap();

minheap.insert([1,4]);
minheap.insert([1,2]);
minheap.insert([4,5]);
console.log(minheap.get());



