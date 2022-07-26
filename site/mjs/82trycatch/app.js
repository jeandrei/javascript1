// try catch lesson 82


//função para apresentar o título e descrição
function newSubject(title,description=''){
  console.log(`****************************************************`);
  console.log(title);
  console.log(description);
  console.log(`****************************************************`);
 
}




newSubject('Try simples','No try catch o programa continua a execução');
try {
  // Call a function that doesn't exists results in a ReferenceError
  myfunction();  
} catch (e) {  
  console.log(e);
  console.log(e.message);
  console.log(e.name);  
} 
console.log('Program continues...');




newSubject('Produce a TypeError','Produz um tipo de erro específico, neste caso um TypeError');
try {
  null.myfunction();
} catch (e) {  
  console.log(e);
} 




newSubject('Produce a SyntaxError','Produz um erro SyntaxError');
try {
  console.log(eval('Hello World'));
} catch (e) {  
  console.log(e);
} 



newSubject('Produce a URIError','Produz um erro URIError');
try {
  decodeURIComponent('%');
} catch (e) {  
  console.log(e);
} 


const user = {email: 'jdoe@gmail.com'};

newSubject('Erro simples','Produzir um erro simples com try catch');
try {
  if(!user.name){   
    throw 'User has no name';
  }
} catch (e) {  
  console.log(e);
} 




newSubject('Erro com tipo','Produzir um erro com tipo SyntaxError no try catch');
try {
  if(!user.name){   
    throw new SyntaxError('User has no name');
  }
} catch (e) {  
  console.log(e);
} 




newSubject('Finally','Finally executa sempre, no sucesso ou falha');
try {
  if(!user.name){   
    throw new SyntaxError('User has no name');
  }
} catch (e) {  
  console.log(e);
} finally {
  console.log('Finally runs regardless of result...')
}



newSubject('Verifica o tipo do erro','testa o tipo de erro, retorna verdadeiro ou falso');
try {
  myfunction();
} catch (e) {  
  if(e instanceof ReferenceError){
    console.log('This is a Reference Error');
  }
} 