class Bird {
  wings = 2;
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim () { console.log('수영중...'); }
}
class EmperorPenguin extends Penguin {
  size = 'XXXL';
}
const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

// 클래스에서는 extends (부모클래스)로 상속관계 정의
// 자식 클래스에서 또 다른 클래스가 상속받을 수 있음
// 자식 클래스는 부모 클래스의 속성을 기본적으로 가져옴
// 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
// [[Protorype]]으로 상속관계 살펴볼 것 - ⭐️ 최종적으로 Object



//overriding
class Bird2 {
  wings = 2;
  canFly = true;
  travel () { console.log('비행중...') }
}
class Eagle2 extends Bird2 {
  claws = 2;
}
class Penguin2 extends Bird2 { //자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어씀
  canFly = false;
  travel () { console.log('수영중...') }
}


//super
class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  #word = '';
  constructor (name, no, word) {
    super(name, no); //뒤에 뭐 아무것도 안적으면 생성자 
    this.#word = word;
  }
  introWithConcept () {
    return super.introduce() + ' ' + this.#word;
  }
  order (name) {
    return super.order(name) + ' ' + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');
console.log(pikaChain.introWithConcept());

//부모 클래스에서 static으로 선언해도 자식들은 그 메서드를 사용할 수 있음