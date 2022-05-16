
//Exemplo tweet impedir o formulário de ser enviado
//postar texto sem atualizar a pagina
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e){
    //previne o comportamento default que é enviar a página submit nesse caso não vai enviar
    e.preventDefault();    
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    postTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';    
});

function postTweet(username, tweet){    
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);  
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);      
    tweetsContainer.append(newTweet);
}