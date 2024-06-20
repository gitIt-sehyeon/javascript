// 생성자 함수 
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);
console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

//함수 앞에 new를 붙이냐 안붙이냐에 따라 동작 원리가 달라짐




// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
//chain1이 이미 위에서 선언 되었어도 프로토타입으로 소통을 계속 하고 있어서 introEng를 쓸 수 있음
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain1.introEng());



function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }

  if (!new.target) { // 이 부분을 지우고 다시 해 볼 것, new를 안붙였을 때 예외처리 
    return new YalcoChicken(name, no);
  }
}

const chain11 = new YalcoChicken('판교', 3);
const chain22 = YalcoChicken('강남', 17);

YalcoChicken.print1(1);

