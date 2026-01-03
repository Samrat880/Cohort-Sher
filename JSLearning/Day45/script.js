// console.log("Heello")
// setTimeout(() => {
//     console.log("heelo sammy bhai")
// }, 1000);
// console.log("Heello 2")

// let user = 'Samrat';

// setTimeout(() => {
//     console.log('Heelo saammmyyy')
// }, 3000);

// let a = 0;

// let start = setInterval(()=>{
//     console.log(`Heelo Guys ${a++}`);
// }, 1000);

// setTimeout(() => {
//     clearInterval(start)
//     console.log('SetInterval ended')
// },5000)

let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');

let count = 0;

btn.addEventListener('click', function(){
    
    btn.style.pointerEvents = 'none'
    let num = Math.floor(Math.random()*50) + 50;
    console.log(num)

    let pin = setInterval(() => {
        count++;
        h2.innerHTML = count + '%'
        inner.style.width = count + '%';
    },num)
    setTimeout(() => {
        clearInterval(pin)
        console.log('Download in ' ,num/10,'Seconds' )
        btn.innerHTML = 'Download Completed'
        btn.style.opacity = '0.6'
        btn.style.cursor = 'not-allowed'
    }, num*100);
})