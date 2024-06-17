//block 안쪽에서는 바깥 거를 접근 가능
let x = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x);
//console.log(y); // y가 블록 안에서 선언 되었으므로 접근 불가능



const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~';

  console.log(xx, yy);
  // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy);



//example
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);