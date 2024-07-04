//1. stringify - 객체를 문자열로 직렬화 serialize
const person = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};

const personStr = JSON.stringify(person);

console.log(typeof personStr);
console.log(personStr);


// 💡 2번째 인자: replacer 함수
// 직렬화될 방식을 지정

let obj = {
  a: 1,
  b: '2',
  c: 3,
  d: true,
  e: false
}

// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj, (key, value) => {
  if (key && key < 'a' || key > 'c') {
    // 해당 프로퍼티 생략
    return undefined;
    // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
    // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
    // key와 value를 로그로 출력해보며 확인해 볼 것
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  return value;
});
console.log(objStr1);

// 2. 반환한 key의 배열 매개변수
const objStr2 = JSON.stringify(obj, ['b', 'c', 'd']);
console.log(objStr2);


//3번째 인자: 인덴트
obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

[
  JSON.stringify(obj, null),
  JSON.stringify(obj, null, 1),
  JSON.stringify(obj, null, 2),
  JSON.stringify(obj, null, '\t')
]
.forEach(i => console.log(i));



//객체의 toJSON 프로퍼티
obj = {
  x: 1,
  y: 2,
  toJSON: function () {
    return '훗, 나를 직렬화해보겠다는 건가';
  }
}

console.log(
  JSON.stringify(obj)
);


//2. parse - 역직렬화
//2번째 인자 receiver 함수
const objStr = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';

obj = JSON.parse(objStr, (key, value) => {
  if (key === 'c') { 
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
});

console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)


//III. 깊은 복사 deep copy
let obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}

let obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
console.log(obj2);
// 함수, Date, Symbol, BigInt 프로퍼티는 JSON 방식으로는 불가 또는 제한적



// ⭐️ structuredClone
// 아직은 일부 브라우저(Web API 형태로) 및 환경에서만 지원
// JSON 방식보다 빠르고 효율적인 깊은 복사
// Date와 BigInt 제대로 복사 - 함수와 Symbol은 여전히 불가

obj1 = {
  a: 1,
  b: 2,
  // c: function () { return this.a + this.b },
  d: new Date(),
  // e: Symbol('안녕'),
  g: 1n
}

obj2 = structuredClone(obj1);

console.log(obj1);
console.log(obj2);