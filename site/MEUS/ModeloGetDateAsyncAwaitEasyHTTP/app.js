const http = new EasyHTTP;


/**
 * 1 Função que recebe uma url da um get e retorna uma nova promise
 */
function requestURL(url){
  return new Promise((resolve, reject) => {
    http.get(url)
    // se der tudo certo resolve/retorna os dados
    .then(res => resolve(res))
    // caso aconteça algum erro rejeita e retorna o erro
    .catch(err => reject(err))
  })
}


/**
 * 
 * Função que pega os dados através da função requestData
 * cria um html e retorna o código html
 * 
 */
async function getData(){
  let data = {
    users: null,
    message: null
  };
  try {
    // pega os dados da API e passa para a const users observe o await
    // com o await aguarda até que os dados cheguem para dar continuidade no código
    const users = await requestURL('http://localhost:3000/users');
    // O retorno é um array users se o array estiver vazio quer dizer que algo deu errado
    if(users.length > 0){
      // caso o array não seja vazio retornamos o array e a mensagem de sucesso
      data.users = users;
      data.message = 'Sucess';
    } else {  
      // se o array estiver vazio disparamos um erro    
      throw new Error('Error trying to get data!');
    } 
  } catch (err) {
    // se o array for vazio o erro é disparado e vem para o catch
    // jogamos o erro para a variável data.message
    data.message = err.message;
  }
// retornamos data
return data;
}

// criamos a função showData que vai mostrar o resultado no index
async function showData(){
  let html = "";
  const data = await getData(); 
   // se tiver dados no array data.users montamos o html
   if(data.users){
    data.users.forEach(function(user){
      html += `<li>Nome: ${user.name}, Sobrenome: ${user.secondName}, email: ${user.email}</li>`
    }); 
  // caso contrário mostramos a mensagem de erro
  }  else {
    html += `<p>${data.message}<p>`;
  } 
 

  // Aplicamo o resultado do htm ao body do index
  document.querySelector('body').innerHTML = html;

}


const App = (function(){

  return {
    init: function(){
      showData();
    }
  }

})();


App.init();