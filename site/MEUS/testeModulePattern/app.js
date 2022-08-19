/**
 * 1 Criar o ItemCtrl
 *    Criar o objeto Item com id e nome
 *    Criar a const data com os dados de exemplo
 *    Public methods
 *    getItems
 *    logData
 * 
 * 2 Criar UICtrl
 *    Crir a const UISelectors
 *    Public Methods
 *    getSelectors
 *    getItemsInput
 *   
 *
 * 3 Criar App
 *    Criar loadEventListeners
 *      UISelectors recebe getSelectors
 *      itemAddSubmit 
 *        input recebe getItemsInput
 *        console inputs
 *        Adiciona evento clic no botão Add item executando o metodo itemAddSubmit
 *    Public methods
 *      loadEventListeners
 * 
 * 4 Inicia o App
 */

const ItemCtrl = (function(){
  
  const Item = function(id, name){
    this.id = id;
    this.name = name;
  }

  const data = {
    items: [
      { name: 'Cookie' },
      { name: 'Stake' },
      { name: 'Soda' }
    ],
    currentItem: null
  }

  return {
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();


const UICtrl = (function(){
  const UISelectors = {
    itemInput:'#itemInput',
    addBtn:'.addBtn',
    itemList:'#itemList'
  }

  return {
    getSelectors: function(){
      return UISelectors;
    },
    getItemsInput: function(){
      return {
        name: document.querySelector(UISelectors.itemInput).value
      }
    }
  }
})();



const App = (function(){

  const loadEventListeners = function(e){
    const UISelectors = UICtrl.getSelectors();

    const itemAddSubmit = function(){
      const input = UICtrl.getItemsInput();
      console.log(input);
    }


    e.preventDefault();
  }

  return {
    init: function(){
      console.log('app loaded....');
    }
  }
})();


App.init();