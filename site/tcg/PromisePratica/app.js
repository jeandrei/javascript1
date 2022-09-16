/**GENERATE A RAND NUMBER */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/********************EXEMPLO PROMISE CHAIN**************** */
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

fakeRequestPromise('localhost')
  .then((data) => {
    console.log('This is step 01')
    console.log(data)
    return fakeRequestPromise('localhost')
  })
  .then((data) => {
    console.log('This is step 02')
    console.log(data)
    return fakeRequestPromise('localhost')
  })
  .then((data) => {
    console.log('This is step 03')
    console.log(data)
    return fakeRequestPromise('localhost')
  })
  .catch((err) => {
    console.log('Oh no, request failed')
    console.log(err)
  })

/**CHANGE THE BACKGROUND OF THE BODY */
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

/**USING .THEN */
delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('blue', 1000))
  .then(() => delayedColorChange('indigo', 1000))
  .then(() => delayedColorChange('violet', 1000))

/* USING AWAIT */
async function rainbow() {
  await delayedColorChange('red', 1000)
  await delayedColorChange('orange', 1000)
  await delayedColorChange('yellow', 1000)
  await delayedColorChange('green', 1000)
  await delayedColorChange('blue', 1000)
  await delayedColorChange('indigo', 1000)
  await delayedColorChange('violet', 1000)
  return 'END OF RAINBOW!'
}

async function printRainbow() {
  await rainbow()
  console.log('END OF RAINBOW!')
}

printRainbow()

const login = async (username, password) => {
  if (username === '' || password === '') throw 'Missing Credentials'
  if (username === 'dex') return 'Welcome dex!'
  throw 'Invalid Password'
}

login('dex', '123')
  .then((res) => {
    console.log('LOGGED IN')
    console.log(res)
  })
  .catch((err) => {
    console.log('ERROR!')
    console.log(err)
  })

const http = new EasyHTTP()

function getURL(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

async function getData() {
  try {
    const data = await getURL('http://localhost:3000/posts')
    if (data.length > 0) {
      return data
    } else {
      throw new Error('error trying to get data')
    }
  } catch (err) {
    return err
  }
}

async function showData() {
  const data = await getData()
  console.log(data)
}

showData()
