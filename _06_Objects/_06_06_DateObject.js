//1. 현재 날짜와 시간
let now = new Date();

console.log(typeof now);
console.log(now);

// 3. 단위별 숫자 입력
// 연, 월 ( 0부터 시작 ) 필수
// 일, 시, 분, 초, 밀리초 옵션 없을 시 0
console.log(
  new Date(2022, 8)
);
console.log(
  new Date(2022, 8, 20, 14, 35)
);
console.log(
  new Date(2022, 8, 20, 14, 35, 47, 789)
);


// now
// 현재의 밀리초 숫자값 (앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환
console.log(Date.now());


// parse, UTC
// 주어진 시간의 밀리초 숫자값 반환
// parse는 dateString, UTC는 단위별 숫자를 받음
console.log(
  Date.parse('August 20, 2022 00:00:00 UTC')
);
console.log(
  // 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
  Date.parse('August 20, 2022 09:00:00')
);
console.log(
  // ⭐️ 월은 0부터 시작
  Date.UTC(2022, 7, 20, 0, 0, 0)
);


// toString, toDateString, toTimeString
// 각각 전체, 날짜만, 시간만 나타내는 문자열 출력
// 시스템(컴퓨터)의 언어 설정별로 다르게 나타남
now = new Date();

console.log(
  now.toString()
);
console.log(
  now.toDateString()
);
console.log(
  now.toTimeString()
);


// toLocaleString
// 주어진 언어 코드를 기준으로 표현한 문자열 반환
// 인자가 없을 시 시스템의 언어 적용
console.log(
  now.toLocaleString()
);
console.log( //미국
  now.toLocaleString('en-US')
);


//단위별 setter, getter 메서드들
for (i of [
  [ '연:', now.getFullYear() ],
  [ '월:', now.getMonth() ], // 0 ~ 11
  [ '일:', now.getDate() ],
  [ '요일:', now.getDay() ], // 0부터 일월화수목금토 
  [ '시:', now.getHours() ],
  [ '분:', now.getMinutes() ],
  [ '초:', now.getSeconds() ],
  [ '밀리초:', now.getMilliseconds() ]
]) {
  console.log(i[0], i[1]);
}

now.setFullYear(2022);
now.setMonth(7);
now.setDate(20);
// 💡 요일은 setter가 없음
now.setHours(14);
now.setMinutes(35);
now.setSeconds(47);
now.setMilliseconds(789);

console.log(now.toString());

//example
now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = '일월화수목금토'[now.getDay()];

console.log(
  `오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`
);


// getTime, setTime
// 밀리초 숫자값을 set/get
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();

console.log(date1.toString());
console.log(date1value);

const date2 = new Date();

console.log(date2.toString());

date2.setTime(date1value);

console.log(date2.toString());


// getTimezoneOffset
// 시스템의 시간대와 UTC의 시간차를 분 단위로 반환
// 한국의 경우 9시간 차이
console.log(
  new Date().getTimezoneOffset() /60
);


// toISOString
// 🔗 ISO 8061이란 형식의 문자열 반환
// UTC 기준으로 반환
now = new Date();

// 시간차 존재
console.log(
  now.toISOString()
);
console.log(
  now.toString()
);

now = new Date();
const timezoneOffset = now.getTimezoneOffset() * 60000;

const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now.toString());