/* apiplan4 */
const URLAPI =
  'https://script.google.com/macros/s/AKfycbyQ7QduYhzE4amQW7Zgqy0lEvxCy-dpYvN8mx6sxqo0mdeDA0MaEQP_0u4Xe83xkicf/exec'

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
