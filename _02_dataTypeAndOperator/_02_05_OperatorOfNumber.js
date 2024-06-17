let x = 1 / 0;
console.log(x, typeof x); //infinity 출력 type is number

let y = -1 / 0;
console.log(y, typeof y); //-infinity 출력 type is number

let z = Infinity;
console.log(z, typeof z); 


let x1 = 1 / 'abc'; //NaN 출력 but type is number
let y1 = 2 * '가나다';
let z1 = NaN;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



let x2 = 1 / 'abc';

console.log(
  x2,
  x2 == NaN, //false
  x2 === NaN, //false 
  isNaN(x2), // 숫자가 아닐 시 true
  Number.isNaN(x2) // 보다 엄격한 버전
);


// 값 반환
let x3 = 10;
let y3 = x * 10;

console.log(y);
console.log(
  y3 + 1, // 덧샘
  y3 - 1, // 뺄셈
  y3 * 2, // 곱셈
  y3 / 5, // 나눗셈
  y3 % 3,  // 나머지
  y3 ** 2 // 제곱
);


console.log(
  +'100', //숫자로 변함
  -'100', //숫자로 변함
  +'abc' // 숫자로 변환될 수 없는 문자열
);