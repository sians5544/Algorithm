//검색어 자동완성, 사전에서 찾기 그리고 문자열 검사 같은 부분에서 사용할 수 있다고 첨부된 자료에 나와있습니다.

//트라이 자료 구조에서 미리 뽑아내는 것 

class Node{
  constructor(){
      this.end = false; 
      this.child = {} 
  } 
}

class Trie{
  constructor(){
      this.root=new Node(); // 생성자 호출 
  }
  
  insert(word){
      let cur=this.root; // 노드는 계속 가르키는 애 
      for(let x of word){
          if(cur.child[x]===undefined){
              cur.child[x]=new Node();  // 단어가 없다면 새 노드 하나 생성 
          }
          cur=cur.child[x]; // 단어의 종료지점 
      }
      cur.end=true; 
  }

  search(word){
      let cur=this.root;
      for(let x of word){
          if(cur.child[x]===undefined) return false;
          cur=cur.child[x];
      }
      return cur.end;  // 단어의 끝이라면 end 가 true 
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


