let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a); //false
console.log(b, typeof b); //true
console.log(c, typeof c); //true
console.log(d, typeof d); //true


//코드 간결화
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

error
  ? console.error('오류 발생!') 
  : console.log('이상 없음');



let x = true;
// x = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let y = x && 'abc';
let z = x || 123;

console.log(y, z); //when x is true, y is abc and z is true



//truthy
console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(
  1.23 == true, //false
  ' ' == true, //false
  {} == true //false
);

//falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false, //true
  0 === false, //false
  '' == false, //true
  '' === false //false
);
console.log(
  null == false, //false
  undefined == false, //false 
  NaN == false, //false 
);



let x1 = '';
let y1 = '회사원';
let z1 = x1 || y1; //반환값은 뒤에 있는 값으로 들어감

console.log(z1);

x1 = x1 || '단기알바';
y1 = y1 || '단기알바';

console.log(x1, y1);



// ⭐️ 두 번 부정하여 해당 boolean값으로 변환
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);