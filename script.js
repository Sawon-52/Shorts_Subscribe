const subscribe = document.querySelector('#subscribe');
subscribe.addEventListener('click', function(){
    subscribe.textContent = 'Subscribed';
    subscribe.style.backgroundColor = 'rgb(235, 211, 211)';
    subscribe.style.opacity = '0.5';
})