
//aula 261 captura eventos de teclado
window.addEventListener('keydown', function (e){
    switch (e.code)    {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log('IGNORED!');
    }



});
