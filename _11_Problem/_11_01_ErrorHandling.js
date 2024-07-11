function connect () { console.log('☀️', '통신 연결'); }
function disconnect () { console.log('🌙', '통신 연결 해제'); }
function sendArray (arr) { console.log('전송', arr); }

function sendStringAsArray (str) {
  connect();

  try {
    sendArray(str.split(''));
    return true;

  } catch (e) {
    console.error('🛑 에러!!', e);
    return false;

  } finally {
    // 💡 전송 성공 여부와 관계없이 연결은 끊어야 함
    disconnect();
    console.log('- - - - - - - -');
  }

  // ❓ 이곳에 넣는 것과 무엇이 다른가?
  // 아래로 대체하여 실행해 볼 것
  // disconnect();
  // console.log('- - - - - - - -');
}

['ABC', '가나다', 123, '123'].forEach(i => {
  console.log(
    sendStringAsArray(i) 
    ? '[성공]' : '[실패]', '\n\n'
  );
});





// 2. 에러의 여러 종류
// ⭐ 아래의 에러들은 모두 Error부터 상속받음
// 주요 에러	설명
// SyntaxError	문법에 이상이 있을 때
// TypeError	주어진 명령에 적절한 자료형이 아닐 때
// ReferenceError	잘못된 값을 참조했을 때
// RangeError	유효한 범위를 벗어나는 숫자가 사용되었을 때


//3. 커스텀 에러 만들기
class MilitaryError extends Error {
  constructor (position, ...params) {
    super(...params);

    this.name = 'MilitaryError';

    switch (position) {
      case '이병':
        this.message = '개판이군. 맞선임 데려와봐.';
        break;
      case '일병':
        this.message += ' 엎드려 뻗쳐.';
        break;
      case '상병':
        this.message = '짬을 거꾸로 먹었나. ' + this.message;
        break;
      default:
        this.message = '집에 갈 때 됐다 이거지? ㅎㅎ';
    }
  }
}

class Soldier {
  constructor (position) {
    this.position = position;
  }

  speak (word) {
    console.log(this.position + ':', word);
    try {
      if (!'다나까'.includes(word.at(-1))) {
        throw new MilitaryError(
          this.position,
          '군대에서 모든 말은 다나까로 끝낸다.'
        );
      }

    } catch (e) {
      console.error(e);
    }
  }
}

['이병', '일병', '상병', '병장'].forEach(pos => {
  const soldier = new Soldier(pos);
  soldier.speak('무슨 일입니까');
  soldier.speak('왜요');
});





function func1 (e) { // 사원
  try {
    if (e) { throw e }
    console.log('저 가 봐도 되죠?');
    console.log('- - - - - - - - - -');

  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error('저 이건 알아요!', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('대리님, 이거 뭐에요?');
    throw e; // 💡 처리하지 못하는 에러는 윗선으로 던짐
  }
}

function func2 (e) { // 대리
  try {
    func1(e);
  } catch (e) {
    if (e instanceof TypeError) {
      console.error('내가 할 테니 가봐요.', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('부장님, 이건 제 선에서 안 되겠습니다.');
    throw e;
  }
}

function func3 (e) { // 부장
  try {
    func2(e);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.error('잘 하자, 응?', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('사장님, 이것 좀 보셔야겠습니다.');
    throw e;
  }
}

function func4 (e) { // 사장
  try {
    func3(e);

  } catch (e) {
    console.error('전원 집합.', e);
  }
}

func4();
func4(new SyntaxError());
func4(new TypeError());
func4(new ReferenceError);
func4(new RangeError);