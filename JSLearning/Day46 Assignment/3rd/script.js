let elem = document.querySelectorAll('.elem')

elem.forEach((e) => {
    let img = e.querySelector('img');
    
    e.addEventListener('mouseenter', () => {
        img.style.opacity = '1'
    });
    e.addEventListener('mouseleave', () => {
        img.style.opacity = "0";
    });

    e.addEventListener('mousemove', function (dets) {
        img.style.left = dets.x + 'px'
    })
})
