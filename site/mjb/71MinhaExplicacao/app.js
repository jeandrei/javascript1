/**
 * IMPORTANTE O async await só funciona se o que for retornado for uma Promise
 * 
 */

/* function syncFunc(){
  setTimeout(()=>{
    return('O texto demora 3 segundos')
  },3000)//retorna o texto após 3 segundos
}


const syncRes = syncFunc();
console.log('O valor retornado pela função syncRes é: ' + syncRes);
console.log(syncRes + ' Pois o código continua a execução e apresenta o resultado antes dos 3 segundos');
console.log('Para evitar isso temos que criar uma função async');

async function asyncFunc(){
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Este texto veio de uma função Async após 3 segundos');
    },3000);    
  })

  const err = false;
  if(!err){
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Se tiver algum erro será apresentado no .catch'));
  }


}
//Esemplo .then .catch
asyncFunc()
.then(res => console.log(res))
.catch(err => console.log(err)); */


//Veja para funcionar o await a função tem que ser async e RETORNAR uma Promise
//Lembre o fetch por exemplo retorna uma Promise por isso podemos usar o await fetch direto
async function promiseFunc(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Texto da função promiseFunc');
    },3000)
  })
}

//A função que vai chamar a promiseFunc() tem que ser async uma depende da outra
async function escreve(){
  //só posso usar await aqui pois a função promiseFunc retorna uma Promise
  const texto = await promiseFunc();
  console.log(texto);
}

//Aqui chamo a função escreve que chama a função promiseFunc que retorna uma promise
escreve();








//Exemplo de Promise/async/await em cascata
//função que faz uma request e retorna uma Promise
function makeRequest(location){
  return new Promise((resolve,reject)=>{
    console.log(`Making Request to ${location}`); 
    if(location == 'Google'){
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });//Promise
};//function


function processRequest(response){
  return new Promise((resolve,reject)=>{
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  })
}


/* makeRequest('Google')
.then((response) => {
  console.log('Response Recieved');
  return processRequest(response)
})
.then((processedResponse) => {
  console.log(processedResponse)
})
.catch((err)=>{
  console.log(err);
}) */

//mesma coisa agora com async await
async function doWork(){
  try{
    const response = await makeRequest('Google');
    console.log('Response Recieved');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
  
}

doWork();


