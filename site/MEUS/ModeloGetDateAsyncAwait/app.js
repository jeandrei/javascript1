

const App = (function(){

  /**
 * 1 Função que recebe uma url faz um fech e retorna uma nova promise
 */
function requestData(url){
  return new Promise((resolve, reject)=>{
   fetch(url)
   // pega os dados retornados e transforma em json
   .then(res => res.json())
   // se der tudo certo resolve/retorna os dados
   .then(data => resolve(data))
   // caso aconteça algum erro rejeita e retorna o erro
   .catch(err => reject(err));
  })

}

/**
 * 
 * Função que pega os dados através da função requestData
 * cria um html e retorna o código html
 * 
 */
async function getData(){
  let output = '';
  try{
      // pega os dados da API e passa para a const user observe o await
      // com o await aguarda até que os dados cheguem para dar continuidade no código
      const users = await requestData('http://localhost:3000/users');    
      // para cada usuário dentro da const acumulamos no html
      users.forEach(function(user){
      output += `<li>Id:${user.id}, Name:${user.name}, Second Name: ${user.secondName}, Email: ${user.email}</li>`;
    });
  
  } catch (err){
    output += 'URL inválida';
  }
  // retorna o html pronto para ser inserido na página
  return output;
}


async function showData(){
  // Chama a função que pega os dados
  const html = await getData();
  //insere no body
  document.querySelector('body').innerHTML = html;  
}

  return {
    // cria a função que inicia o APP
    init: function(){
      // Chama a função que coloca o html na página
      showData();
    }
  }
})();


// Inicia o APP
App.init();