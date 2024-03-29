/* apiplan4 */
const URLAPI =
  'https://script.google.com/macros/s/AKfycbz2XKtumSA6Tggg8rAZNc3WgiGLxq66vVo036-atzzjbBr2ohtxM_a4YfI1e53ExHYG/exec'

const http = new EasyHTTP()

const StorageCtrl = (function () {
  return {
    /* 01 get items */
    getItems: async function () {
      const items = await http.get(URLAPI)
      return items[0].data
    },
    postItem: async function (newItem) {
      const item = await http.post(URLAPI, newItem)
      ItemCtrl.updateItems()
    },
  }
})()
