function solution(files) {
  let answer = [];
  let arrSort = [];

  let chkFileNum = /[0-9]/;

  for (let i = 0; i < files.length; i++) {
    let start = chkFileNum.exec(files[i]).index;
    let number = '';

    while (chkFileNum.test(files[i][start])) {
      number += files[i][start];
      start++;
    }

    arrSort.push([files[i].split(chkFileNum)[0].toLowerCase(), +number, i]);
  }

  arrSort.sort((a, b) =>
    a[0] < b[0] ? -1 : a[0] === b[0] ? (a[1] < b[1] ? -1 : a[1] === b[1] ? a[2] - b[2] : 0) : 1
  );
  for (let arr of arrSort) {
    answer.push(files[arr[2]]);
  }

  return answer;
}

console.log(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']));
console.log(
  solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'])
);
console.log(
  solution(['muzi1.txt', 'MUZI1.txt', 'muzi002', 'muzi001.txt', 'foo010bar020.zip', 'muzi1.TXT'])
);
