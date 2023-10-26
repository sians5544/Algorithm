
function solution(park, routes) {
    let xlen = park.length;
    let ylen = park[0].length;

    const checkFun = (x,y,position) => {
        let dx = x + position[0];
        let dy = y + position[1];
    
        if (dx >= 0 && dy >= 0 && dx < xlen && dy < ylen && park[dx][dy] !== "X" ) {
            return true;
          } else {
            return false;
        }
    }
      
    let target = {
      N: [-1, 0],
      E: [0, 1],
      W: [0, -1],
      S: [1, 0],
    };
  
    let position = [];
  
    for (let i = 0; i < park.length; i++) {
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j] === "S") position = [i, j];
      }
    }
  
    for (let route of routes) {
      let [key, value] = route.split(" ");
      let copyPosition = position;
      let [x, y] = target[key];
  

      for (let k = 0; k < value; k++) {
          if(checkFun(x,y,position)){
              position = [x + position[0],y+position[1]];
        }else{
            position = copyPosition;
            break;
        }
      }


    }
      
    return position;
  }

  
  console.log(solution(["OOOOO", "OOOOO", "OOSOO", "OOOOO", "OOOOO"],["E 2", "W 2", "S 2", "N 3"])); //[1,2]