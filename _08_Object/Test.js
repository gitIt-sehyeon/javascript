let person1 = { name: 'Alice', age: 25 };
const person2 = { name: 'Bob', age: 27 };

const spec1 = { job: 'developer' };
const spec2 = { degree: 'doctor' };
const spec3 = { cert: 'photoshop' };

//  Object의 정적 메소드를 사용해서
//  person1에는 spec1의 프로퍼티를,
//  person2에는 spec1, spec2, spec3 모두의 프로퍼티들을 더해보세요.

//  person1에 프로퍼티를 추가하거나 삭제하지 못하게 만들어보세요.
//  person2를 읽기만 가능한 객체로 만들어보세요.

Object.assign(person1, spec1);
Object.assign(person2, spec1, spec2, spec3);

Object.seal(person1);
Object.freeze(person2);



//2
const privates = ['height', 'weight']

person1 = {
	name: '홍길동',
	sex: 'M',
	height: 175,
	weight: 70,
	family: ['부', '모', '누나'],
	profession: {
		job: 'developer',
		position: '사원',
		department: '프론트엔드'
	}
}

//  위의 person1 객체를 privates에 속한 프로퍼티를 제외하고
//  깊은 복사를 하는 코드를 작성해보세요.

Object.assign(privates, JSON.parse(JSON.stringify(person1, (key, value) => {
  if(privates.includes(key)){
    return undefined;
  }
  return value;
})));
console.log(privates);