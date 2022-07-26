const user = {email: 'jdoe@gmail.com'};

// try catch lesson 82
try {
  // Call a function that doesn't exists results in a ReferenceError
  //myfunction();

  // Produce a TypeError
  //null.myfunction();

  // Will produce SyntaxError
  //console.log(eval('Hello World'));

  // Will produce a URIError
  //decodeURIComponent('%');

  if(!user.name){
    //erro simples
    //throw 'User has no name'; 
    //Erro com o tipo
    throw new SyntaxError('User has no name');

  }
} catch (e) {
  console.log(`User Error: ${e.message}`);
  //console.log(e);
  /* console.log(e.message);
  console.log(e.name);
  if(e instanceof ReferenceError){
    console.log('This is a Reference Error');
  } */
} finally {
  console.log('Finally runs regardless of result...')
}


console.log('Program continues...');