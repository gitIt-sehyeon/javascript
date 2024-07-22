//new 함수(.., ...) 이렇게 하면 함수를 생성자처럼 쓸 수 있다. -> 인스턴스 생성

let korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

let italian = {
  favorite: '피자'
};

console.log(
  korean.makeStew(true, 1)
);

// 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
italian.makeStew = korean.makeStew;

console.log(
  italian.makeStew(false, 2) //순한 피자찌개 2냄비 이렇게 출력이 됨
);


//solutions
//1. call를 사용한 함수 호출
console.log(
  italian.makeStew.call(korean, false, 2)
);

//2. apply를 사용한 함수 호출
console.log(
  italian.makeStew.apply(korean, [false, 2])
);

//3. ⭐ bind를 사용한 this 대상 고정
// ⭐ this가 바인딩된 새 함수를 만듦
italian.makeRightStew = korean.makeStew.bind(korean);

console.log(
  italian.makeRightStew(false, 2)
);

// 💡 추가 인자들까지 바인딩 가능 
italian.makeClassicStew = korean.makeStew.bind(korean, true, 1);

console.log(
  italian.makeClassicStew()
);


//4. 바인딩된 함수를 내보내는 함수
korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function () {
    return this.makeStew.bind(this);
  }
};

italian = {
  favorite: '피자'
};

italian.makeStew = korean.teachMakingStew();

console.log(
  italian.makeStew(false, 2)
);


//5. 생성자 함수일 경우 - 함수 자체를 미리 인스턴스에 바인딩하기
function Korean () {
  this.favorite = '김치';
  this.makeStew = function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  };

  // 💡 여기서 바인딩을 고정시켜버림
  this.makeStew = this.makeStew.bind(this);
}

function Italian () {
  this.favorite = '피자';
}

korean = new Korean();
italian = new Italian();

italian.makeStew = korean.makeStew;

console.log(
  italian.makeStew(false, 2)
);


//call, apply, bind의 다른 활용
korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

console.log(
  // 💡 임의로 특수한 동작을 시킬 때
  korean.makeStew.call({favorite: '된장'}, true, 2)
);


// 객체들이 가져다 쓰도록 만든 함수
function intro (job) {
  return `${this.name}(${this.age}세) - ${job}`
}

const hong = {
  name: '홍길동',
  age: 20
};

const jeon = {
  name: '전우치',
  age: 25
};
// 동적 바인딩 특성 활용
hong.intro = intro;

console.log(
  hong.intro('개발자')
);
console.log(intro.call(hong, '개발자'));
console.log(intro.apply(jeon, ['사무직']));

const introHong = intro.bind(hong, '개발자');

console.log(
  introHong()
);


//⭐ 배열 메서드의 thisArg
function recommendForYou (me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];

  products
  .map((itm, idx) => {
    return { ...itm, idx } 
  })

  // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주목
  .filter(function ({sex, size}) {
    return ['U', this.sex].includes(sex)
    && size === this.size
  }, me) // 💡 thisArg

  .forEach(function ({idx}) {
    console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
  }, me); // 💡 thisArg
}

const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};

const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};


recommendForYou(peter);
recommendForYou(jane);

