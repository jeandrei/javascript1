const http = new EasyHTTP;


const App = (function(){

  function getURL(url){
    return new Promise((resolve, reject) => {
      http.get(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }

  async function getDataHtml(){
    let output = '';
    try {
      const users = await getURL('http://localhost:3000/users');
      users.forEach(function(user){
      output += `<li>Nome: ${user.name}, Sobrenome: ${user.secondName}, Email: ${user.email}</li>`;
    })
    } catch (err) {
      output += 'Error trying to get data';
    }
  return output;
  }

  async function getData(){
    let data = '';
    try {
      data = await getURL('http://localhost:3000/users');
    } catch (error){
      data = 'Error trying to get data';
    }
  return data; 
  }

  async function showData(){
    const html = await getDataHtml();
    document.querySelector('body').innerHTML = html;
  }

  return {
    init: function(){
      showData();
    },
    logData: async function(){
      const data = await getData();
      console.log(data);
    }
  }
})();


App.init();