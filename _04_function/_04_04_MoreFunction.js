function outer () {
  const name = '바깥쪽'
  console.log(name, '함수');

  function inner () {
    const name = '안쪽'
    console.log(name, '함수');
  }
  inner();
}

outer();



(function () { //즉시 실행 함수 -> 오늘 날에는 잘 안씀, 예전 코드를 알아보기 위해서 공부
  console.log('IIFE');
})();

const initialMessage = (function () { //리턴값을 주려고 
  // ⚠️ var를 사용함에 주목
  var month = 8;
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;

  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
})();

console.log(initialMessage);



let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];

function changeValue (a, b, c) {
  a++;
  b.name = '전우치';
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z); 

console.log(x, y, z); //x는 원시 타입, y,z 는 참조타입
//y,z는 바뀜