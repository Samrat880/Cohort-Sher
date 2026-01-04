let img = document.querySelector('img')
let heart = document.querySelector('#heart')

img.addEventListener('dblclick', function(){
    heart.style.opacity = 1;
    heart.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
    
    setTimeout(() => {
        heart.style.transform = 'translate(-50%, -400%) scale(1) rotate(180deg)';
    }, 800);

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        heart.style.transform = 'translate(-50%, -50%) scale(0) rotate(-70deg)';
    }, 1200);

})