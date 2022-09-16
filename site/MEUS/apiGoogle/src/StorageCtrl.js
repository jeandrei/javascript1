const URLAPI =
  'https://script.google.com/macros/s/AKfycbzfHI7JTuK9tVNy0bl4ibkOVsHGLcePKoqCcpwVBxvj1JdiN9Lb-o0gp5EgkaVqmkMCBA/exec'

const nome = 'stake'
const URLBUSCA = URLAPI + `?name=${nome}`

const http = new EasyHTTP()

// 01 cria StorageCtrl retornando os items
const StorageCtrl = (function () {
  return {
    getItems: async function () {
      const data = await http.get(URLAPI)
      return data
    },
  }
})()
