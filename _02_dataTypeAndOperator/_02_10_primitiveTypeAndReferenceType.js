const obj1 = {
  num: 1, str: 'ABC', bool: true
};
const obj2 = obj1;
// obj2 = {}; // ⚠️ 오류
console.log('obj1:', obj1);
console.log('obj2:', obj2);

// ⭐️ const임에도 내부 값은 변경 가능함 주목
// 내부 변경 방지는 이후 배울 Object.freeze 함수로
obj2.num = 2;
obj2.str = '가나다';
obj2.bool = false;

console.log('obj1:', obj1);
console.log('obj2:', obj2);
//obj1 안에 있는 값도 바뀜



const array1 = [1, 'ABC', true];
const array2 = array1;
// array2 = []; // ⚠️ 오류
console.log('array1:', array1);
console.log('array2:', array2);

// ⭐️ const임에도 내부 값은 변경 가능함 주목
array2[0] = 3;
array2[1] = 'def';
array2[2] = false;

console.log('array1:', array1);
console.log('array2:', array2);