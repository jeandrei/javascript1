function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = randomInteger(1, 5)
    setTimeout(() => {
      if (delay > 3) {
        reject('Connection Timeout :(')
      } else {
        resolve(`Here is your fake data from ${url}`)
      }
    }, delay * 1000)
  })
}

async function makeToRequests() {
  try {
    let data1 = await fakeRequestPromise('/page/1')
    console.log(data1)
    let data2 = await fakeRequestPromise('/page/2')
    console.log(data2)
  } catch (e) {
    console.log('CAUGHT AN ERROR!')
    console.log('error is', e)
  }
}

makeToRequests()
