// Aula 32
// eventBubbling aplica a todos os pais/parents do objeto efeito cascata inverso
// pois imagine no código temos as taga col,card,card-content e card-title
// se card-title esta dentro de col,card,card-content quando clicamos é executado
// todos os event listener criados abaixo
/* document.querySelector('.card-title').addEventListener('click',function(){
  console.log('card titile');
});

document.querySelector('.card-content').addEventListener('click',function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click',function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click',function(){
  console.log('col');
}); */

// eventDelegation é ao contrário, aplica a todos os filhos/childrens
// eventDelegation é para fazer o contrário, pois para baixo a função só é executada
// no objeto selecionado pelo querySelector, para fazer descer em cascata temos que usar
// eventDelegation
//const delItem = document.querySelector('.delete-item');//vai selecionar o primeiro objeto
//de classe delete-item
//delItem.addEventListener('click', deleteItem);


//document.body selciona todo o documento
document.body.addEventListener('click', deleteItem);

function deleteItem(e){    
  if(e.target.parentElement.classList.contains('delete-item')){//se conter a classe delete-item
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}