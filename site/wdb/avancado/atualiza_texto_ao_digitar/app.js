//crio uma constante com o elemento input
const input = document.querySelector('input');
//crio uma constante com o elemento h1
const h1 = document.querySelector('h1');

//crio um evento para verificar se algo foi digitado nesse caso addEventListener vai executar toda vez que algo for digitado
input.addEventListener('input', function(e){
    //verifico se o texto for vazio escrevo Enter Your User Name
    if(input.value ===""){
       h1.innerText = "Enter Your User Name";
   }else{
    //caso tenha algo dentro do input excrevo welcome e o nome do usuário
     h1.innerText = `Welcome, ${input.value}`;   
   }
   
});
