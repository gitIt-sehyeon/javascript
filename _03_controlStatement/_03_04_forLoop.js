const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key])
}


//for in 문을 쓰면 key값이 나옴 배열에서는 0,1,2 이런식으로 순서가 나옴
//for of 문을 쓰면 배열에서 data 값이 출력, 객체한테는 못쓰는듯 오류 뜸
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}



const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목, 실제 값을 참조하는게 아님 
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1, numbers2);


//label
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner; //inner를 continue하는거임
    if (i * j >= 30) continue outer; //outer를 continue 하는거임
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}