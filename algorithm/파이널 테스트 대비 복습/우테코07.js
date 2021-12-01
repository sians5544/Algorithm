function solution(grid, clockwise) {
  let result = [];
  let n = grid.length;

  //   if(clock){
  //     rotated[i][j] = matrix[n-j-1][i];
  // }else{
  //     rotated[i][j] = matrix[j][n-i-1];
  // }

  if (clockwise) {
    for (let i = 0; i < n; i++) {
      let line = '';
      for (let j = 0; j <= i * 2; j++) {
        line += grid[n - 1 - parseInt(j / 2)][i * 2 - j];
      }
      result.push(line);
    }
  } else {
    for (let i = 0; i < n; i++) {
      let line = '';
      for (let j = 0; j <= i * 2; j++) {
        console.log(n - i + 1);
        // console.log(n - 1 - parseInt(j / 2));
        line += grid[n - i][n - 1 - parseInt(j / 2)];
      }
      result.push(line);
    }
  }

  // for (let i = n; i > 0; i--) {
  //   let line = '';
  //   for (let j = i * 2; j >= 0; j--) {
  //     // console.log(n - 1 - parseInt(j % 2));
  //     // console.log(n + 1 - parseInt(j / 2));
  //     //console.log(j);
  //     console.log(i);
  //     //console.log(j * 2 - j);
  //     line += grid[parseInt(j % 2) + 1][n + 1 - parseInt(j / 2)];
  //   }
  //   result.push(line);
  // }
  return result;
}

function rotate(grid, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i * 2; j++) {
      line += grid[n - 1 - parseInt(j / 2)][i * 2 - j];
    }
    result.push(line);
  }

  for (let i = 0; i < n; i++) {
    grid[i] = result[i];
  }

  return result;
}

// for (int i = 0; i < rotate.length; i++) {
//   for (int j = 0; j < rotate[i].length; j++) {
//       switch (degree) {
//           case 90:
//               rotate[i][j] = arr[n-1-j][i];
//               break;
//           case 180:
//               rotate[i][j] = arr[n-1-i][m-1-j];
//               break;
//           case 270:
//               rotate[i][j] = arr[j][m-1-i];
//               break;
//       }
//   }
// }

// console.log(rotate(['1', '234', '56789'], 3));
//console.log(rotate(['A', 'MAN', 'DRINK', 'WATER11'], 4));
console.log(solution(['1', '234', '56789'], true)); //["5", "762", "98431"]
// console.log(solution(['1', '234', '56789'], false)); //['9', '487', '13265']
// console.log(solution(['A', 'MAN', 'DRINK', 'WATER11'], false)); //['1', 'K1R', 'NNIET', 'AAMRDAW']
