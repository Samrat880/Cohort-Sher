// let btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     let h1 = document.createElement('h1')

//     h1.innerHTML = "Sammy bahi kese ho ?"
//     document.body.appendChild(h1)
// })

let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = ['Hello Sammy Bhai', 'Kese ho Bhai', 'Aaj kal kya chal raha hai', 'Masti me ho na', 'Yaar milna kab hai']

btn.addEventListener('click', function(){

    let h1 = document.createElement('h1')
    let x = Math.random()*100;
    let y = Math.random()*100;
    let z = Math.random()*361;
    let scale = Math.random()*4

    var randomIndex = Math.floor(Math.random() * arr.length);
    h1.innerHTML = arr[randomIndex]
    h1.style.position = 'absolute'

    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = z+'deg'
    h1.style.scale = scale


    main.appendChild(h1) 
    
    // let div = document.createElement('div')

    // let x = Math.random()*100;
    // let y = Math.random()*100;
    // let z = Math.random()*361;

    // let c1 = Math.floor(Math.random()* 256)
    // let c2 = Math.floor(Math.random()* 256)
    // let c3 = Math.floor(Math.random()* 256)

    // div.style.height = '1   50px'
    // div.style.width = '150px'
    // div.style.position = 'absolute'
    // div.style.backgroundColor = `RGB(${c1},${c2},${c3})`
    
    // div.style.left = x + '%'
    // div.style.top = y + '%'
    // div.style.transform = `rotate(${z}deg)`

    // main.appendChild(div)
    

    // div.innerHTML = "Hello Sammy Bhai";

})