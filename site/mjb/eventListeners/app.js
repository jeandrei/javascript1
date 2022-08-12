//Aula 29
/* document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');
  e.preventDefault();//evita que a página seja recarregada ou direcionada
  //ou basta colocar um # no href do index, também evita redirecionamento
}); */

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');
  let val;
  val = e;

  // Element target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;//vai retornar clicked

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;//retorna a posição do clique sobre o botão no eixo y
  val = e.clientX;//retorna a posição do clique sobre o botão no eixo x

    // Coords event relative to the element
    val = e.offsetY;//retorna a posição do clique sobre o botão no eixo y
    val = e.offsetY;//retorna a posição do clique sobre o botão no eixo x
  console.log(val);
}