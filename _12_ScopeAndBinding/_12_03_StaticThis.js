// ⭐ 화살표 함수와 this
// function 함수나 메서드의 동적 바인딩과 다르게 동작
// 함수가 어디서 선언되었는가에 따름 - ⭐️ 가장 근접한 상위 스코프에 바인딩 고정
// 즉 this를 정적으로 바인딩함
const obj = {
  x: 1,
  y: 2,

  func1: function () {
    console.log('1.', this);
  },
  func2 () {
    console.log('2.', this);
  },
  func3: () => {
    console.log('3.', this);
  }
}

// this가 해당 객체를 가리킴
obj.func1();
obj.func2();

// 💡 this가 상위 스코프를 가리킴
obj.func3();



// 2. 생성자 함수와 클래스에서
// 기본적으로는 가리키는 대상이 동일 (해당 인스턴스)
// ⭐ 동적으로 바인딩하는 타 방식과의 차이 확인
// 찌개는 function 선언 함수와 메서드로
// 볶음밥은 화살표 함수로

function Korean () {
  this.favorite = '김치';

  this.makeStew = function (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => { //화살표 함수를 쓰면 this가 정적으로 선언돼서 이탈리안에게 넘어가도 김치로 favorite이 김치로 나온다.
    return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
  };
}

function Italian () {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true));
console.log(korean.fryRice(true));

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false));
console.log(italian.fryRice(false));


//call, apply, bind의 this 인자 무시됨
console.log(
  korean.fryRice.call({favorite: '된장'}, true)
);
console.log(
  korean.fryRice.apply({favorite: '된장'}, [true])
);
console.log(
  korean.fryRice.bind({favorite: '된장'}, true)()
);




