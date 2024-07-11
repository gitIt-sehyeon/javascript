let array = [
  '모', '걸', '도', '개', '윷',
  '윷', '걸', '모', '개', '도',
  '윷', '모', '걸', '도', '개',
  '윷', '모', '걸', '개', '도'
];

//  위 배열의 요소들을 중복요소들을 제거하고
//  가나다순으로 정렬한 뒤 쉼표로 구분하여
//  출력하는 코드를 작성해보세요.

const temp = [...new Set(array)];
console.log(
  temp.toSorted().join(',')
)



array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

//  위 배열의 요소들이 각각 몇 개씩 들어있는지를 나타내는
//  Map 인스턴스를 만드는 코드를 작성해보세요.

//  그 중 'apple'은 몇 개인지 출력해보세요.

//  개수가 가장 적은 순으로 출력해보세요.

const temp2 = new Map();

array.forEach(item => {
  temp2.set(item, (temp2.get(item) || 0)+1);
});

[...temp2]
.toSorted((a,b) => a[1] - b[1])
.map(([a,b]) => a)
.forEach(i => console.log(i));


// 인자로 from 과 to 이 두 숫자가 주어졌을 때 from 으로부터  to 까지 1씩 늘려가며 출력하는 이터러블을 반환하는 함수를 만들어보세요. 전자가 항상 더 작다고 가정합니다.
//  사용 예시

function makeIterable (a,b){
  return{
    [Symbol.iterator](){
      let count = a;
      return{
        next(){
          return {
            value : count,
            done : count++>b
          }
        }
      }
    }
  }
}
const iterable = makeIterable(1, 5);
for (let value of iterable) {
  console.log(value); // 1, 2, 3, 4, 5
}






function* makeGenerator(a,b){
  for(let i= a; i<=b; i++){
    yield i;
  }
}

// 사용 예시
const generator = makeGenerator(1, 5);
for (let value of generator) {
  console.log(value); // 1, 2, 3, 4, 5
}