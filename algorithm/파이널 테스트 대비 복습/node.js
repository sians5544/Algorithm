class Node{
  constructor(){
    this.end = false;
    this.child = {};
  }
}

class Trie{
      constructor(){
        this.root = new Node();
      }

      insert(word){
        let cur = this.root; 
        for( let x of word){
          if(cur.child[x] === undefined){ //  노드에 문자 키가 없는 것 
            cur.child[x] = new Node();
          }
          // 이미 있으면 cur 만 변경 
          cur = cur.child[x];
      }
      cur.end = true; // 이 노드가 단어의 끝이라고 알려줌 
    }

    search(word){
      let cur = this.root;
      for(let  x of word){
        if(cur.child[x] === undefined) return false ; // 단어 키가 존재하지 않는다면 false 
      cur = cur.child[x]; // 있다면 쭉쭉 내려간다 
      } 
      return cur.end;
    }

    prefixS(str){ 
      let cur=this.root;
      for(let x of str){
          if(cur.child[x]===undefined) return false;
          cur=cur.child[x]; // 접두어가 있다면 true 
      }
      return true;
  }
}


const mT = new Trie();
mT.insert("hello");
mT.insert("student");
console.log(mT.search("st"))
console.log(mT.prefixS("st"))
console.log(mT.prefixS("H"))
console.log(mT.prefixS("h"))
