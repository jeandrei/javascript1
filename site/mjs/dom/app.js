let val;

val = document;

val = document.all;
val = document.all[2];//segundo elemento do documento
val = document.all.length;//quantos elementos tem no documento
val = document.head;//retorna o head da página
val = document.body;//retorna o head da página
val = document.doctype;//retorna o tipo do documento 
val = document.domain;//retorna o domain
val = document.URL;//retorna a URL
val = document.characterSet;//retorna a codificação da página
val = document.contentType;//retorna o tipo de conteudo geralmente text/html

val = document.forms;//pega todos os formulários da pagina
val = document.forms[0];//pega primeiro formulário
val = document.forms[0].id;
val = document.forms[0].method;//get ou post
val = document.forms[0].action;//para onde vai submeter form action=""

val = document.links;//retorna um array com os links
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;//retorna todas as classes
val = document.links[0].classList;//clollection of classes

val = document.images;//retorna as imagens

val = document.scripts;//retorna os scripts do src exemplo bootstrap,Materialize,jquery etc
val = document.scripts[1].getAttribute('src');//retorna o src do script

let scripts = document.scripts;//pego todos os scripts
let scriptsArr = Array.from(scripts);//transformo em um array
//foreach para retornar todos os scripts adicionados no html
scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);