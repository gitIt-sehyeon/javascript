const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space'
}

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );


let idx = 0;
const  obj2 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}

console.log(obj2);


//delete
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);
delete person1.age;
console.log(person1);



//키의 동적 활용 
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}
addModifyProperty (product1, 'inch', 16);
console.log(product1);

//키와 대입할 변수명이 같을 때 그냥 대괄호 안에 저렇게 넣어도 됨
function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product3 = createProduct('선풍기', 50000, 50);
const product2 = createProduct('청소기', 125000, 32);

console.log(product3, product2);



// ⭐️ 메서드 정의 객체 안에 함수를 저렇게 넣을 수 있음 
const person = {
  name: '홍길동',
  
  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));