const App = (function () {
  function loadEventListeners() {
    const UISelectors = UICtrl.getSelectors()
  }

  return {
    // 03 criamos o init como async
    init: async function () {
      // 04 pegamos todos os items da api
      const items = await ItemCtrl.getItems()
      // monta a tabela no index
      UICtrl.populateItemList(items)
      // pega o total de calorias
      const totalCalories = await ItemCtrl.getTotalCalories()
      // imprime as calorias
      UICtrl.showTotalCalories(totalCalories)

      loadEventListeners()
    },
  }
})()

App.init()
