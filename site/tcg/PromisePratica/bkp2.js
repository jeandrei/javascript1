const http = new EasyHTTP()

function requestURL(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

async function getData() {
  let data = {
    users: null,
    message: null,
  }
  try {
    const users = await requestURL('http://localhost:3000/users')
    if (users.length > 0) {
      data.users = users
      data.message = 'Sucess'
    } else {
      throw new Error('Error trying to get data!')
    }
  } catch (err) {
    data.message = err.message
  }
  return data
}

async function showData() {
  let html = ''
  const data = await getData()
  console.log(data)
  if (data.users) {
    data.users.forEach(function (user) {
      html += `<li>Nome: ${user.name}, Sobrenome: ${user.secondName}, email: ${user.email}</li>`
    })
  } else {
    html += `<p>${data.message}<p>`
  }

  document.querySelector('body').innerHTML = html
}

const App = (function () {
  return {
    init: function () {
      showData()
    },
  }
})()

App.init()
