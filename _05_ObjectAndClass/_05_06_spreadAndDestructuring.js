//spread
const class1 = {
  x: 1, y: 'A', z: true
};

const class2 = { ...class1 };

// 아래의 참조복사 코드와 다름!
// const class2 = class1; 

console.log(class2); 


//spread는 객체를 하나 더 만들어서 값을 가져오는 느낌이라면
//직접 할당은 두 변수가 같은 객체를 참조하는 느낌



const class3 = {
  x: 1,
  y: { a: 2 },
  z: [3, 4]
};

const class4 = { ...class3 };
class3.x++;
class3.y.a++;
class3.z[0]++;

// 해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
// 원시값만 있는 객체만 값에 의한 복사 - 얕은 복사
// 복합적인 객체의 완전한 깊은 복사는 이후 배우게 될 것


//destructuring
const obj1 = {
  x: 1, y: 2, z: 3
};

//const{x,z} = obj1;  It's possible to get it partially
const {x, y, z} = obj1;
// const x = obj1.x;
// const y = obj1.y;
// const z = obj1.z;  same thing 
console.log(x, y, z);




const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1; //It can get length in array1's property
//Array already have a length property
console.log(length);



// Example for using destructuring 
function introduce({age, married, job, name}) {
  // 순서 무관
  // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce(person1);


