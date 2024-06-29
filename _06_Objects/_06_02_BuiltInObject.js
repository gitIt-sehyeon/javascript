//eval - 문자열로 된 코드를 받아 실행
const x = eval('1 + 2 + 3');

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval('({a: 1, b: 2})');

console.log(x, obj);

const code = `
  let x = 1;
  console.log(x++, x);
`;

eval(code);
// ⚠️ 매우 특별한 경우가 아닌 이상 절대 사용하지 말 것
// ☢️ 보안에 취약함
// 엔진이 코드를 최적화하지 못하므로 처리 속도가 느림



//isFinite - 유한수 여부 반환
console.log( //true
  isFinite(1),
  isFinite(0),
  isFinite('1'),
  isFinite(null)
);
console.log( //false
  isFinite(1/0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite('abc')
);


//isNaN - NaN 여부 반환
console.log(
  isNaN(NaN),
  isNaN('abcde'),
  isNaN({}),
  isNaN(undefined)
);


//parseFloat - 인자로 받은 값을 실수로 변환
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 ')
);
console.log(
  parseFloat('123.0'),
  parseFloat('123'),
  parseFloat(' 123ABC '), //숫자로 읽을 수 있는 곳까지 
  parseFloat([123, 456, 789]) //첫요소만 반환
);
console.log( //return NaN
  parseFloat('ABC123'),
  parseFloat({x: 1}),
  parseFloat([]),
  parseFloat(['a', 1, true])
);



//parseInt - 인자로 받은 값을 정수(타입은 실수)로 변환
console.log(
  parseInt(123),
  parseInt('123'),
  parseInt(' 123.4567 '),
  parseInt('345.6789')
);
console.log( //return NaN
  parseInt('abc'),
  parseInt('{}'),
  parseInt('[]')
);

//주어진 값을 해당 진법의 숫자로 해석하여 10진법 숫자로 반환
//무효한 숫자는 NaN 반환
console.log(
  parseInt('11'),
  parseInt('11', 2), //consider first number in binary
  parseInt('11', 8),
  parseInt('11', 16),
  parseInt('11', 32),

  parseInt('11', 37),
  parseInt('11', 'A'),
);


//encodeURI, encodeURIComponent
//1번째는 전체 uri에서 특정 한글같은 글자만 ascii 코드로 변환 -> 전체를 변환할 때
//2번째는 전체 uri를 전부 ascii코드로 변환 -> 특정 키워드만 변환할 때 
const searchURI = 'https://www.google.com/search?q=얄코'; 
const encodedURI = encodeURI(searchURI); //turn korean into ascii code
console.log(encodedURI);

const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);
console.log(encodedKeyword);

const searchURI2 = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchURI2);



//decodeURI, decodeURIComponent
//The opposite of the above
const encodedURI2 = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI = decodeURI(encodedURI2);

console.log(decodedURI);

const encodedComp = '%EC%96%84%EC%BD%94';
const decodedComp = decodeURI(encodedComp);

console.log(decodedComp);