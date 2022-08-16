const User = function(name){
  this.name = name;
  //vai receber os métodos da const Chatroom pela linha user.chatroom = this;
  this.chatroom = null;
  //vai receber o valor da linha user.teste = 'meu teste';
  this.teste = null;
}

User.prototype = {
  send: function(message, to){
    this.chatroom.send(message, this, to); // esse send é da linha user.chatroom = this   
    //console.log(`Send message ${message} from ${this} to ${to}`);
  },
  recieve: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}


const Chatroom = function() {
  let users = {};// list of users
 
  return{
    /**
     * 
     * register simplesmente coloca o user dentro do array users[user.name]
     * altera o que tem no objeto User em chatroom passando tudo o que tem dentro da classe
     * Chatroom ou seja o register e o send
     * exemplo brad.chatroom = todos os metodos dessa classe
     * aqui inclusive fiz um teste coloquei um outro atributo user.teste passando 
     * meu teste logo na instância do usuário foi criado brad.teste com o valor meu teste
     */ 
    register: function(user){
      //users['jean'] = user;  
      //user.name que vem da classe User é a chave  
      users[user.name] = user;
      user.chatroom = this; // "this" contem register e send
      user.teste = 'meu teste';
    },
    send: function(message, from, to){
      if(to){
        //to é o usuário que vai receber exemplo jeff.recieve('mensagem',)
        to.recieve(message, from);
      } else {
        for(key in users){
          //users[jean]
          if(users[key] !== from){
            //users[jean]
            users[key].recieve(message, from);
          }
        }
      }
    }
  }  
}

//User.name = Brad - User.chatroom = null
const brad = new User('Brad');

const jeff = new User('Jeff');
const sara = new User('Sara');


const chatroom = new Chatroom();

//console.log(chatroom);

//chatroo.register('Brad')
chatroom.register(brad);
// A partir daí o brad passa a ter os métodos register e send pois foi passado pela linah
// user.chatroom = this;  lá no register para testar apenas digite brad no terminal
chatroom.register(jeff);
chatroom.register(sara);

/* E por ter acesso ao register e send agora pode usar o método send da const Chatroom
   Porém na linha abaixo ele usa o send da prototype
   digite Brad no terminal e verifique que tem duas send 
   uma dentro de chatroom e outra dentro de prototype
   na linha abaixo ele chama a da prototype que só tem message, to*/

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!!!');
