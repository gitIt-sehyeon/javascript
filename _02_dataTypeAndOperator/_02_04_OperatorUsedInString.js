console.log(
  '1' === '1', //true
  '1' === 1, //false
  '1' === 2 //false
);

console.log(
  '1' !== '1', //false
  '1' !== 1, //true
  '1' !== 2 //true
);
//=== 이렇게 쓰면 자료형까지 비교함

// ⚠️ 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교
  '100' > '12', // 문자는 사전순으로 비교
  '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환
);


//1이랑 true가 String으로 들어감 
let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result); //String 

//null이랑 undefined가 String으로 들어감
result += null;
result += undefined;

console.log(result);
console.log(typeof result); //String