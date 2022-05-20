// WINDOW METHODS / OBJECTS / PROPERTIES

//console
//console.log(123);

//Alert
//alert('Hello World');

// Prompt
/* const input = prompt();
alert(input); */

// CONFIRM
/* if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
} */

let val;
// Outter height and widht
val = window.outerHeight;//altura da janela por fora da janela
val = window.outerWidth;//largura da janela por fora da janela
val = window.innerHeight;//altura da janela por dentro da janela
val = window.innerWidth;//largura da janela por dentro da janela

// Scroll points
val = window.scrollY; //pega a posição da barra scroll na vertical
val = window.scrollX; //pega a posição da barra scroll na horizontal

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
//val = window.location.search;//traz o que for passado por get na url ?id=1

// Redirect
//window.location.href = 'http://google.com';

// Reload
//window.location.reload();

// History Object
//window.history.go(-2);//passa o índice -2 volta duas páginas

val = window.history.length;//quantidade de sites visitados no history

// Navigator Object
val = window.navigator;//várias informações do navegador
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);