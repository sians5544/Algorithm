// 하루동안의 총 수익을 return 하라

function solution(ings, menu, sell) {
  let result = 0;
  // 재료의 정보 담는 해쉬
  let hashing = new Map();
  // 하루동안의 판매 내역 
  let sellhash = new Map();

  for (let ing of ings) {
    let hash = ing.split(' ');
    hashing.set(hash[0], Number(hash[1]));
  }


  for(let s of sell){
    let hash = s.split(" ");
    sell.set(hash[0],Number(hash[1]));
  }

  for (let m of menu) {
    let m_list = menu.split(' ');
    
    let menu_name = m_list[0];
    let ing_list = m_list[1];
    let menu_price = m_list[2];

    
  }

  return result;
}

// 재료의 정보 (재료명(ing_name) - 재료 구매 비용(ing_price))
let ings = ['r 10', 'a 23', 't 124', 'k 9'];
// 알파벳의 개수는 해당 메뉴를 만들 때 필요한 재료의 수 ( menu_name,ing_list,menu_price)
let menu = [
  'PIZZA arraak 145',
  'HAMBURGER tkar 180',
  'BREAD kkk 30',
  'ICECREAM rar 50',
  'SHAVEDICE rar 45',
  'JUICE rra 55',
  'WATER a 20',
];

//음식점에서 PIZZA 를 만들기 위해서 6개의 재료(a - 3 개, r-2개, k-1개)
// 총 재료 비용 (23*3) + (10*2) +(9*1) = 98 원
// 피자 한개를 팔면 얻을 수 있는 수익 판매가 - 재료비 = 수익  47원이다

//하루 동안의 판매 실적
//[menu_name, sell_count]
let sell = ['BREAD 5', 'ICECREAM 100', 'PIZZA 7', 'JUICE 10', 'WATER 1'];

console.log(solution(ings, menu, sell)); //1161
