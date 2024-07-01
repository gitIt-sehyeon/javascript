const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(numObj1, numObj2, numObj3);
console.log(
  numObj1.valueOf(),
  numObj2.valueOf(),
  numObj3.valueOf()
);


//EPSILON
console.log((0.1 + 0.2) - 0.3 < Number.EPSILON) //0.1 + 0.2 가 0.3과 같은지 


//isFinite, isNaN
console.log(
  isFinite(null), // null을 0으로 변환
  Number.isFinite(null) //false, 숫자 타입이 아니면 무조건 false
);

console.log(
  isNaN('abc'), // 숫자타입의 NaN으로 변환
  Number.isNaN('abc') // 숫자타입 자체가 아니므로 false
);


// toExponential
// 지수 표기법으로 나타내는 문자열을 반환
const numInExp = (123.456789).toExponential();
console.log(
  typeof(numInExp), numInExp
);


//toFixed
//최대 인자값으로 주어진 정수(0~20)만큼 소수점 이하를 반올림하여 문자열로 반환
console.log(
  // 반올림
  (111.234567).toFixed(3), 
  (111.234567).toFixed(4), //return String
  Number((111.234567).toFixed(3)) //return Number
);



// toPrecision
// 반올림과 지수 표기법을 사용하여 문자열 반환
console.log(
  // 인자가 없으면 toString처럼 그대로 문자열로 반환
  (1234.56789).toPrecision()
);
// 인자가 정수부 자릿수보다 적으면 지수로
console.log(
  (1234.56789).toPrecision(1),
  (1234.56789).toPrecision(2),
  (1234.56789).toPrecision(3)
);
// 반올림
console.log(
  (1234.56789).toPrecision(4),
  (1234.56789).toPrecision(6),
  (1234.56789).toPrecision(8)
);


// toString
// 문자열 값 반환
// 인자 2~36 가 주어지면 해당 수의 진수로 표현
console.log(
  (11).toString(),
  (11).toString(2),
  (11).toString(8),
  (11).toString(16)
);