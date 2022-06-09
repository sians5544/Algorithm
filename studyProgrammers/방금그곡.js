function solution(m, musicinfos) {
  let answer = [];

  const replaceTolower = (str) => {
    return str
      .replace(/C#/g, 'c')
      .replace(/D#/g, 'd')
      .replace(/F#/g, 'f')
      .replace(/G#/g, 'g')
      .replace(/A#/g, 'a');
  };

  m = replaceTolower(m);

  for (let i = 0; i < musicinfos.length; i++) {
    let musicinfo = musicinfos[i].split(',');

    let startTime = musicinfo[0].split(':').map(Number);
    let endTime = musicinfo[1].split(':').map(Number);

    let playTime = (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1]);

    musicinfo[3] = replaceTolower(musicinfo[3]);

    let str = [];
    if (playTime > musicinfo[3].length) {
      let repeat = Math.ceil(playTime / musicinfo[3].length);
      for (let j = 0; j < repeat; j++) {
        str.push(musicinfo[3]);
      }
    } else {
      str.push(musicinfo[3].slice(0, playTime + 1));
    }

    if (str.join('').includes(m)) answer.push([musicinfo[2], playTime, i]);
  }

  if (answer.length <= 0) return '(None)';

  answer.sort((a, b) => (a[1] === b[1] ? a[2] - b[2] : b[1] - a[1]));

  return answer[0][0];
}
