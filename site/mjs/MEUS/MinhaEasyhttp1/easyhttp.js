/**
 * FUNÇÃO EASYHTTP para fazer solicitações através do XMLHttpRequest
 * Sequência padrão do XMLHttpRequest é
 * XMLHttpRequest.open(metodo,url,true);
 * XMLHttpRequest.onload(callback());
 * XMLHttpRequest.send();
 * Temos que criar uma função easyhttp e uma prototype para cada ação
 * GET,POST,PUT,DELETE
 * 
 */

/**
 * Cria a função easyHTTP
 * e atribui o objeto XMLHttpRequest a propriedade http
 * this.http = new XMLHttpRequest();
 */
function easyHTTP(){
    this.http = new XMLHttpRequest();
}

//Cria a prototype GET passando a url e a callback
easyHTTP.prototype.get = function(url, callback){
    //abro a conexão com o método open passando o método de GET a url do recurso
    //true é que é assincrono
    this.http.open('GET', url, true);

    /*Como se eu usar o this dentro da função seguinte o this vai ser referente
    a função do onload e não da função do prototype, por uma questão de escopo
    crio uma variável let e atribuo o objeto a ela*/
    let self = this;

    // abro o onload chamando a função callback e passando nela a resposta do XMLHttpRequest
    // que vai ser os posts do API
    this.http.onload = function(){
        // se a resposta da requisição for 200 deu certo
        if(self.http.status === 200){
            //passa os posts para a callback
            callback(self.http.responseText);
        } else {
            //se der erro passo uma mensagem para a callback
            callback('Error: ' + self.http.status);
        }
       
    }

    //Finalizo enviando a solicitação XMLHttpRequest
    this.http.send();
}

//Cria a prototype POST passando a url os dados a serem inseridos e a callback
easyHTTP.prototype.post = function(url, data, callback){
    //abro a conexão com o método open passando o método de POST a url do recurso
    //true é que é assincrono
    this.http.open('POST', url, true);
    //Defino a formatação do header, neste caso conteúdo no formato json
    this.http.setRequestHeader('Content-type', 'application/json');

     /*Como se eu usar o this dentro da função seguinte o this vai ser referente
    a função do onload e não da função do prototype, por uma questão de escopo
    crio uma variável let e atribuo o objeto a ela*/
    let self = this;

    // abro o onload chamando a função callback e passando nela a resposta do XMLHttpRequest
    // que vai ser os posts do API
    this.http.onload = function(){
        //passa os posts para a callback
        callback(self.http.responseText);
    }

    //passo os dados a serem inseridos no formato JSON strignify
    this.http.send(JSON.stringify(data));
    
};

//Cria a prototype PUT passando a url do registro a ser atualizado os dados e a callback
easyHTTP.prototype.put = function(url, data, callback){
     //abro a conexão com o método open passando o método de POST a url do recurso
    //true é que é assincrono
    this.http.open('PUT', url, true);
    //Defino a formatação do header, neste caso conteúdo no formato json
    this.http.setRequestHeader('Content-type', 'application/json');

    /*Como se eu usar o this dentro da função seguinte o this vai ser referente
    a função do onload e não da função do prototype, por uma questão de escopo
    crio uma variável let e atribuo o objeto a ela*/
    let self = this;

    // abro o onload chamando a função callback e passando nela a resposta do XMLHttpRequest
    // que vai ser os posts do API
    this.http.onload = function(){
         //passa os posts para a callback
        callback(self.http.responseText);
    }

    //passo os dados a serem inseridos no formato JSON strignify
    this.http.send(JSON.stringify(data));
}

//Cria a prototype DELETE passando a url do registro a ser excluido e a callback
easyHTTP.prototype.delete = function(url, callback){
    //abro a conexão com o método open passando o método de POST a url do recurso
    //true é que é assincrono
    this.http.open('DELETE', url, true);

      /*Como se eu usar o this dentro da função seguinte o this vai ser referente
    a função do onload e não da função do prototype, por uma questão de escopo
    crio uma variável let e atribuo o objeto a ela*/
    let self = this;

    // abro o onload chamando a função callback e passando nela a resposta do XMLHttpRequest
    // que vai ser os posts do API
    this.http.onload = function(){
        // se o status da requisição XMLHttpRequest for 200 quer dizer que deu certo 
        if(self.http.status === 200){
            //passo a mensagem de sucesso para a callback
            callback('The data was successfuly deleted!');
        } else {
            //se der errado passo a mensagem de erro para a callback
            callback('There was a problem trying to delete! Try again latter.');
        }  
    }

    this.http.send();
}