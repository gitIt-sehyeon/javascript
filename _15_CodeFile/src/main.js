// 💡 필요한 것만 선별하여 가져오기
import { x, y } from './module1.js';
import { add, mult } from './module2.js';
import { Eagle } from './module3.js';

//💡 위와 같이 원하는 이름으로 바꾸어 가져올 수 있음 - 식별자 중복 방지
// import { 
//   x as a,
//   y as b,
//   person as individual
// } from './module1.js';

// console.log(a, b);
// console.log(individual);

console.log(
  add(x, y), mult(x, y)
);

const eagle = new Eagle('이글이', '푸드덕', '사슴');
eagle.hunt();

import * as funcs from './module4.js';

// 💡 로그 살펴볼 것!
console.log(funcs);

funcs.logResult(
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter(funcs.isOdd)
  .map(funcs.square)
  .join(', ')
);


import mod5 from './module5.js';

console.log(mod5);

console.log(
  mod5.arry
  .filter(mod5.isEven)
  .join(', ')
);

const raceResults = await fetch(
  'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
.then(response => response.json())

console.log(raceResults);


import Big from './big.mjs';

console.log(Big);

console.log(
  0.1 + 0.2,
  new Big(0.1).plus(0.2).toNumber()
);

console.log(
  0.2 * 0.7,
  new Big(0.2).times(0.7).toNumber(),
);

console.log(
  0.9 - 0.6,
  new Big(0.9).minus(0.6).toNumber()
);