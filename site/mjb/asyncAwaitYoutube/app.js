


async function makeRequest(url){
  console.log(`1 Making request to ${url}`);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(url == 'Google'){
        const teste = processRequest(url);
        resolve(teste);
      } else {
        reject('We only accept request from Google');
      }      
    },3000);
  });
    
}



async function processRequest(response){
  console.log(`2 Getting respons from ${response}`);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('3 Response from request ' + response);
    },3000)    
  })
  
}

async function work(){
  try{
    const request = await makeRequest('Google');
    console.log(request);
  } catch (err){
    console.log('Error: '+ err);
  }
  
}

work();

