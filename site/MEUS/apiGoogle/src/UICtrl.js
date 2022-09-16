const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCalories: '#item-calories',
    totalCalories: '.total-calories',
  }

  return {
    getSelectors: function () {
      return UISelectors
    },
    getItemsInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCalories).value,
      }
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).innerHTML =
        totalCalories
    },
    populateItemList: function (items) {
      let html = ''
      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">          
        </a>
      </li>`
      })

      // Insert list Items
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
  }
})()
