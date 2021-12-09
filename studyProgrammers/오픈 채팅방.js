function solution(records) {
  var answer = [];
  let hash = new Map();

  for (let record of records) {
    let userInfo = record.split(' ');
    let list = hash.has(userInfo[1]) ? hash.get(userInfo[1]) : '';

    if (userInfo[0] === 'Enter') {
      hash.set(userInfo[1], userInfo[2]);
      answer.push(userInfo[1] + '님이 들어왔습니다.');
    } else if (userInfo[0] === 'Change') {
      hash.set(userInfo[1], userInfo[2]);
    } else {
      answer.push(userInfo[1] + '님이 나갔습니다.');
    }
  }
  console.log(hash);

  for (let [key, value] of hash) {
    console.log(key, value);
    answer.forEach((item, index, arr) => {
      arr[index] = item.replace(key, value);
    });
  }
  return answer;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
/////////////////여기까지는 테스트 케이스 32개 중에 7개밖에 통과 못한 소스
// 문제점 1. answer 을 2차원 배열로 하지 않고 "uid1234님이 들어왔습니다" 라고 하나의 문자열로 통째로 넣어줌
// 문제점 2. answer 을 통째의 문자열로 넣어주는 바람에 uid1234 를 거르는 법이 어려워진다 , replace 를 쓰려면 hash의 들어있는 length 개수의 for문 안에 또 answer 전체 length를 도는 O(n*n) 형태로
// 시간 초과 에러가 발생했다

/// 해결 방안

// answer 을 2차원 배열로 선언 [uid, "님이 들어왔습니다"] 멘트로 구성해서 map 을 사용해서 해당 uid 를가진 hash을 세팅해주면 되었다!!

// 통과한 소스
function solution(records) {
  var answer = [];
  let hash = new Map();

  for (let record of records) {
    let userInfo = record.split(' ');

    if (userInfo[0] === 'Enter') {
      hash.set(userInfo[1], userInfo[2]);
      answer.push([userInfo[1], '님이 들어왔습니다.']);
    } else if (userInfo[0] === 'Change') {
      hash.set(userInfo[1], userInfo[2]);
    } else {
      answer.push([userInfo[1], '님이 나갔습니다.']);
    }
  }

  return answer.map((user) => hash.get(user[0]) + user[1]); //  map을  사용해서 시간초과도 줄고 정확성도 맞췄다
}
