let arr1 = []; // 빈 배열
let arr2 = [1, 2, 3];
let arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1);
console.log(arr2.length, arr2);
console.log(arr3.length, arr3);


//정적메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
arr1 = Array.of(3);

arr2 = Array.of(1, 2, 3);
arr3 = Array.of('ABC', true, null);

console.log(arr1);
console.log(arr2);
console.log(arr3);


//정적 메서드 from
//배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환
arr1 = Array.from([1, 2, 3]);
arr2 = Array.from('ABCDE');
arr3 = Array.from({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});

console.log(arr1);
console.log(arr2);
console.log(arr3);




const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};

// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}
// for ... of 문은 이터러블에서만 사용 가능 -> don't work
for (const item of arrLike) {
  console.log(item);
}
// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}


//Array.from은 얕은 복사 - 1단계 깊이만 복사


//mapping
arr1 = [1, 2, 3, 4, 5];
arr2 = Array.from(arr1, x => x + 1);
arr3 = Array.from(arr1, x => x * x);
const arr4 = Array.from(arr1, x => x % 2 ? '홀' : '짝');

console.log(arr2);
console.log(arr3);
console.log(arr4);