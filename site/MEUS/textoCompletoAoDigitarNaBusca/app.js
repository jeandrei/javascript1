/* 5º Cria variável timer que será reiniciada toda vez que o usuário digitar alguma coisa */
let timer;



/* 6º Cria a função delay que vai reiniciar a contagem toda vez que o usuário
digitar algo pois vai zerar a variável timer e iniciara a contagem novamente
se o usuário não digitar nada em três segundos ela da um resolve na Promise
e retorna o mesmo valor passado para a função*/
function delay(val){
  //zera o contador timer
  clearTimeout(timer);

  return new Promise((resolve)=>{
    /*toda vez que digita algo o timer é zerado e demora inicia a contagem de 3 segundos
    para timer receber o valor do setTimeout e dar um resolve na promise*/
    timer = setTimeout(()=>{  
      //retorna o próprio valor passado para a função
      resolve(val);
    },3000)
  })
}



/* 1ª Coisa seleciona o input */
const searchUser = document.querySelector('#searchUser');




/* 2ª Coisa cria uma função async para poder usar o await para cada etapa necessária 
pode dar um console.log primeiro só para testar*/
async function Search(e){
  //console.log(e);

  /*7º passamos o valor para a função delay que vai demorar 3 segundos para retornar para a const texto*/
  const texto = await delay(e.target.value);
  console.log(texto);
  document.querySelector('#result').innerHTML = texto;
}




/* 3ª Coisa cria o EventListener keyup */
searchUser.addEventListener('keyup',(e)=>{
  /* 4ª chama a função async neste caso Search passando o "e*/
  Search(e);
})