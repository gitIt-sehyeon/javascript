//assign
const intro1 = {
  name: '홍길동'
};
const intro2 = { ...intro1 };

console.log(intro1, intro2);

const personal = {
  age: 25,
  married: false
};
const career = {
  job: '개발자',
  position: '팀장'
}

Object.assign(intro1, personal);
console.log(intro1);
// 둘 이상의 원본에서 가져올 수도 있음
Object.assign(intro2, personal, career);
console.log(intro2);


//keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환
let obj = {
  x: 1,
  y: 2,
  z: 3
};

console.log(
  Object.keys(obj),
);
console.log(
  Object.values(obj),
);
console.log(
  Object.entries(obj),
);

// 배열에 사용할 경우
const arr = [1, 2, 3, 4, 5];

console.log(
  Object.keys(arr),
  Object.values(arr),
  Object.entries(arr)
);

// 객체가 아닐 경우 객체로 변환
const str = 'ABCDEFG';

console.log(
  Object.keys(str),
  Object.values(str),
  Object.entries(str)
);


//preventExtensions - 프로퍼티 추가 금지
obj = { x: 1, y: 2 };

console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);

console.log(Object.isExtensible(obj));
obj.x++; // 프로퍼티 수정 가능
delete obj.y // 프로퍼티 삭제 가능
obj.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj);


//seal - 프로퍼티 추가와 삭제 금지
const obj = { x: 1, y: 2 };

console.log(Object.isSealed(obj)); //isSealed는 금지 되어있는지 확인
Object.seal(obj);

console.log(Object.isSealed(obj));

obj.x++; // 프로퍼티 수정 가능
delete obj.y // 💡 프로퍼티 삭제 금지
obj.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj);


//freeze - 객체 동결 - 읽기만 가능
// 객체에 사용
const obj = { x: 1, y: 2 };

console.log(Object.isFrozen(obj));
Object.freeze(obj);

console.log(Object.isFrozen(obj));
obj.x++; // 💡 프로퍼티 수정 불가
delete obj.y // 💡 프로퍼티 삭제 금지
obj.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj);

//얕게만 적용
const obj = {
  x: 1,
  y: { a: 1 }
};

Object.freeze(obj);

obj.x++;
obj.y.a++; //객체 안의 객체는 바뀜

console.log(obj);