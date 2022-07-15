//crio uma instância do easyHTTP
const http = new easyHTTP();

//chamo o prototype get do easyHTTP
//function(posts) é a callback
/* http.get('https://jsonplaceholder.typicode.com/posts', function(posts){
    console.log(posts);
}); */


//crio um objeto data com os valores a ser inserido/editado
let data = {
    title: 'Meu teste post',
    body: 'Post inserido através do easyHTTP'
};

//chamo o prototype post do easyHTTP passando a url, os dados a serem inseridos e a callback
/* http.post('https://jsonplaceholder.typicode.com/posts', data, function(post){
    console.log(post);
}); */

//chamo o prototype put do easyHTTP passando a url com o id do registro no final
//os dados a serem atualizado e a callback
/* http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(post){
    console.log(post);
}); */

//chamo o prototype delete do easyHTTP passando a url com o id do registro a ser excluido no final
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(response){
    console.log(response);
});