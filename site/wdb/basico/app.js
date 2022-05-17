/**  
 * 
 * ***************************DECLARAÇÃO DE VARIÁVEIS***************************************
 * Null - Intentional absance of any value - Must be assign
 * exemplo: let loggedInUser = null; value is explicitly nothing
 * Undefined - Variables that do not have an assigned value are undefined
 * exemplo: let pickles; we didn't assign a value
 * pickles; // undefined
 * 
 */

/*
Variaveis são declaradas com let ou const e não com var exemplo
*/
let idade = 18;
const pi = 3.14;
// Para escrever textos com variáveis se usa `` e a variável se coloca ${variável}
console.log(`O valor de idade é ${idade} e o valor de PI é ${pi}.`);

/**Strings são indexadas */
let string = 'programar';
console.log(`A primeira letra da string é: ${string[0]}.`);

/**
 * 
 * 
 * ***************************STRINGS**********************************************
 * \n - newline
 * \' - single quote
 * \" - double quote
 * \\ - backslash
 * 
 * Template Literals é como se escreve texto e valor de variáveis em modern javascript
 * `I counted ${3 + 4} sheep`;
 * 
 */

/**Métodos para strings */

//Deixar com letra Maiúscula
let upperString = string.toUpperCase();

//Deixar com letra Minuscula
let lowerString = string.toLowerCase();

console.log(`A string UpperCase é: ${upperString} e a string LowerCase é ${lowerString}.`)

//Remover espaço em branco no começo ou fim da string
let stringspace = ' Essa é uma string com espaços em branco no início e no fim        ';
let stringnospace = stringspace.trim();
console.log(stringnospace);

//Pegar o index de uma parte da string por exemplo qual o index de log na palavra catalog
let indexString = 'catalog';
let indexLog = indexString.indexOf('log');
console.log(`O index de log dentro da palavra catalog é: ${indexLog}`);

//Cortar um pedaço de uma palavra slice
let str = 'supercalifragilisticexpialidocious';
console.log(str.slice(0,5));

//Substituir um pedaço de uma palavra por outra replace
let annoyingLaugh = 'teehee so funy! teehee!';
console.log(annoyingLaugh.replace('teehee', 'haha'));

//Usar mais de um método para a mesma string
let email = "    USUARIO@gmail.COM     ";
let emailchecked = email.trim().toLowerCase();
console.log(`O email corrigido é: ${emailchecked}.`)

/**
 * 
 * 
 * *************************************NUMBERS
 * 
 * 
 */

//PI
num = Math.PI;
console.log(`O número PI é: ${num}.`);

//Arredondar número:
num = Math.round(4.9);
console.log(`O número 4.9 arredondado é: ${num}.`);

//Número absoluto
num = Math.abs(-465);
console.log(`O número absoluto de -465 é: ${num};`)

//Raiz quadrada
num = Math.pow(2,5);
console.log((`O número 2 elevado a 5 é: ${num}`));

//Remove décimal
num = Math.floor(3.9999);
console.log(`O número 3.999 sem casas decimais é: ${num}.`);

//Número aleatório Math.random();
// Math.random() gives us a random decimal between 0 and 1 (non-inclusive)
num = Math.random();
console.log(`O número aleatório entre 0 e um gerado foi: ${num}.`);


/** Porém para gerar um número inteiro temos que usar a seguinte formula
 * imagine o seguinte
 * no primeiro passo vamos multiplicar o número por 10 assim se gerar 0.5879834758437
 * o resultado será 5.879834758437
 * depois retiramos o decimal com o método flor que vai ter como resultado 5
 * por último adicionamos mais um ao valor que aqui ficaria 6
 * 
 * const step1 = Math.random(); vai gerar um número entre 0 e 1 -> 0.5879834758437
 * const step2 = step1 * 10; -> 5.879834758437
 * const step3 = Math.flor(step2); -> 5
 * const step4 = step3 + 1; -> 6
 * mas tudo isso em uma única linha fica assim
 * const randomNum = Math.floor(Math.random() * 10) + 1;
 * para fazer com que gere até outros números é só mudar o 10 exemplo para gerar até 100
 * const randomNum = Math.floor(Math.random() * 100) + 1;
*/
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(`O exemplo de um número aleatório gerado seria: ${randomNum}.`);

//Transformar uma string em número
num = parseInt('23 Carros');
console.log(`A string 23 Carros transformada em número é: ${num}.`);

/**
 * 
 * 
 * *******************************Boolean Logic
 *  >   Greater than
 *  <   Less than
 *  >=  Greater than or equal to
 *  <=  Less than or equal to
 *  ==  eaquality
 *  !=  not equal
 *  === strict equality
 *  !== strict non-equality
 *  &&  AND
 *  ||  OR
 *  !   NOT !(0 === 0) false
 *  
 *                              == 
 * 
 * Checks form equality of value, but not equality of type.
 * It coerces both values to the same type and then compares them.
 * This can lead to some unexpected results!
 * 10 == '10; true
 * 0 == false; true
 * 
 *                              ===
 * 
 * Checks for equality of value and type.
 * 10 === '10'; false
 * 0 === false; false
 * 
 * 
 * Thruthy and Falsy Values
 * All JS values have an inherent trhuthyness or falsyness about them.
 * Falsy Values:
 *      false
 *      0
 *      "" (empty string)
 *      null
 *      undefined
 *      Nan
 * Everything else is truthy
 * 
 */

//ELSE IF pode usar uma sequencia de else if para várias verificações exemplo
let rating = 1;

if (rating === 3){
    console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2){
    console.log("MEETS EXPECTATIONS");
}
else if (rating === 1){
    console.log("NEEDS IMPROVEMENT");
}

/**17
 * 
 * 
 *********************************************ARRAYS
 * 
 * 
 */

 //Apenas declarar um array
 let students = [];

 //Criar um array
 let colors = ['rad', 'orange', 'yellow'];

 //Cada item do array tem um index, para acessalo devemos informálo
 console.log(`O índice 0 do array colors é: ${colors[0]}.`);

 //Para saber o tamanho de um array utilizamos o lenght
 console.log(`O array colors possúi ${colors.length} itens.`);

 //Modificando um array
 colors[0] = 'red';
 console.log(`O indice 0 do array colors foi modificado para ${colors[0]}.`);

 /**
  * 
  * 
  * ************************ARRAY METHODS
  * Push - add to end
  * Pop - remove from end
  * Shift - remove from start
  * Unshift - add to start
  * concat - merge arrays
  * includes - look for a value
  * indexOf - just like string.indexOf
  * join - creates a string from an array
  * reverse - reverses an array
  * slice - copies a portion on an array
  * splice - removes/replaces elements
  * sort - sorts an array
  * 
  * 
  */

const myEggs = ['brown', 'brown'];
console.log(`myEggs as it was created:`);
console.log(myEggs);

//Add a value to an array
myEggs.push('purple');
console.log(`myEggs after add purple`);
console.log(myEggs);

//Nested Arrays - Array dentro de Array
//We can store arrays inside other arrays
const ncolors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['green', 'olive'],
    ['blue', 'navy blue'],
    ['purple','orchid']
];

//Para acessar um valor do array bidimensional informamos a linha e a coluna
console.log(`A linha 3 coluna 1 do array ncolors possui o valor ${ncolors[3][1]}.`);

/**18
 * 
 * 
 * 
 * ***********************************************OBJECT LITERALS
 * Objects are collections of properties.
 * Properties are a key-value pair
 * Rather than accessing data using an index, we use custom kays.
 * 
 * 
 */

//Declarar uma Object Literals
console.log('* Exemplo de object literals');
const fitBitData = {
    totalSteps          :308727,
    totalMiles          :211.7,
    avgCalorieBurn      :5755,
    workoutsThisWeek    :'5 of 7',
    tags:['#sleep', '#workout', '#gym'],
    avgGoodSleep        :'2:13'
};


/**
 * IMPORTANTE quando comparamos objetos ou arrays, se criamos dois objetos ou arrays
 * iguais na comparação sempre vai dar false. 
 * Agora se copiamos um objeto ou array para outro objeto ou array
 * na comparação vai ser true.
 * Exemplo
 */
const person1 = {name: 'Max'};
const person2 = {name: 'Max'};
console.log(person1 == person2);//false
//Agora copiando vai dar true
const person3 = person2;
console.log(person3 == person2);//true
//o mesmo vale para arrays



//Acessar os valores
console.log(`Total Steps é ${fitBitData.totalSteps}.`);
console.log(`A primeira tag é: ${fitBitData.tags[0]}.`);

//Atualizar uma propriedade
fitBitData.workoutsThisWeek = '6 of 7';
fitBitData.workoutsThisWeek += 7.5;

//Adicionar uma propriedade
fitBitData.heartStillBeating = true;
console.log('O array fitBitData:')
console.log(fitBitData);

//Array + Objeto
console.log('* Criação de um Array + Objeto');
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
];
console.log('O objeto + array shoppingCart:');
console.log(shoppingCart);

/**19
 * 
 * 
 * *******************************************LOOPS 
 * 
 * 
 */

//for
console.log('* Exemplo do loop for: Imprime do 1 ao 10');
for (let i=1; i<=10; i++){
    console.log(i);
}

//Looping Over Arrays
console.log('Looping over arrays');
const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++){
    console.log(`O indice do ${i} do array animals contem ${animals[i]}.`);
}

//while
console.log('* Exemplo de while: Imprime do 0 ao 10');
num = 0;
while (num <= 10){
    console.log(num);
    num++;
}

//The Break Keyword
//se quisermos interromper o código de execução podemos usar a palavra break
console.log('* Exemplo do uso da palavra break para parar a execução do loop');
num = 1;
while(true){
    if(num >= 11){
        console.log('O Break interrompeu o loop.');
        break;
    }
console.log(`Entrou no loop pela ${num}ª vez.`);
num++;
}

//for of usado muito com foreach
console.log('* Exemplo de for of que é usado como foreach.');
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subreddits){
    console.log(`O valor de sub é ${sub}.`);
}

//Nested for of (for of dentro de for of)
console.log('* Exemplo de nested for of - for of dentro de for of');
const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

for (let row of magicSquare){
    let sum = 0;
    for (let num of row){
        sum += num;
    }
    console.log(`Row of ${row} sums to ${sum}`);
}



/**20
 * 
 * 
 * *****************************FUNÇÕES
 * The return statement ends function execution and specifies the value to be returned 
 * by that function
 * 
 * 
 */

console.log('* Exemplo de função');
function add(x,y){
    return x + y;
}
console.log(`A soma de 5 + 5 é: ${add(5,5)}`);

/**21
 * 
 * ****************************FUNCTIONS IN DETAIL
 * 
 */

console.log('* Função que retorna um número ao quadrado. Forma de declaração com constante')
const square = function (num){
    return num * num;
}
console.log(square(7));

//Função como argumento. Função que chama função, útil quando precisa chamar uma função um determinado número de vezes dependendo de um resultado
console.log('Função como argumento. Função que chama função, útil quando precisa chamar uma função um determinado número de vezes dependendo de um resultado');
//Função qualquer nesse caso para imprimir hahahah
function laugh(){
    console.log("HAHAHAHAHAHAHAHA");
}
//Função como argumento, vai executar outra função (func) um úmero de vezes (t)
function callFuncTimes(func,t){
    for(i=0; i<t; i++){
        func();
    }
}
//Chamo a função passando a função que quero executar como argumento bem como o número de vezes
callFuncTimes(laugh,4);

//Returning functions - Função que cria função
console.log('Função que cria função');
//(1) crio uma função normal com dois parâmetros
function makeBetweenFunc(min,max){
    //vai retornar uma função com o parâmetro val
    return function (val){
        return val >= min && val <= max;
    }

}
// ao final o retorno da função será por exemplo se chamado inAgeRange = makeBetweenFunc(18,100);
/**
 *     function(val){
 *          return val >= 18 && val <= 100;
 * 
 *      }
 */
//(2) Atribuo o return da função a uma constante, agora a função será atribuida a constante inAgeRange
const inAgeRange = makeBetweenFunc(18,100);
//(3) Chamo a função pronta pronta
console.log(inAgeRange(17));

//Methods - We can add functiona as propertis on objects. We call tham methods.
console.log('Funções como propriedades de objetos');
const math = {
    multiply : function(x,y){
        return x * y;
    },
    divide  : function(x,y){
        return x / y;
    },
    square: function(x){
        return x * x;
    }
};
console.log('* Exemplo para chamar uma função como propriedade de um objeto');
console.log(math.multiply(5,6));

//Maneira abreviada
console.log('Função como propriedade de objetos abreviado');
const nmath = {
    blah: 'Hi',
    add(x,y){
        return x + y;
    },
    myltiply(x, y){
        return x * y;
    }
};
console.log('Resultado da forma abreviada');
console.log(nmath.add(50,60));

//Uso da palavra this, usado para acessar propriedades do mesmo objeto
const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName(){
        return `${this.first} ${this.last}`;
    }
};
console.log(`The person full name is ${person.fullName()}`);

/**22
 * 
 * 
 * ******************************FUNCTION CALLBACK Tem que ter uma função dentro
 * forEach
 * map
 * filter
 * find
 * reduce
 * some
 * every
 * 
 * 
 */

//Foreach - Accepts a callback function.
//Calls the function once per element in the array.
console.log('* Exemplo de função foreach');
const foreachnums = [9,8,7,6,5,4,3,2,1];
foreachnums.forEach(function (n){
    console.log(n * n)
});

//Map - Createa a new array with the result of calling a callback on every element in the array.
console.log('* Exemplo de função map');
const maptexts = ['rofl', 'lol', 'omg', 'ttyl'];
//vai passar por cada valor do array e passar para t na função
const caps = maptexts.map(function(t){
    return t.toUpperCase();
});
console.log(caps);

//Arrow Functions - Forma compacta para funções regulares
/**
 *  EXEMPLOS
 * 
 * FUNÇÃO REGULAR
 * const isEven = function(num){
 *  return num % 2 === 0;
 * }
 * 
 * ARROW FONCTION
 * const isEven = (num) => {
 *  return num % 2 === 0;
 * }
 * 
 * ARROW FUNCTION NO PARAENS
 * const isEven = num =>{
 *  return num % 2 === 0;
 * }
 * 
 * IMPLICIT RETURN
 * const isEven = num =>(
 *  num % 2 === 0
 * );
 * 
 * ON-LINE IMPLICIT RETURN
 * const isEven = num => num % 2 === 0;
 * 
 */
//Compacta
console.log('* Forma compacta da função - Arrow Functions');
const square2 = (x) => {
    return x * x;
}
console.log(square2(6));

//Find - returns the value of the first element in the array that satisfies the provided testing function
console.log('* Exemplo find');
let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];
let movie = movies.find(movie => {
    return movies.includes('Mrs.')
});

//Se existir o parâmetro passado na string retorna zero caso contrário retorna -1
let movie2 = movies.find(m => m.indexOf('Mrs') === 0);

//O indexOf retorna 0 se encontrar a string passada como parâmetro, a linha acima bazicamente faz essa varificação
//retornando zero pq encontrou o parâmetro passado dentro da string
console.log('* Exemplo de como funciona o indexOf, retorna 0 pois existe a string passada');
console.log('Mrs. Doubtfire'.indexOf('Mrs'));//retorna 0 pq existe Mrs na string caso contrário retornaria -1

//Filter - Creates a new array with all elements that pass the teste implemented by the provided function
console.log('* Exemplo de filter');
const filternums = [9,8,,7,6,5,4,3,2,1];
const odds = filternums.filter(n => {
    return n % 2 === 1;//our callback returns true or false, if it returns true, n is added to the filtered array
});
console.log(`The odds numbers are: ${odds}`);

//Every - tests whether all elements in the array pass the provided function. It returns a boolean value.
//Vai retornar true se todas as palavras tiverem um tamanho de 3 caracteres se uma tiver 4 retorna false
console.log('* Exemplo deevery');
const everywords = ['dog', 'dig', 'log', 'bag', 'wag'];
const allok = everywords.every(word => {
    return word.length === 3;
});
console.log(`Resultado para todas as palavras tem 3 caracteres: ${allok}`);

//Some - Similar to every, but returns true if ANY of the array elements pass the test function
console.log('* Exemplo de some');
const somewords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
const someok = somewords.some(word => {
    return word.length > 4;
});
console.log(`Ao menos uma palavra tem 4 caracteres no array? ${someok}`);

//Reduce - Executes a reducer function on eah element of the array resulting in a single value
/**
 * Funciona assim ele vai colocar o valor sempre em currentValue e retornar sempre para o acumulador
 * então na primeira interação o acumulador vai ter 0/null e currentValue vai ter 3
 * vai fazer a operação 0+3 e retornar o resultado para o acumulador que vai ficar com 3
 * vai colocar o próximo valor em currentValue nesse caso 5
 * vai somar o que está no acumulador 3 + currentValue 5
 * vai retornar 8 para o acumulador e vai novamente colocar o próximo valor para o currentValue 7
 * assim por diante
 */
const sumarray = [3,5,7,9,11].reduce((acumulator, currentValue)=>{
    return acumulator + currentValue;
});
console.log(`A soma dos valores do array usando reduce é: ${sumarray}`);

//Outro exemplo do uso do Reduce
let grades = [89,96,58,77,62,93,81,99,73];
const topScore = grades.reduce((max,currVal)=>{
    if(currVal > max) return currVal;
    return max;
},100);//Se quiser colocar um valor inicial o 100 aqui é o primeiro valor a ser verificado
console.log(`Outro exemplo de reduce, traz o maior número: ${topScore}`);

//Outro exemplo do uso do Reduce
const votes = ['y','y','n','y','n','y','n','n','n','y','y','y','y'];
const tally = votes.reduce((acumulador, votes) => {    
  //(acumulador['y'] || 0) aqui é o seguinte, se tiver algum valor em acumuldor['y'] pega o valor caso contrário atribui 0
  //acumulador['y'] = (acumulador['y'] || 0) + 1;  
    acumulador[votes] = (acumulador[votes] || 0) + 1;
    return acumulador;
}, {});
console.log(tally);

/**23
 * 
 * 
 * *************************************************SPREAD
 * Expands an iterable (array, string, etc) into a list of arguments
 * básicamente explode um array exemplo se eu viver um array [9,3,2,8] spret transforma em 9,3,2,8 ou seja 4 valores diferentes
 * 
 * 
 */

const sprednums = [9,3,2,8];
Math.max(sprednums);//aqui vai dar como resultado NaN not a number pois estamos passando um array Math.max([9,3,2,8])
//O spread faz exatemente isso
spreadmax = Math.max(...sprednums);//Math.max(9,3,2,8)
console.log(`O maior número usando spred é: ${spreadmax}`);

//podemos usar o spread para juntar arrays
const snums1 = [1,2,3];
const snums2 = [4,5,6];
const allsnums = [...snums1, ...snums2];
console.log(`Juntando dois arrays com spread: ${allsnums}`);

//In Object Literals spread copies properties from one object into another object literal.
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };
const dog = {...canine, isPet: true };
console.log(`* Copiando propriedades de um objeto para outro com spread`);
console.log(dog);

//REST PARAMS mesma coisa do spred só que deve ser passado, usando spread não precisamos passar vários valores com array
//dessa forma não precisa usar o indice i para fazer operações tipo for (i=0; i<=array.lenght; i++){array[i] +=n }
function sumAll(...nums){
    let total = 0;
    for (let n of nums){
        total += n;
    }
return total;
}
console.log(`* Exemplo do uso do rest que evita o uso de array para passar mais de um valor para uma função: ${sumAll(1,2,3,4,5)}`);

//Destructing - passo valores de um array para outro seguindo a ordem dos valores
console.log('* Exemplo destructing que permite pegar valores de um array na sequencia 1º, 2º, 3º e atribuir a outras variáveis');
const scores = [929321, 899341, 888336,772739, 543671, 243567, 111934];
//gold receberá - 929321
//silver receberá - 899341
//se quiser pode colocar o resto em outra variavel usando o spread ...
const [gold, silver, ...others] = scores;// aqui ele vai passar na sequencia o que tem nos dois primeiros valores de score 
console.log(`Exemplo destructing: Gold = ${gold} silver: ${silver}, others: ${others}`);

/**24
 * 
 * 
 * **************************************THE DOM DOCUMENT OBJECT MODEL
 * What is it? - The DOM is a JavaScript representation of a webpage.
 * It's your JS "window" into the contents of a webpage
 * It's just a bunch of objects that you can interact with via JS
 * 
 * 
 */



/**
 * 
 * 
 * Document 
 * The document object is our entry point into the world of DOM.
 * It contains representations of all the content on a page, plus tons of useful methods and properties
 * 
 * 
 */


/**
 * 
 * 
 * Selecting - 1) Select 2) Manipulate
 * getElementById
 * getElementsByTagName
 * getElementsByClassName
 * 
 * 
 */

//Selecting a DOM object with getElementById
const getbanner = document.getElementById('banner');
console.log('* Selecionando um objeto DOM através de getElementById');
console.dir(getbanner);

//Selecting with getEementsByTagName seleciona todos os objetos com uma determinada TAG retorna um HTML COLLECTION
//Obs.: it is not an array you cant do like: allimg.map
console.log('* Selecionando todos os objetos com tag img');
const allimg = document.getElementsByTagName('img');
console.dir(allimg);
console.log('Selecionando o primeiro objeto do HTML COLLECTION ou seja a primeira imagem');
console.dir(allimg[0]);
console.log(`Número de objetos retornados pelo html collection: ${allimg.length}`);

//Loop over all elements of a html collection and printing their sources
console.log('Looping pelos objetos e escrevendo sua propriedade source');
for(let img of allimg){
    console.log(img.src);
}

//Changing a object property 
console.log('Alterando a propriedade de um objeto, neste caso o source de uma imagem, descomente a linha para aplicar');
//allimg[0].src = 'file:///home/jeandrei/Dropbox/Ajuda_Tutoriais/Desenvolvimento/javascript/img/square1.jpg';

//Selecting with getElementByClassName mesma coisa que o getElementByTagName
//Porem seleciona todos os objetos de uma determinada classe e retorna um HTML COLLECTION
const squareimgs = document.getElementsByClassName('square');
console.log('Selecionando todas as imagens de classe square');
console.dir(squareimgs);
/* console.log('Alterando o src de todas as imagens de classe square');
for(let img of squareimgs){
    img.src = 'file:///home/jeandrei/Dropbox/Ajuda_Tutoriais/Desenvolvimento/javascript/img/square1.jpg';
} */

/**
 * 
 * 
 * *****************************************************QUERY SELECTOR 
 * A new, all-in-on method to select a single element
 * document.querySelector(mesmapropriedade do css)
 * 
 * 
 * 
 */

//querySelector seleciona o primeiro elemento encontrado 

//Finds first h1 element
const selectH1 = document.querySelector('h1');

//To get second third etc
const selectSecondImg = document.querySelector('img:nth-of-type(2)');

//Selecting an object by its attribute example a tag with title = Java
const selectAtagTitle = document.querySelector('a[title="Java"]');

//Finds first element with ID of red
const selectIdRed = document.querySelector('#red');

//Finds first element with class of big
const selectClassBig = document.querySelector('.big');

//querySelectorAll mesma ideia só que seleciona todos os elementos encontrados
//Selecionar todoas as imagens
const selectAllImg = document.querySelectorAll('img');
console.dir(selectAllImg);

//Selecting all anchor tag inside paragraph - same idea of css
const selectAnchorInsideP = document.querySelectorAll('p a');
//Printing all links href attribute
for(let link of selectAnchorInsideP){
    console.log(link.href);
}


/**
 * 
 * 
 * 
 * 
 * ********************************************DOM MANIPULATE 246
 * 
 * * ****************************************PROPERTIES & METHODS
 * classList - Manipulação de classes
 * getAttribute() - Pega o atributo de um elemento para ver todos os atributos use console.dir(constante);
 * setAttribute() - Mesma ideia do getAttribute só que para alterar o valor do atributo
 * appendChild() - Adiciona um elemento de forma a ser filho
 * append() - Adiciona um elemento ao final do objeto
 * prepend() - Adiciona um elemento antes do objento
 * removeChild() - Remove um elemento filho
 * remove() - Remove um elemento
 * createElement - Cria um novo elemtnto html
 * innerText - Altera apenas o texto dentro do objeto
 * textContent
 * innerHTML - Altera o código html do elemento
 * value
 * parentElement - Adiciona um elemento como pai do elemento
 * children
 * nextElementSibling - pega o próximo elemento
 * previousElementSibling - pega o elemento anterior
 * style - Altera a propriedade css. Obs.:Não usa - ex. font-size no java script fontSize
 */


//innerText Altera apenas o texto de uma propriedade
//innerText document.querySelector('propriedade').innerText = 'Novo valor';
//Não funciona passando tags document.querySelector('propriedade').innerText = '<b>Novo valor</b>'; 
//Para passar tags tem que usar innerHTML
const itP = document.querySelector('p');
itP.innerText = 'Este parágrafo foi alterado sua propriedade innerText';

//innerHTML mesma coisa que o innerText porém é o código html e não apenas o texto
const ihtmH1 = document.querySelector('h1');
ihtmH1.innerHTML = '<i>Esse título foi alterado com innerHtml</i>';

//Para adicionar conteúdo ao já existente usa o +=
ihtmH1.innerHTML += '<sup>Este texto foi adicionado depois</sup>';

//Alterando o id de um objeto
//document.querySelector('#banner').id = "novoId";

//getAttribute
console.log('* Pega o atributo de um objeto com getAttribute');
const firstLink =  document.querySelector('a');
//Para ver todos os atributos use console.dir(firstLink); e visualize no console
console.log(`O atributo href: ${firstLink.getAttribute('href')}`);
//Outros exemplos
console.log(`O atributo id: ${firstLink.getAttribute('id')}`);
//Outros exemplos
console.log(`O atributo titulo: ${firstLink.getAttribute('title')}`);
//Outros exemplos
console.log(`O atributo class: ${firstLink.getAttribute('class')}`);

//setAttribute
console.log('* Alterando um atributo com setAttribute');
firstLink.setAttribute('href', 'http://www.google.com.br');

//setting input attribute
console.log('* Alterando atributos de um input');
setInput = document.querySelector('input[type="text"]');
setInput.setAttribute('type', 'password');

//Changina/Manipulating style 

//Para ver as propriedades css de um objeto use no console window.getComputedStyle(constante);
//exemplo: window.getComputedStyle(styleH1);
//para ver uma propriedade específica window.getComputedStyle(styleH1).fontSize;
//window.getComputedStyle(styleH1).margin;

const styleH1 = document.querySelector('h1');
//para ver todas as propriedades disponíveis do style use console.dir('styleH');
//tem que ser sempre string mesmo passando valores numéricos
console.log('* Alterando uma propriedade css com style');
styleH1.style.fontSize = '15px';
styleH1.style.border = '2px solid black';
// Alterar as cores de todos os linkd
const allStyleLinks = document.querySelectorAll('a');
for(let link of allStyleLinks){
    link.style.color = 'orange';
    link.style.textDecorationColor = 'green';
    link.style.textDecorationStyle = 'wavy';
}

//classList - usado para manipular classes de objetos
//Adiciona uma classe para um objeto, adiciona acumulativo e não remove as classes existentes
const clH2 = document.querySelector('h2');
console.log('Adicionando a classe pourple para o objeto H2.');
clH2.classList.add('purple');
console.log('Adicionando a classe border para o objeto H2');
clH2.classList.add('border');
//Para remover é o mesmo principio só usando remove
console.log('Removendo a classe border');
clH2.classList.remove('border');
//Verificar se uma classe existe em um objeto
clH2.classList.contains('border');//vai retornar true ou false
//toggle - adiciona a classe se não existe e remove se existe um exemplo de utilização
//é em botões clica uma vez expande uma área clica novamente e recolhe
console.log('Uso do toggle se existir a classe pourple remove e se não existir aplica ao objeto H2');
clH2.classList.toggle('purple');// já existe então remove
clH2.classList.toggle('purple');// não existe então adiciona

//Accessing parents - navegar entre parentes do objeto
const firstB = document.querySelector('b');
//Agora acessar o pai do objeto
const firstBparent = firstB.parentElement;
//Agora acessando o avo
const firstBgrandParent = firstB.parentElement.parentElement;

//Children o mesmo principio de parent mas para baixo filhos e netos etc
const childB = firstB.children;


//nextElementSibling - pega o próximo objeto
//aqui vai pegar a primeira imagem com classe square
const squareImgsSibling = document.querySelector('.square');
//pega o pŕoximo elemento do objeto
const nextImageSibling = squareImgsSibling.nextElementSibling;
//previousElementSibling - pega o objeto anterior
const prevImageSibling = squareImgsSibling.previousElementSibling;


//Criando novos elementos e adicionando a página
//createElement - cria um novo elemento DOM
//Sequencia correta cria o elemento, seta todos os atributos e por último append ou seja adiciona na pagina
const newImgCe = document.createElement('img');
newImgCe.setAttribute('src', 'img/dog.jpg');
newImgCe.classList.add('square');
//Adicionando a imagem
document.body.appendChild(newImgCe);
//Criando um H3
const newH3 = document.createElement('h3');
//Adicionando o texto no h3
newH3.innerText = 'I am a new H3';
document.body.appendChild(newH3);

//Append permite adicionar mais de uma coisa ao mesmo tempo no final do objeto selecionado
//quase como o appendChild
const firstP = document.querySelector('p');
//Adiciona no final do primeiro paragrafo p
firstP.append(' I am a new text yaaaaaayyyyy!!!', ' I am also a new text yaaaayyy');

//prepend adiciona antes do objeto não funciona no IE
//crio o elemento
const newB = document.createElement('b');//crio um objeto em negrito <b></b>
//Adiciono um conteúdo com append poderia ser innerText
newB.append('Hi ');//internamente ficou <b>Hi</b>
//Adiciono antes do primeiro parágrafo criado firstP o novo arquivo em negrito
firstP.prepend(newB);

//insertAdjacentElement() - possibilita especificar onde quer adicionar o objeto
//
/**
 * beforebegin: Before the targetElement itself. - mais usado
 * afterbegin: Just inside the targetElement, before its first child.
 * beforeend: Just inside the targetElement, after its last child.
 * afterend: After the targetElement itself. - mais usado
 */

//Crio um novo elemento H2
const newH2 = document.createElement('h2');
newH2.append('Novo h2 inserido com insertAdjacentElement');
//Seleciono o elemento ao qual quero inserir o novo elemento newH2 antes ou depois
const whereToInsert = document.querySelector('h1');
//Agora inserimos o novo elemento h2 após o elemento H1 que está na constante whereToInsert
whereToInsert.insertAdjacentElement('afterend', newH2);


//After - insere um elemento depois de outro elemento
const h3After = document.createElement('h3');
//atribui um valor ao elemento H3 pelo innerText
h3After.innerText = 'H3 inserido com after';
//insere o elemento depois do elemento h1 que etá na variável whereToInsert
whereToInsert.after(h3After);

//Removing elements
//removeChild - usado antigamente - navegadores antigos suportam
//remove o filho então sempre tem que selecionar o pai para depois remvoer o filho
const removeB = document.querySelector('b');
removeB.parentElement.removeChild(removeB);
//remove - mais usado hoje em dia - remove o elemento selecionado
//const removeImg = document.querySelector('img');
//removeImg.remove();


/**
 * 
 * 
 * 
 * ***********************************DOM EVENTS
 * Responding to user inputs and actions! * 
 * clicks
 * drags
 * drops
 * hovers
 * scrolls
 * form submission
 * key presses
 * focus/blur
 * mouse wheel
 * double click
 * copyng
 * pasting
 * audio start
 * screen resize
 * printing
 */



//onClick - 
//os métodos usados abaixo NÃO SÃO MUITO USADOS pois não permite a atribuição de 
//várias funções ao mesmo evento, a atribuição de uma nova função apaga a anterior 
//criamos uma constante com o elemento botão desejado nesse caso com id v2
//se quiser ver todos os eventos possíveis de o comando no terminal
//console.dir(myBtn);
const myBtn = document.querySelector('#v2');

myBtn.onclick = function () {
    console.log('YOU CLICKED ME!');
    console.log('I HOPE IT WORKED!!');
}

//Ou ainda declarando a função e aplicando a função ao evento
function scream() {
    console.log('AAAAAAAAAAAAA');
    console.log('STOP TOUCHING ME!');
}
//aplico a função scream ao evento onmouseenter do botão myBtn
myBtn.onmouseenter = scream;

//Outro exemplo
document.querySelector('h1').onclick = function () {
    alert('you clicked the H1!!');
}

/**
 * 
 * O JEITO CERTO
 * addEventListener
 * Specify the event type and callback to run
 * 
 * 
 */
btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('CLICKED');
});

//Ou atribuir uma função definida
btn3.addEventListener('click', scream);

//ADICIONANDO MAIS DE UMA FUNÇÃO A UM EVENTO
//Veja com addEventListener podemos adicionar mais de uma função ao mesmo evento
function twist() {
    console.log('TWIST');
}
function shout() {
    console.log('SHOUT');
}
const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist, { once: true });//vai ser executado apenas uma vez
tasButton.addEventListener('click', shout);