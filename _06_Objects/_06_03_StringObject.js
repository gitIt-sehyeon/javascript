const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);
console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());

const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1}); 

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);
console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());

//Use without new
const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);



//유사 배열 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);
myStr[myStr.length - 1] = '?'; //배열처럼 이렇게 변환 불가능 
console.log(myStr); // 💡 배열과 달리 그대로
myStr = '안녕하세요?'; //change like this

for (const letter of myStr) {
  console.log(letter);
}



//toUpperCase, toLowerCase
let word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);
//⭐️ 기존의 문자열은 바꾸지 않음! 다음의 메서드들 모두 마찬가지


//charAt, at
console.log(
  'Hello World!'.charAt(0),
  '안녕하세요~'.charAt(2)
);

// 신기능, 배열에서도 사용
// 음수로 뒤에서부터 접근 가능 ( -1 부터 )
console.log(
  '안녕하세요~'.at(1),
  '안녕하세요~'.at(-1)
);


//indexOf, lastIndexOf
const word2 = '아니, 하나마나한 걸 왜 하나?'; //it can't find value we want, then return -1
console.log (
  word2.indexOf('하나'),
  word2.lastIndexOf('하나')
);


//includes, startsWith, endsWith
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}



//Search
//인자로 받은 🔗 정규표현식과 일치하는 첫 부분의 인덱스 반환
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);


//substring
const word3 = 'ABCDEFGHIJKL';
const part = word3.substring(4, 8)

console.log(word3, part);

const word4 = 'ABCDEFGHIJKL';

console.log(
  word4.substring(4) //4부터 끝까지
);


//slice
//substring과 같으나 음수로 뒤에서부터 자를 수 있음
console.log(
  word.substring(-4), //그대로 나옴
  word.slice(-4)
);



//split
//인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)

//두 번째 인자로 배열의 최대 길이 지정 가능
word = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word.split(' ', 2),
  word.split(' ', 4)
)



//trim, trimStart, trimEnd
//중간의 공백은 제거하지 않음
word = '  Hello World!  ';
console.log(`--${word}--`);
console.log(`--${word.trim()}--`); //앞뒤의 공백 제거하여 반환
console.log(`--${word.trimStart()}--`); //앞의 공백만 
console.log(`--${word.trimEnd()}--`); //뒤의 공백만



//repeat
word = '호이';

console.log(word.repeat(3));
console.log(word.repeat(0));
console.log(word.repeat());



//replace, replaceAll
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예') //터키를 튀르키예로
);

word = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(word.replace('밥', '라면'));
//모든 밥을 라면으로 변환
console.log(word.replace(/밥/g, '라면'));
console.log(word.replaceAll('밥', '라면'));



//⭐️ 메서드 체이닝 method chaining
word = ' 모두 HELLO! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word
  .trimStart()                // '모두 HELLO! '
  .toLowerCase()              // '모두 hello! '
  .replaceAll(rpFrom, rpTo)   // '모두 bye! '
  .toUpperCase()              // '모두 BYE! '
  .repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);

console.log(word); // 원본은 그대로