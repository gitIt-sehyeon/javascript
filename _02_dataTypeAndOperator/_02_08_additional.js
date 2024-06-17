//쉼표 연산자 
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
);


//null 병합 연산자, null이랑 undefined일때만 뒤에꺼 실행 
let x1;
x1 ?? console.warn(x1, 'x1에 값이 없습니다.');

x1 = 0;
x1 ?? console.warn(x1, 'x1에 값이 없습니다.');

x1 = null;
x1 ?? console.warn(x1, 'x1에 값이 없습니다.');



let x2 = 0;
let y2 = '';
let z2 = null;

x2 ||= 100;
y2 &&= '있어야 바뀜';
z2 ??= '기본값';

console.log(x2, y2, z2);