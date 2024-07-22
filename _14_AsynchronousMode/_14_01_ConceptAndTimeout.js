// ⏲️ setTimeout 함수
// 첫 번째 인자로 넣은 콜백 함수를 두 번째 인자로 넣은 수 만큼의 밀리초 후 실행
// Web API, Node.js 등 자바스크립트 환경의 기능 - 언어의 기능이 아님

setTimeout(() => {
  console.log('타임아웃!');
}, 1000);


// ⭐ 비동기 asynchronous 코드
// 동기 synchronous 코드와 달리, 코드가 순서대로 실행되지 않음

console.log('하나');

setTimeout(() => {
  console.log('둘');
}, 1000); // 💡 0으로 바꿔 다시 실행해 볼 것

console.log('셋');

// 일반적으로 타임아웃, 네트워크 요청 등 시간이 걸리는 작업에 사용
// 당장 할 수 있는 것들을 먼저 다 하고, 시간이 걸리는 작업은 뒤로 넘기기
// 💡 만약 비동기 방식이 없다면 - 데이터를 받아오는 동안 화면이 어는 등 불편함




// 1초 ~ 1.5초 사이 무작위 시간 안에 도착
function doRace (num, name) {
  console.log(`👟 ${num}번 ${name} 출발`);

  setTimeout (() => {
    console.log(`🚩 ${num}번 ${name} 도착`);
  }, 1000 + Math.random() * 500);
}

'철수,영희,돌준,정아,길돈'
.split(',')
.forEach((itm, idx) => doRace(++idx, itm));