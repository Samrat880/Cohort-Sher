let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = ['Hello','wassup','kese ho', 'noise']

btn.addEventListener('click', function(){
  let element = document.createElement("div");
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let word = Math.floor(Math.random() *arr.length)

  let x = Math.random()* 100
  let y = Math.random()* 100


  element.innerHTML = arr[word]
  element.style.height = "100px";
  element.style.width = "100px";
  element.style.position = 'absolute'
  element.style.left = x + '%'
  element.style.top = y + '%'
  element.style.backgroundColor = `RGB(${c1},${c2},${c3})`;



  main.appendChild(element);
})