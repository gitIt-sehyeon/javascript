const DEADLINE = 1400;

// function relayRun (name, start, nextFunc, failMsg) {
//   console.log(`👟 ${name} 출발`);
//   const time = 1000 + Math.random() * 500;

//   setTimeout(() => {
//     if (time < DEADLINE) {
//       console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
//       nextFunc?.(start + time);

//     } else {
//       console.log(failMsg);
//       console.log(`😢 완주 실패 - ${(start + time)/1000}초`);
//     }

//     if (time >= DEADLINE || !nextFunc) {
//       console.log('- - 경기 종료 - -');
//     }
//   }, time);
// }

// relayRun('철수', 0, start1 => {
//   relayRun('영희', start1, start2 => {
//     relayRun('돌준', start2, start3 => {
//       relayRun('정아', start3, start4 => {
//         relayRun('길돈', start4, null, '아아, 아깝습니다...');
//       }, '정아에게 무리였나보네요.');
//     }, '돌준이 분발해라.');
//   }, '영희가 완주하지 못했네요.');
// }, '철수부터 광탈입니다. ㅠㅠ');
// //너무 에바임




function relayRun (name, start){
  console.log(`👟 ${name} 출발`);

  return new Promise((resolve, reject) => {
    time = 1000 + Math.random()*500;
    setTimeout(()=>{
      if(time<DEADLINE){
        console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
        resolve(start+time);
      }
      else{
        reject('fail');
      }
    }, time);
  })
}

relayRun('철수', 0)
.then(result => relayRun('영희', result))
.then(result => relayRun('돌준', result))
.then(result => relayRun('정아', result))
.then(result => relayRun('길돈', result))
.catch(msg => {
  console.log(msg);
})
.finally(()=> {
  console.log('시합 종료');
})