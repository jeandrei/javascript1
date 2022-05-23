const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

const select = document.querySelector('select');

// Clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

// Keydown quando pressiona a tecla executa
//taskInput.addEventListener('keydown', runEvent);

// Keyup quando solta a tecla executa
//taskInput.addEventListener('keyup', runEvent);

// Keypress assim que é pressionado
//taskInput.addEventListener('keypress', runEvent);

// Assim que da o foco no input
//taskInput.addEventListener('focus', runEvent);

// Assim que tira o foco/sai do input
//taskInput.addEventListener('blur', runEvent);

// Quando recorta o conteúdo do campo
//taskInput.addEventListener('cut', runEvent);

// Quando cola um conteúdo no campo
//taskInput.addEventListener('paste', runEvent);

// Em qualquer input
//taskInput.addEventListener('input', runEvent);

//SELECT Change event
select.addEventListener('change', runEvent);

function runEvent(e){//e é onde a ação está ocorrendo, nesse caso o taskInput
  console.log(`EVENT TYPE: ${e.type}`);
  //console.log(e.target.value);
  //heading.innerText = e.target.value;

  // Get input value
  //console.log(taskInput.value);
  
  //e.preventDefault();
}