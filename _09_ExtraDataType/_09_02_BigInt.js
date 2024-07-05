const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt('9007199254740991');
const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991


// BigInt의 특징들
// 일반 number 타입과 산술 (+, -, *, /, %, **) 연산 불가

// console.log( //불가
//   1n + 1
// );

console.log(
  1n + 1n
);

// 양쪽 모두 BigInt로 변환하여 계산하는 방법 사용
const calcAsBigInt = (x, y, op) => {
  return op(BigInt(x), BigInt(y));
}

console.log(
  calcAsBigInt(1n, 1, (x, y) => x + y)
);



//비교 연산 가능
console.log(
  1n === 1, // 타입은 다름
  1n == 1,
  1n < 2,
  1n >= 0,
  2n < 1
);


//number 숫자와 섞여 정렬 가능
console.log(
  [4n, 7, 6n, 3, 1, 5, 9, 2n, 8n]
  .sort((a, b) => a > b ? 1 : -1)
);

//불리언으로 변환되는 연산 가능
console.log(
  !!(0n),
  !!(1n)
);

//소수점 아래는 버림 
console.log(
  5n / 2n
);

// Math의 정적 메서드에서 사용 불가
console.log(
  Math.max(1n, 2n)
);

// number로 변환 - 정확성 유실 주의!
console.log(
  Number(1n),
  Number(9007199254740993n)
);