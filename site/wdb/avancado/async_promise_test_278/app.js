/* async function hello(){
    
};
 */


/* const sing = async () => {
    throw 'OH NO, PROBLEM'
    return 'LA LA LA LA'
}

sing()
    .then((data)=>{
        console.log("PROMISSE RESOLVED WITH", data);
    })
    .catch((err)=>{
        console.log("OH NO, PROMISE REJECTED");
        console.log(err)
    }); */


/* const login = async (username,password) => {
    if(!username || !password) throw 'Missing Credentials';
    if(password === 'jean') return 'WELCOME';
    throw 'Invalid Password';
}

login('teste','jean')
.then(msg => {
    console.log('LOGGED IN!');
    console.log(msg);
})
.catch(err => {
    console.log("ERROR!")
    console.log(err);
}) */

const login = async (username) => {
    if(username == 'Jean'){
        console.log('OK');
        return 'Permitido';
    } else {
        console.log('NONONO');
        throw 'Negado';
    }
};


async function teste(){
   try{
    let teste = await login('jean');
   } catch(e){
    console.log('Erro:', e);
   }
    
   
}
