// ### 1.

// 50% 확률로 ‘홀’ 또는 ‘짝’을 반환하는 비동기 작업이 있습니다. 이를 세 번 연속으로 사용하여 그 결과를 쉼표로 구분한 문자열로 받아오려 합니다. 예를 들면 ‘홀, 짝, 홀’, ‘짝, 짝, 홀’과 같은 결과가 3초 후 출력되는 것입니다.
// 이와 같은 작업을 **콜백이 중첩된** 코드로 작성해보세요.

function gett(callback){
  setTimeout(() => {
    const result = Math.random()<0.5 ? '홀' : '짝';
    callback(result);
  }, 1000)
}

gett(result1 => {
  gett(result2 => {
    gett(result3 => {
      const final = `${result1}, ${result2}, ${result3}`;
      console.log(final);
    })
  })
})


// ### 2.

// 위 1번의 코드를 **Promise**를 사용해서 다시 작성해보세요.

function gett(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const result = Math.random()<0.5 ? '홀' : '짝';
      resolve(result);
    }, 1000)
  })
}

Promise.all([gett(), gett(), gett()])
.then(result => {return result.join(', ')})
.then(console.log)
.catch(console.log)


// ### 3.

// 이번에는 **async & await**을 사용하는 코드로 다시 작성해보세요.

async function gett3Times(){
  try{
    const result1 = await gett();
    const result2 = await gett();
    const result3 = await gett();

    console.log(`${result1}, ${result2}, ${result3}`);
  } catch(msg){
    console.log(msg);
  } finally{
    console.log();
  }
}

gett3Times();