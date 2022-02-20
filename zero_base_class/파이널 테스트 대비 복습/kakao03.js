//fees [ 기본시간(분) , 기본요금(원),단위 시간 (분), 단위 요금(원)]
//records [시각(시:분), 차량번호, 내역]
// records 시각 오름차순으로 정렬되어서 주어지면 out 이 먼저 오는 경우 x
//차량번호가 작은 차량부터 return 에 담아서 정렬

function solution(fees, records) {
  let result = [];
  let hash = new Map();

  //주차시간 기록  map 세팅
  for (let record of records) {
    let carinfo = record.split(' ');
    let time = Number(carinfo[0].split(':')[0]) * 60 + Number(carinfo[0].split(':')[1]);
    let list = hash.has(carinfo[1]) ? hash.get(carinfo[1]) : [];

    // hash key :차량번호- [이용시간] (하루에 여러번 입출 이루어질수 o -> 배열)
    if (carinfo[2] === 'IN') {
      list.push(1439 - time);
      hash.set(carinfo[1], list);
    } else {
      list.push(list.pop() - (1439 - time));
      hash.set(carinfo[1], list);
    }
  }

  //차량번호 작은 순으로 정렬
  let hashtoArray = [...hash];
  hashtoArray.sort((a, b) => a[0] - b[0]);

  for (let car of hashtoArray) {
    let total = car[1].reduce((sum, value) => {
      return sum + value;
    }, 0);

    //초과 시간이 단위 시간으로 나누어 떨어지지 않을 시에 올림 math.ceil 사용
    if (total > fees[0]) {
      result.push(fees[1] + Math.ceil((total - fees[0]) / fees[2]) * fees[3]);
    } else {
      result.push(fees[1]);
    }
  }

  return result;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);
console.log(
  solution(
    [120, 0, 60, 591],
    ['16:00 3961 IN', '16:00 0202 IN', '18:00 3961 OUT', '18:00 0202 OUT', '23:58 3961 IN']
  )
);
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN']));

function solution(fees, records) {
  const FINISH_TIME = 23 * 60 + 59;

  let in_dict = new Map(),
    out_dict = new Map();

  let [org_time, org_fee, add_time, add_fee] = fees;

  for (let record of records) {
    let [time, car, check] = record.split(' ');
    let delay = +time.split(':')[0] * 60 + +time.split(':')[1];
    if (check === 'IN') in_dict.set(car, delay);
    else {
      let in_time = in_dict.get(car);
      in_dict.delete(car);
      let p_time = delay - in_time;
      if (out_dict.get(car)) out_dict.set(car, out_dict.get(car) + p_time);
      else out_dict.set(car, p_time);
    }
  }

  for (let [i, t] of in_dict.entries()) {
    if (out_dict.get(i)) out_dict.set(i, out_dict.get(i) + FINISH_TIME - t);
    else out_dict.set(i, FINISH_TIME - t);
  }

  for (let [i, t] of out_dict.entries()) {
    if (t <= org_time) out_dict.set(i, org_fee);
    else out_dict.set(i, org_fee + Math.ceil((t - org_time) / add_time) * add_fee);
  }

  return [...out_dict].sort().map((a) => a[1]);
}
