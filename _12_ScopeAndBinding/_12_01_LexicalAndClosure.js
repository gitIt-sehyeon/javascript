const x = 1;
const y = 1;
const z = 1;

function func1 (a) {
  const y = 2;
  const z = 2;

  function func2 (b) {
    const z = 3;

    console.log('3', x, y, z, b);
  }

  console.log('2', x, y, z, a);
  func2(a + 1);
}

console.log('1', x, y, z)
func1(1);





function employeeCreator (name, age) {
  let _name = name;
  let _age = age;

  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) { _age = age; },
    getOlder: function (years) { _age += years; }
  }
}

const employee = employeeCreator('홍길동', 20); //함수의 역할이 끝났는데도 employee는 return 되는 객체 안에 함수들을 쓸 수 있다.

console.log(employee);
console.log(employee.name(), employee.age());

employee.setAge(25);
console.log(employee.name(), employee.age());

employee.getOlder(3);
console.log(employee.name(), employee.age());