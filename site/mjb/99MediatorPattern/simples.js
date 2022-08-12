// 1 aqui criamos uma propriedade lastName com o valor nullo não é obrigatório
// mas fica mais compreensivo no código
const User = function(name){
  this.name = name;  
  this.lastName = null;
}


// 2 Criamos uma constante com uma função que vai retornar o que tiver dentro dela
// aqui ela vai retornar o método change e o que tiver dentro de user.lastName
const Properties = function(){
  return {
    //aqui quando chande for acionado ele vai chegar assim
    // change: function('Dexter')
    change: function(user){
      //Dexter.lastName = 'Walter';
      user.lastName = 'Walter';
    }
  }
}


// Aqui criamos uma instância da classe User
// Observe que lastName aqui é null
const dexter = new User('Dexter');
console.log(dexter);


// Aqui criamos uma instância da const Properties();
// Observe que aqui o lastName também é null
const properties = new Properties();
console.log(dexter);


// Por fim chamamos o método change da const Properties 
// como se fosse properties.change({name: 'Dexter', lastName: null});
properties.change(dexter);
console.log(dexter);