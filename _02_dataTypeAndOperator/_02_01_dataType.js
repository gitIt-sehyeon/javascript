//자료형
const a =true, b=123.45, c= "hi";
console.log(a, typeof(a));

let d;
console.log(d, typeof d); //undefined 반환

d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

//javascript는 정수와 실수의 차이가 없음

console.log(
  typeof (typeof true),
  typeof (typeof 123.45),
  typeof (typeof 'Hello'),
); //반환값이 String

typeof null; //object 스트링을 반환함