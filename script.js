const subscribe = document.querySelector('#subscribe');
subscribe.addEventListener('click', function(){
    subscribe.textContent = 'Subscribed';
    subscribe.style.backgroundColor = 'rgb(235, 211, 211)';
    subscribe.style.opacity = '0.5';
})



const like = document.querySelector('#like')
like.addEventListener('click', function(){
    const likeShow = document.querySelector('#like_Show');
    let insideValue = parseInt(likeShow.textContent);
    let incrementValue = insideValue + 1;
    likeShow.textContent = incrementValue;
})

