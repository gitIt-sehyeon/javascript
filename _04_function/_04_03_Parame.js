//default parameter
function add2(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add2(),
  add2(1),
  add2(1, 3)
);

//arguments -> 배열이라고 생각해 
function add2(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add2(1, 3, 5, 7)
);


// 💡 타입에 안전한 버전 get average, number 타입이 아닌것들은 거르기 
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, '가', 8, true, 5)
);




// ♻️ 새로고침 후 실행
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function combineArms () {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}

const add_mul = combineArms(add, mul, 1, true);
const add_mul_sub = combineArms(add, mul, sub);
const add_mul_sub_div = combineArms(add, mul, sub, div);

// 💡 익명 함수 사용됨
const add_mul_sub_div_pow
  = combineArms(add, mul, sub, div, (x, y) => x ** y);


  console.log(
    add_mul(8, 3),
    add_mul_sub(8, 3),
    add_mul_sub_div(8, 3),
    add_mul_sub_div_pow(8, 3)
  );



//rest parameters
  console.log(
    '3.',
    classIntro(3, '김민지', '영희', '철수', '보라')
  ); // 호이스팅
  
  function classIntro (classNo, teacher, ...children) { //argument가 몇개가 들어올지 모르면 ...parameterName 이런식으로 적으면 됨
    console.log('1.', children);
    console.log('2.', arguments);
  
    let childrenStr = '';
    for (const child of children) {
      if (childrenStr) childrenStr += ', ';
      childrenStr += child;
    }
    return `${classNo}반의 선생님은 ${teacher}, `
      + `학생들은 ${childrenStr}입니다.`
  }



  const add3 = (a, b) => a + b;
  const sub3 = (a, b) => a - b;
  const mul3 = (a, b) => a * b;
  const div3 = (a, b) => a / b;
  
  function doMultiArms (x, y, ...arms) {
    let result = x;
    for (const arm of arms) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
  
  console.log(
    doMultiArms(8, 3, add3, mul3, 1, true),
    doMultiArms(8, 3, add3, mul3, sub3),
    doMultiArms(8, 3, add3, mul3, sub3, div3),
    doMultiArms(8, 3, add3, mul3, sub3, div3, (x, y) => x ** y)
  );