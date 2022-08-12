// Form Blur (when it out the input) Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(){
  const name = document.getElementById('name');
  /**
   * ^[a-zA-Z] obrigatório começar com letras de a à z min ou maiuscula
   *  {2,10} a regra anterior tem que ter de 2 a 10 caracteres
   * $ sem o $ ele vai verificar tem 2 caracteres sim ok
   * existe 10 caracteres ok se tiver mais vai estar ok também 
   * se quiser limitar a 10 caracteres tem que colocar o $ pois
   * ele se aplica ao final da string para a esquerda então do final
   * para a esquerda tem 10 caracteres? sim ok! tem 11 não passa
   */
  const re = /^[a-zA-Z]{2,10}$/;
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

/**
 * ^início da regra
 * [0-9] permitido números de 0 a 9
 * {5}-com 5 números
 * (-[0-9]{3}?) mais um conjunto de números de 0 a 9 com no mínimo
 * 3 números separados por um -
 */
function validateZip(){
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}?(-[0-9]{3}?)/;
  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}
/**
 * () group together
 * [a-zA-Z0-9_\-\.]permite de a a z A a Z de 0 a 9 underscore e ponto
 * + procurar mais de um
 * @ é o divisor
 * .([a-zA-Z]{2,5}) parte final .com pode ser de a a z minúscula ou
 * maiúsucla de 2 a 5 caracteres
 */
function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  } 
}

/**
 * \(? parenteses opcional
 * d{3} três dígitos
 * \)? fecha o parenteses opcional
 * [-. ]? pode ser - . ou espaço ? opcional
 * d{3} três dígitos
 * [-. ]? pode ser - . ou espaço ? opcional
 * \d{4} outra sequência de 4 dígitos
 */
function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /^\(?\d{2}\)?[-. ]?\d{4,5}[-. ]?\d{4}$/;  
  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  } 
}