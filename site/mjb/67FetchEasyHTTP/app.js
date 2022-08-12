document.querySelector('#button1').addEventListener('click', getText);

document.querySelector('#button2').addEventListener('click', getJson);

document.querySelector('#button3').addEventListener('click', getExternal);

//pega o conteúdo do arquivo test.txt
function getText(){
  //fetch return Promise
  fetch('test.txt')
  .then(function(res){
    //res.text() é uma Promise
    return (res.text());
  })
  .then(function(data){
    console.log(data);
    document.querySelector('#output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  });
}

//pega o conteúdo arquivo json
function getJson(){
  //fetch return Promise
  fetch('posts.json')
  .then(function(res){
    return (res.json());
  })
  .then(function(data){
    console.log(data);
    let output = ''    ;
    data.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.querySelector('#output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}


//pega do conteúdo externo API https://api.github.com/users
function getExternal(){
  //fetch return Promise
  fetch('https://api.github.com/users')
  .then(function(res){
    return (res.json());
  })
  .then(function(data){
    console.log(data);
    let output = ''    ;
    data.forEach(function(user){
      output += `<li>${user.login}</li>`
    });
    document.querySelector('#output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}