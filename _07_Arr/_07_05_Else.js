//toSorted : 정렬된 결과를 반환

const array1Sorted = array1.sort(); // 새 배열 반환이 아닌 레퍼런스 복사
const array2Sorted = array2.toSorted();

console.log(array1Sorted, array2Sorted);

array1Sorted.push(6);
array2Sorted.push(6);

console.log(array1Sorted, array2Sorted);


//toReversed : 뒤집힌 결과를 반환
array5 = [3, 1, 4, 5, 2];
array6 = [...array5];

array5Reversed = array5.reverse();
array6Reversed = array6.toReversed();

array5Reversed.push(6);
array6Reversed.push(6);

console.log(array5Reversed, array6Reversed);


//toSpliced : 잘린 결과를 반환
const array9 = array8.toSpliced(4, 3);
const array10 = array8.toSpliced(4, 3, 'A', 'B', 'C');

console.log(array9, array10);
console.log(array8);



// ## 2. 뒤에서부터 찾는 메서드들

// - `findLast` : 주어진 조건에 해당하는, **뒤에서부터** 첫 요소 반환
// - `findLastIndex` : 위 요소의 인덱스 반환
const lastMult3 = myArray.findLast(i => i % 3 === 0);
const lastMult3Idx = myArray.findLastIndex(i => i % 3 === 0);

console.log(lastMult3, lastMult3Idx);


//with, 첫 번째 인자로 주어진 인덱스의 값을 두 번째 인자로 주어진 값으로 수정한 새 배열 반환

let newArray = orgArray.with(3, '넷');

console.log(newArray, orgArray);

newArray = orgArray
.with(3, '넷')
.with(6, '일곱')
.with(9, '열');

console.log(newArray, orgArray);