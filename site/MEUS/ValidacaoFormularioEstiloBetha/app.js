

// Form Blur (when it out the input) Event Listeners
document.getElementById('name').addEventListener('keyup', validate);
document.getElementById('zip').addEventListener('keyup', validate);
document.getElementById('email').addEventListener('keyup', validate);
document.getElementById('phone').addEventListener('keyup', validate);

const btnSave = document.querySelector('#btnSave');


//Função para verificar se o campo está vazio
//Retorna true se o campo estiver vazio
function isEmpty(val){    
 switch (val){
  case '':
    return true;
    break;
  case null:
    return true;
    break;
  default:
    return false;
 }
}

function validate(){
  
  if(
      validateName() && 
      validateZip() &&
      validateEmail() &&
      validatePhone()
    )
    {  
      btnSave.disabled = false;    
    } else {
      btnSave.disabled = true;
    }
  
}

function validateName(){
  const name = document.getElementById('name');
  //só faço a validação se o campo não estiver vazio que verifico com a função isEmpty
  if(!isEmpty(name.value)){
      //re regular expression regex
      const re = /^[a-zA-Z]{2,10}$/;
      if(!re.test(name.value)){
        name.classList.add('is-invalid');
        return false;
      } else {
        name.classList.remove('is-invalid');
        return true;
      }
  }
}

function validateZip(){
  const zip = document.getElementById('zip');  
  if(!isEmpty(zip.value)){
    const re = /^[0-9]{5}?(-[0-9]{3}?)/;
    if(!re.test(zip.value)){
      zip.classList.add('is-invalid');
      return false;
    } else {
      zip.classList.remove('is-invalid');
      return true;
    }
  }
}

function validateEmail(){
  const email = document.getElementById('email');
  if(!isEmpty(email.value)){
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
      email.classList.add('is-invalid');
      return false;
    } else {    
      email.classList.remove('is-invalid');
      return true;
    } 
  }
}


function validatePhone(){
  const phone = document.getElementById('phone');
  if(!isEmpty(phone.value)){
    const re = /^\(?\d{2}\)?[-. ]?\d{5}[-. ]?\d{4}$/;  
    if(!re.test(phone.value)){
      phone.classList.add('is-invalid');
      return false;
    } else {
      phone.classList.remove('is-invalid');
      return true;
    } 
  }
}