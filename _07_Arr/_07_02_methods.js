console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);


//includes
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

let arr = [
  obj1,
  { x: 3, y: 4 }
];

console.log( //even if it has same values, return false, it doesn't have same address
  arr.includes(obj1), //true
  arr.includes(obj2), //false
  arr.includes({ x: 1, y: 2 }), //false
  arr.includes({ x: 3, y: 4 }) //false 
);


//join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];
console.log(
  arr1.join(' ')
);


//push, unshift
//pop, shift


arr = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
arr.splice(2, 2);

console.log(arr);
// 3. splice - 원하는 위치에 요소(들)을 추가 및 삭제
// 2개 이상의 인자를 받음
// start : 배열 변경을 시작할 위치
// deleteCount : 제거할 요소의 개수
// item(s) : 추가할 하나 이상의 요소

// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr.splice(1, 3, '가', '나', '다');

console.log(arr);



//⚠️ 배열의 delete - empty 값을 남김 -> you better use splice
arr = [1, 2, 3, 4, 5];
delete arr[2];

console.log(arr);


//fill
//인자 1개 -> value
//인자 2개 -> value, start index
// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr2.fill(3, 6, 9);

console.log('4.', arr2);


// 2. slice - 인자로 주어진 범주의 값을 잘라 반환
// 1~2개 인자를 받음
// begin : 시작 위치
// end : 종료 위치
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr5 = arr4.slice(3);
const arr6 = arr4.slice(3, 7);

console.log(arr5, arr6);


//flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];

// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
arr1 = orgArr.flat(1);

arr2 = orgArr.flat(2);
arr3 = orgArr.flat(3);



//다 얕은 복사