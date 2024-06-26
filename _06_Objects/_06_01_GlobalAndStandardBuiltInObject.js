//global object
console.log(globalThis);


//standard built-in objects
//Don't need globalThis. before function
console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);

//wrapper object
// Number, String, Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
// 원시값을 필요시 래퍼 객체로 감싸서 wrap 그것의 인스턴스로 만들어 기능 실행
// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생
const str = 'abcde';
console.log(
  str.length,
  str.toUpperCase(),
  str[0]
);
const num = 123.4567;
console.log(
  typeof num.toString(),
  num.toFixed(2)
);

const str2 = new String('abcde'); 
const num2 = new Number(123.4567);
const bool2 = new Boolean(true);

console.log(typeof str2, str2); //type is object
console.log(typeof num2, num2);
console.log(typeof bool2, bool2);