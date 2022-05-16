//Aula 264

//bubbling é tipo a ação de uma função vazar para outros elementos

//crio uma constante com o elemento button
const button = document.querySelector('#changeColor');
//crio uma constante com o elemento container
const container = document.querySelector('#container');

//adiciono evento addEventListener que passa o evento e
button.addEventListener('click', function(e){
    //aplico uma cor randomica através da função makeRandomColor
    container.style.backgroundColor = makeRandomColor();
    //evito o bubbling para entender comente essa linha vc vai ver que ao clicar no botão
    //ira sumir tudo pois o addEventListener.toggle('hide') vai aplicar para tudo vai vazar para o container
    e.stopImmediatePropagation();
});

container.addEventListener('click',function(){
    //evento que esconde o container
    container.classList.toggle('hide');
});

 function makeRandomColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

