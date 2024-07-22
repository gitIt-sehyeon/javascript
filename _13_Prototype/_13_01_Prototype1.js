//Object.getPrototypeOf
console.log(
  Object.getPrototypeOf({})
);
console.log(
  Object.getPrototypeOf([]) === [].__proto__
);

//⭐ 생성자 함수에서는 prototype으로 프로토타입 접근 가능
function Person (name) {
  this.name = name;
}
// 인스턴스들에 공유될 프로토타입에 다음과 같이 접근
console.log(Person.prototype);

const hong = new Person('홍길동');
console.log(hong);





function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

let chain1 = new YalcoChicken('판교', 3);

// 본사에서 새 업무를 추가
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

console.log(chain1.introEng());
console.log(new YalcoChicken('강남', 17).introEng());


// introduce : 만들어지는 인스턴스마다 각각 있음
// introEng : 프로토타입에만 있음 - 메모리 절약

function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
}

// 공통된 요소들은 프로토타입 프로퍼티로
YalcoChicken.prototype.titleEng = 'YalcoChicken';

YalcoChicken.prototype.introduce = function () {
  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
}

YalcoChicken.prototype.introEng = function () {
  return `Welcome to ${this.titleEng} at ${this.name}!`;
};

chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1.introduce());
console.log(chain1.introEng());

// 인스턴스 레벨과 프로토타입 프로퍼티들 비교
console.log(chain1, chain2, chain3);

//💡 프로토타입 레벨의 함수를 인스턴스 레벨에서 덮어쓰기 가능
const chain4 = new YalcoChicken('평양', 456);
chain4.introduce = function () {
  return `어서오시라요, ${this.no}호 ${this.name}점입네다!`;
}

console.log(chain4.introduce());


//⭐ 클래스에도 적용 가능 class에서 매서드는 프로토타입에 저장됨
class Dog {
  constructor (name) {
    this.name = name;
  }
}

Dog.prototype.sound = '멍멍'; //굳이 이렇게 안해도 되지만 class에서도 똑같이 활용 된다는 것을 보여주기 위함
Dog.prototype.bark = function () { // 메서드로 만드는 것과 같음
  console.log(this.sound)
};

const badugi = new Dog('바둑이');

badugi.bark();

console.log(badugi);