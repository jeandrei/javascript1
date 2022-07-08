//Create a function makeRequest 
//Create a function processRequest

function makeRequest(location){
  console.log(`Making request to ${location}`);
  return new Promise((resolve,reject)=>{
    if(location === 'Google'){
      resolve('Google says hi')
    } else {
      reject('We only resolve for Google')
    }
  })
}

function processRequest(response){
  console.log('Processing the request');
  return new Promise((resolve)=>{
    resolve(`Extra information + ${response}`);
  })
}

/* makeRequest('Google')
.then((data)=>{
  console.log('Response Recieved')
  return processRequest(data);
})
.then(res => console.log(res))
.catch(err => console.log(err)); */

async function workFunc(){
  const request = await makeRequest('Google');
  console.log(('Response Received'));
  const requestPocessed = await processRequest(request);
  console.log(requestPocessed);
}

workFunc();