function* genFunction () {
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const genFunc = genFunction();

// 반복 수행해 볼 것
// 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
console.log( genFunc.next() );
console.log( genFunc.next() );
console.log( genFunc.next() );


// 함수 선언
function* genFunc1 () {
  yield 'genFunc1';
}

// 값으로 대입
const genFunc2 = function* () {
  yield 'genFunc2';
}

// 객체의 메서드
const obj = {
  * genFunc3 () {
    yield 'genFunc3';
  }
}

// 클래스의 메서드
class MyClass {
  * genFunc4 () {
    yield 'genFunc4';
  }
}

// 테스트
console.log(
  genFunc1().next().value,
  genFunc2().next().value,
  obj.genFunc3().next().value,
  new MyClass().genFunc4().next().value,
);



function* diceTenTimes () {
  let count = 0;
  const maxCount = 10;

  while (count++ < maxCount) {
    yield Math.ceil(Math.random() * 6);
  }
}

// 이터러블
console.log(
  [...diceTenTimes()]
);

// 이터레이터 - 객체로 반환 뒤 사용
// ⚠️ 다시 순회시 재생성 필요
let diceGenObj = diceTenTimes();

for (let i = 0; i < 12; i++) {
  console.log(diceGenObj.next());
}