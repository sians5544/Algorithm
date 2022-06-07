function solution(m, musicinfos) {
  let answer = '';
  let songs = [];
  let hash = {};

  for (let i = 0; i < musicinfos.length; i++) {
    let musicinfo = musicinfos[i].split(',');

    let startTime = musicinfo[0].split(':');
    let endTime = musicinfo[1].split(':');

    let playTime = Math.abs(endTime[0] * 60 + endTime[1] - (startTime[0] * 60 + startTime[1]));

    let str = [];

    if (playTime > musicinfo[3].length) {
      let repeat = Math.floor(playTime / musicinfo[3].length);
      for (let j = 0; j < repeat; j++) {
        str.push(musicinfo[3]);
      }
    } else {
      str.push(musicinfo[3].slice(0, playTime + 1));
    }

    hash[musicinfo[2]] = [str.join(''), playTime, i];
  }

  for (let key in hash) {
    let infos = hash[key];

    if (infos[0].length > m.length) {
      for (let i = 0; i <= infos[0].length - m.length; i++) {
        let str = m.slice(i, i + infos[1] + 1);
        if (str[str.length - 1] === '#') continue;
        else {
          if (infos[0].slice(i, i + m.length) === m) {
            if (answer && hash[answer][0].length > infos[0].length) {
              answer = key;
            } else if (!answer) {
              answer = key;
            }

            break;
          }
        }
      }
    } else {
      for (let i = 0; i < m.length; i++) {
        let str = m.slice(i, i + infos[1] + 1);
        if (str[str.length - 1] === '#') continue;
        else {
          if (m.slice(i, i + infos[1]) === infos[0]) {
            if (answer && hash[answer][0].length > infos[0].length) {
              answer = key;
            } else if (!answer) {
              answer = key;
            }

            break;
          }
        }
      }
    }
  }
  return answer === '' ? '(None)' : answer;
}

// console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(solution('CC#BCC#BCC#', ['03:00,03:08,FOO,CC#B']));
