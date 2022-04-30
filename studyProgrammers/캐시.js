function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  const CACHE_HIT = 1;
  const CACHE_MISS = 5;

  if (cacheSize === 0) return cities.length * CACHE_MISS;

  // 캐시가 꽉차면 최근에 가장 적게 사용된 애들을 교체하는 방법
  // 적재 된 값들은 맨 뒤로 보내주는 작업이 필요하다!

  for (let i = 0; i < cities.length; i++) {
    let str = cities[i].toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let index = cache.indexOf(str);

    if (index === -1) {
      if (cache.length >= cacheSize) cache.shift();
      cache.push(str);
      answer += CACHE_MISS;
    } else {
      cache.push(...cache.splice(index, 1));
      answer += CACHE_HIT;
    }
  }

  return answer;
}
