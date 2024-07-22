function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}

// ⚠️ 순서 주의! 상속을 먼저 받음
Eagle.prototype = Object.create(Bird.prototype);
// Eagle.prototype = Bird.prototype; // 💡 비교해 볼 것

// 상속 이후 자신의 프로토타입 작성
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}


let bird = new Bird('새돌이', '파닥파닥');
let eagle = new Eagle('독돌이', '푸드덕', '토끼');

// 상속 구조 확인
console.log(bird);
console.log(eagle);

console.log(
  eagle instanceof Bird,
  bird instanceof Eagle
);

bird.fly();
eagle.fly();
eagle.hunt();



// II. 부모의 생성자 활용하기
// 생성자에서 중복되는 부분 위임
// class에서는 constructor에서 super 사용

function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  // 💡 call 호출방식 사용
  Bird.call(this, name, sound);
  this.prey = prey
}

Eagle.prototype = Object.create(Bird.prototype);

Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(eagle);

eagle.fly();
eagle.hunt();



// III. 클래스로 구현
// ⭐ 클래스 역시 프로토타입을 기반으로 구현됨

// 클래스와 프로토타입
// 클래스의 메서드는 프로토타입으로 들어가게 됨
// extends - 프로토타입 상속도를 만듦

function AAA () {
  this.field = 1;
  this.run = function () { return 1; };
}

class BBB {
  field = 1;
  run = function () { return 1; }
}

class CCC {
  field = 1;
  run () { return 1; }
}

console.log(new AAA()); // 인스턴스에 속함
console.log(new BBB()); // 인스턴스에 속함
console.log(new CCC()); // 프로토타입에 속함


// ♻️ 새로고침 후 실행

class Bird {
  constructor (name, sound) {
    this.name = name;
    this.sound = sound;
  }
  fly () {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
}

class Eagle extends Bird {
  constructor (name, sound, prey) {
    super(name, sound);
    this.prey = prey;
  }
  hunt () {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }
}

bird = new Bird('새돌이', '파닥파닥');
eagle = new Eagle('독돌이', '푸드덕', '토끼');

console.log(bird);
console.log(eagle);

bird.fly();
eagle.fly();
eagle.hunt();


// IV. Mixin - Object.assign으로 조립하기
// 상속 - 한 부모로부터만 물려받음
// 믹스인 - 여럿을 조합하여 가져올 수 있음

const runner = {
  run : function () {
    console.log(`${this.name} 질주중`);
  }
}
const swimmer = {
  swim: function () {
    console.log(`${this.name} 수영중`);
  }
}
const flyer = {
  fly: function () {
    console.log(`${this.name} 비행중`);
  }
}
const hunter = {
  hunt: function () {
    console.log(`${this.name} 사냥중`);
  }
}

class Owl {
  constructor (name) {
    this.name = name;
  }
}

class FlyingFish {
  constructor (name) {
    this.name = name;
  }
}

class PolarBear {
  constructor (name) {
    this.name = name;
  }
}

Object.assign(Owl.prototype, flyer, hunter);
Object.assign(FlyingFish.prototype, flyer, swimmer);
Object.assign(PolarBear.prototype, runner, swimmer, hunter);

const owl = new Owl('붱돌이');
const f_fish = new FlyingFish('날치기');
const p_bear = new PolarBear('극곰이');

console.log(owl);
console.log(f_fish);
console.log(p_bear);

owl.fly();
owl.hunt();

f_fish.swim();
f_fish.fly();

p_bear.run();
p_bear.swim();
p_bear.hunt();