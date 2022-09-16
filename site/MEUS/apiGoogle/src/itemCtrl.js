const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  const data = {
    items: null,
    currentItem: null,
    totalCalories: 0,
  }

  return {
    // 02 cria a set items que vai setar os itens no array
    // que vem la da api daí usamos ela na init para setar os
    // items 03 está em app init
    setItems: function (items) {
      data.items = items
    },
    updataItems: async function () {
      const items = await StorageCtrl.getItems()
      ItemCtrl.setItems(items.data)
      return items
    },
    getItems: async function () {
      // primeiro atualizo os items
      const res = await ItemCtrl.updataItems()
      // defino o array data.items
      ItemCtrl.setItems(res.data)
      // retorno data.items
      return data.items
    },
    logData: async function () {
      // primeiro atualizo os items
      const res = await ItemCtrl.updataItems()
      // defino o array data.items
      ItemCtrl.setItems(res.data)
      // retorno data
      return data
    },
    getTotalCalories: async function () {
      await ItemCtrl.updataItems()
      let total = 0
      data.items.forEach(function (item) {
        total += parseInt(item.calories)
      })
      data.totalCalories = total
      return data.totalCalories
    },
    addItem: async function (name, calories) {
      let ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0
      }

      calories = parseInt(calories)

      newItem = new Item(ID, name, calories)

      await StorageCtrl.storeItem(newItem)

      return newItem
    },
  }
})()
