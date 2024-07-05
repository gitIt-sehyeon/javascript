const mySymbol = Symbol(); //don't use new

console.log(typeof mySymbol, mySymbol);

// 문자열 값을 인자로 줄 수 있음
// 해당 심벌에 대한 설명일 뿐, 각 심벌의 값은 유일무이

let symbol1 = Symbol('hello');
let symbol2 = Symbol('hello');

console.log(symbol1, symbol2);

// 래퍼 객체(Symbol)의 인스턴스 프로퍼티
console.log(symbol1.description, symbol2.description);


// ⭐️ 객체에서의 활용
// 객체의 키로 사용시: [, ]로 감쌈
const buildingKey = Symbol('secret');

const building = {
  name: '얄코사옥',
  floors: 3,
  [buildingKey]: '1234#'
}

console.log(building);

console.log(
  building.name,
  building.floors,
  building[buildingKey]
);

// 외부로부터의 접근 차단
console.log(
  building[Symbol('secret')]
);


//⭐️ 아래의 방법들로는 접근되지 않음
for (key in building) {
  console.log(key);
}
console.log(
  Object.keys(building),
  Object.values(building),
  Object.entries(building),
  Object.getOwnPropertyNames(building)
);

//💡 아래의 Object 정적 메서드로 접근 가능 (배열로 반환)
console.log(
  Object.getOwnPropertySymbols(building),
  Object.getOwnPropertySymbols(building)[0],
);
console.log(
  building[
    Object.getOwnPropertySymbols(building)[0]
  ]
);


// II. 전역 심볼 레지스트리 global symbol registry
// 키가 중복되지 않는 심볼들이 저장되는 공간
// 전역 심볼 레지스트리에 해당 키로 등록된 키가 없을 시:
// 심볼을 새로 생성
symbol1 = Symbol.for('hello');

// 전역 심볼 레지스트리에 해당 키가 존재할 시:
// 해당 심볼을 반환
symbol2 = Symbol.for('hello');

console.log(symbol1 === symbol2); //true

const obj = {
  [symbol1]: 'SECRET STRING'
}

console.log(
  obj[Symbol.for('hello')]
);
// ⚠️ for 메서드로 생성되지 않은 심볼과는 다름
const symbol3 = Symbol('hello'); // 전역 심볼 레지스트리에 저장 ❌

console.log(symbol1 === symbol3);

//keyFor : 정적 심볼 레지스트리에 저장된 심볼의 키 반환
console.log(
  Symbol.keyFor(symbol1),
  Symbol.keyFor(symbol2)
);  



//example
// 숫자 요소들의 평균을 구하는 메서드 추가
Array.prototype[Symbol.for('average')] = function () {
  let sum = 0, count = 0;
  for (const i of this) {
    if (typeof i !== 'number') continue;
    count++;
    sum += i;
  }
  return sum/count
}
[1, 2, 3, 4, 5, 6][Symbol.for('average')]();
// 위와 같이 표준 빌트인 객체에 직접 만든 메서드를 만들어 넣을 경우
// 이후 버전의 자바스크립트에서 같은 이름으로 메서드가 추가되더라도
// 커스텀 메서드가 덮어씌워지지 않도록 하기 위한 용도로 쓰일 수 있습니다.