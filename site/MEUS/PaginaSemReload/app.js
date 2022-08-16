const PageState = function(){
  //cria um atributo onde será instânciado o novo state/pagina
  this.currentState = null;
 
  //metodo que instância o novo state
  this.change = function(state){
    this.currentState = new state;
  }

  //inicializa uma página nesse caso a home
  this.init = function(state){
    this.change(state)
  }
  
}

//Cria a instância da página
page = new PageState();

//onde será exibido o código html
const content = document.querySelector('#content');
//UI
const home    = document.querySelector('#home'),
      about   = document.querySelector('#about'),
      contact = document.querySelector('#contact');


//cria a homeState com o código html da página home
homeState = function(){
  content.innerHTML = `<p>HOME</p>`;
}

//cria a aboutState com o código html da página about
aboutState = function(){
  content.innerHTML = `<p>ABOUT</p>`;
}

//cria a aboutState com o código html da página about
contactState = function(){
  content.innerHTML = `<p>CONTACT</p>`;
}

//inicia a homeState página home
page.init(homeState);

//ao clicar no menu home
home.addEventListener('click', (e) => {
  page.change(homeState);
  e.preventDefault();
});


//ao clicar no menu about
about.addEventListener('click', (e) => {
  page.change(aboutState);
  e.preventDefault();
});

//ao clicar no menu about
contact.addEventListener('click', (e) => {
  page.change(contactState);
  e.preventDefault();
});