const person1 = {
  age: 17,

  get koreanAge () {
    return this.age + 1;
  },

  set koreanAge (krAge) {
    this.age = krAge - 1;
  }
}
console.log(person1, person1.koreanAge);
person1.koreanAge = 20;
console.log(person1, person1.koreanAge);



class YalcoChicken { //생성자에 있는 변수랑 get, set 이름을 같게 하면 편함
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get no () { 
    return this._no + '호점'; 
  }
  set no (no) { 
    this._no = no; //무한루프를 돌 수 있으니 this._no를 써야함
  }
}

const chain1 = new YalcoChicken('판교', 3);
console.log(chain1);
console.log(chain1.no);




//캡슐화, 인스턴스의 프로퍼티 값을 함부로 열람하거나 수정하지 못하도록
//외부에서 인스턴스로 접근 불가능하도록
class Employee {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp1 = new Employee('김복동', 32);




//직접적인 조정은 안되지만, class내에서는 조정 가능
class Employee {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name () {
    // [n]: n + 1 번째 글자를 반환
    return this.#name[0] + '모씨';
  }
  get age () {
    return this.#age - (this.#age % 10) + '대';
  }
  set age (age) {
    if (typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
  getOlder(years) { this.#age += years; }
}

const emp2 = new Employee('김복동', 22);