// Aula 63
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPostSinc(post){
  setTimeout(function(){
    posts.push(post);
  },2000);
};


function getPostsSinc(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}


//esse exemplo é de maneira síncrona
//demora 2 segundos para criar o post
createPostSinc({title: 'Post Assinc', body: 'This is post Assinc'});
//demora 1 segundo para recuperar os posts
getPostsSinc();
//Dessa forma só vai trazer Post One e Post Two 


// a callback aqui pode ser qualquer função, nesse caso vamos chamar o getPosts
// que vai ser executada após a função principal
function createPost(post, callback){
  setTimeout(function(){
    posts.push(post);
    //aqui chama a função passada na callback
    //dessa forma garante que só irá executar o getPosts após o createPost
    callback();
  },2000);
};


function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title: 'Post Three', body: 'This is post Three'},getPosts);