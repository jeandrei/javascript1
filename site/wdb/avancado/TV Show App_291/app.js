/** 
 * 01 - Criar uma const form e capturar o elemento #searchForm
 * 02 - no form criar um evenlistener submit async function (e) evitando o comportamento default com reventDefault
 * nesta função criar uma constante searchTerm que vai pegar o valor do input text
 * ainda nessa função criar uma const config com o params q:
 * ainda nessa função criar uma const res que traga o resultado da query https://api.tvmaze.com/search/shows?, config
 * depois chamar a função makeImages que vai criar a imagem a partir da url retornada no axios get
 * 3 - Criar uma const makeImages (show)
 * dentro dessa função criar um for para o array show e para cada interação criar uma const img create element ('IMG')
 * verificar se existe uma imagem na interação e adicionar o src para cada imagem
 * por fim adicionar a imagem ao document body
 * 
 * 
 * 
 * 
 * 
 */

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e){
    e.preventDefault();    
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);    
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for(let result of shows){       
        const img = document.createElement('IMG');
        if(result.show.image){
            img.src = result.show.image.medium;
            document.body.append(img);
        }         
    }
}