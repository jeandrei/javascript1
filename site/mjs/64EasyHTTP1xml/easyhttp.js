function easyHTTP(){
    this.http = new XMLHttpRequest();
}



// Make an HTTP GET request
// callback é necessário para fazer a solicitação de maneira assincrona
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200){
            //null é erro nesse caso teve resposta código 200 erro igual null
            callback(null, self.http.responseText);
        } else {
            callback('Erro: ' + self.http.status)
        }
    }
    this.http.send();
}

// Make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function() {   
        callback(null, self.http.responseText);        
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function() {   
        callback(null, self.http.responseText);        
    }

    this.http.send(JSON.stringify(data));
}


// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200){
            //null é erro nesse caso teve resposta código 200 erro igual null
            callback(null, 'Post Deleted');
        } else {
            callback('Erro: ' + self.http.status)
        }
    }
    this.http.send();
}
