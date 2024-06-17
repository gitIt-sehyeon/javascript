let x = 0;
while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}


x = 12;

do { //일단 한번 실행하고 조건을 확인함
  console.log(x++);
} while (x < 10);