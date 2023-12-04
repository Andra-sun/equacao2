const menu = document.querySelector('.home');
const painel = document.querySelector('.selecao');

menu.addEventListener('click', function(){
    if(painel.style.display === 'none'){
        painel.style.display = 'flex';
        painel.classList.add('slide-in');
    }else{
        painel.style.display = 'none';
    }
});