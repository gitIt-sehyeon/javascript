//spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr1 === arr2);
arr1[0] = 0;

console.log(arr1, arr2);


// ⚠️ 깊은 복사는 되지 않음
arr1 = [{ x: 1 }, { x: 2 }];
arr2 = [...arr1];

arr1[0].x = 0;
console.log(arr1, arr2);


//destructuring
let arr = [1, 2, 3];
let [x, y, z] = arr;

console.log(x, y, z);


arr = [1, 2, 3, 4, 5];
[x, ...y] = arr;

console.log(x, y);




const players = [
  { name: '순이', score: 91 },
  { name: '정환', score: 65 },
  { name: '윤수', score: 72 },
  { name: '철웅', score: 88 },
  { name: '지우', score: 98 },
  { name: '세아', score: 40 }
];

// 배열 중 첫 3개만 가져옴
function logTop3 ([first, second, third]) {
  console.log(
    `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
  );
}

logTop3(
  [...players] // 💡 원본의 얕은 복사본을 정렬
  .sort((a, b) => b.score - a.score)
  .map(({name}) => name)
);  



let a = 1;
let b = 2;

// 서로 값을 바꾸기
[a, b] = [b, a];

console.log(a, b);


[a, b, c, d] = '@-&='.split('');

for (let i = 0; i < 24; i++) {
  [a, b, c, d] = [d, a, b, c];
  console.log([a, b, c, d].join('   '));
}