

// 3题 数组排序

var arr = [12, 34, 32, 89, 4]
let newArr = arr.sort((a, b) => a - b)
newArr[0]


// 9题

function timeout(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms, 'done'))
}

async function f() {
  await timeout(10)
  var a = 'hello'
  await timeout(10)
  var b = 'lagou'
  await timeout(10)
  var c = 'I love you'
  console.log(a + b + c)
}


