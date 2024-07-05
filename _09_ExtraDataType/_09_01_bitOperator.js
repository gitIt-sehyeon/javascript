// 2진법 binary
// 0b 뒤로 숫자 0, 1 를 붙여 표현
[
  0b1,
  0b10,
  0b11,
  0b100,
  0b101
].forEach(i => console.log(i))

// 8진법 octal
// 0o 뒤로 숫자 0~7 를 붙여 표현
// [0o7, 0o10, 0o100, 0o1000].forEach(i=>console.log(i));

// 16진법 hexadecimal
// 0x 뒤로 숫자 0~9, A~F 를 붙여 표현
// [
//   0x9,
//   0xA,
//   0xB,
//   0xC,
//   0xd,
//   0xe,
//   0xf,
//   0x10,
//   0xFFFFFF
// ].forEach(i => console.log(i))



//⭐️ 진법 간 변환
const num = 123456789;

const binStr = num.toString(2);
const octStr = num.toString(8);
const hexStr = num.toString(16);

console.log(binStr, octStr, hexStr);

console.log(
  parseInt(binStr, 2),
  parseInt(octStr, 8),
  parseInt(hexStr, 16)
);



//II. 비트 연산자들
let x = 0b1010101010; // 682
let y = 0b1111100000; // 992

// 양쪽 모두 1인 자리에 1
const bitAnd = x & y;

console.log(bitAnd);
console.log(
  bitAnd.toString(2)
);

// 한 쪽이라도 1인 자리에 1
const bitOr = x | y

console.log(bitOr);
console.log(
  bitOr.toString(2)
);

// 양쪽이 다른 자리에 1
const bitXor = x ^ y;

console.log(bitXor);
console.log(
  bitXor.toString(2)
);

// 각 비트 반전
console.log(~x);
console.log(
  (~x).toString(2)
);



let a = 0b101; // 5

console.log(a.toString(2), a);

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
a = a << 1;

console.log(a.toString(2), a);

a = a >> 1;

console.log(a.toString(2), a);
