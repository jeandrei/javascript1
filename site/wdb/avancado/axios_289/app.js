//Axios é uma biblioteca que permite executar promises mais facilmente
//Onde achar? https://github.com/axios/axios
//é no github mas tem o cdn que é só adicionar no script tem que procurar na página o cdn
//no curso o cara usou o jsDeliver



/********************************************AXIOS EXERCICIO 01***************************
 * 1 - Cria o HTML
 * 2 - Adiciona axios
 * 3 - criar uma função async fetchBitcoinPrice get com await axios do api https://api.cryptonator.com/api/ticker/btc-usd
 * 4 - na função imprimir res.ticker.price
 * 5 - Usar try catch na função
 * 6 - Chamar a função
 */

const fetchBitcoinPrice = async () =>{
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(`O valor atual do bitcoin é: ${res.data.ticker.price}`);
    } catch (e){
        console.log('Algo deu errado', e);
    }
}

//fetchBitcoinPrice();

/**************************************AXIOS EXERCÍCIO 02**********************************
 * 01 - Criar uma const jokes pegando o id jokes - querySelector
 * 02 - Criar uma const button pegando o elemento button pq só tem um
 * 03 - Criar uma função getDadJoke async que pega uma joke do endereço https://icanhazdadjoke.com/
 * essa url retorna conteúdo html então devemos especificar no headers como parâmetro 'application/jason'
 * e retornar res.data.joke
 * 04 - Criar uma função addNewJoke também async que vai adicionar o texto retornado
 * de getDadJoke para uma constante jokeText, depois cria um elemento newLi
 * e append jokeText em newLi e depois newLi em jokes
 * 05 - Por fim cria um addEventListener click em button com a função addNesJoke
 */


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDataJoke = async () => {
    try{
        const config =  { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;

    } catch (e){
        return 'JOKES NOT AVALIABLE!';
    }    
}

const addNewJoke = async () => {
    const jokeText = await getDataJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);



