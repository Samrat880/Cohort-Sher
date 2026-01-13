const para = document.querySelectorAll('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];',./`~"
let interval = null;

const orginalText = para.innerText;

para.addEventListener("mouseenter", () => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    para.innerText = orginalText.split("").map((char, index) => {
        if(index < iteration ){
            return orginalText[index]
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    iteration += 0.5;

    if (iteration > orginalText.length) {
      clearInterval(interval);
    }
  }, 40);
});



// let iteration = 0;

// function animateText() {
//   para.innerText = orginalText.split("").map((char, index) => {

//     if (iteration > index) {
//         return char;
//     }
//       return characters.split("")[Math.floor(Math.random() * characters.length)]
//   }).join("")

//   iteration += 0.5
  
// }


// para.addEventListener("mouseenter", (e) => {
//     setInterval(animateText,30);
// })

