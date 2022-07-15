function requestData(url){
  const data = [
    {
      nome: 'Jeandrei',
      sobrenome: 'Walter',
      email: 'jeandrei@gmail.com'
    },
    {
      nome: 'Mari',
      sobrenome: 'Walter',
      email: 'mari@gmail.com'
    },
    {
      nome: 'Dexter',
      sobrenome: 'Walter',
      email: 'dex@gmail.com'
    }
  ];
  return new Promise((resolve,reject)=>{
    if(url === 'google'){
      setTimeout(()=>{
        resolve(data);
      },2000)
    } else {
      reject('Invalid url');
    }
   
  }) 
  
}

async function getData(){
  let output = '';
  try{
    const values = await requestData('google');
    values.forEach(function(value){
      output+=`<li>Nome: ${value.nome} ${value.sobrenome} - Email: ${value.email}</li>`;
    })    
  } catch (err){
    output+=err;
  }
  document.querySelector('body') .innerHTML = output;
}


getData();