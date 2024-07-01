
// PI - 원주율
console.log(
  Math.PI
);

// E - 자연로그의 밑
console.log(
  Math.E
);


//abs - 절대값(0 이상) 반환
console.log(
  Math.abs(123),
  Math.abs(-123),
);


//ceil 올림, round 반올림, floor 내림, trunc 정수부만
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + ' : ',
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num),
  );
}

//pow - ~로 거듭제곱
console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0
  Math.pow(4, -1) // 4 ** -1
);

//sqrt - 제곱근
console.log(
  Math.sqrt(25), // 25 ** 0.5
  Math.sqrt(9),
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);

//max, min - 인자들 중 최대값과 최소값
console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);

//random - 0~1 사이의 무작위 값
for (let i = 0; i < 10; i++) {
  console.log(Math.random());
}

for (let i = 0; i < 10; i++) { //0 ~ 9 사이의 정수 무작위로 만들기
  console.log(
    Math.floor(Math.random() * 10)
  );
}


//sin, cos, tan, asin, acos, atan
console.log(
  // 1(또는 근사값) 반환
  Math.sin(Math.PI / 2),
  Math.cos(Math.PI * 2),
  Math.tan(Math.PI / 180 * 45)
);