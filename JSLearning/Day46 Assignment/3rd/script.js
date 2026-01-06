// let elem = document.querySelectorAll('.elem')

// elem.forEach((e) => {
//     let img = e.querySelector('img');
    
//     e.addEventListener('mouseenter', () => {
//         img.style.opacity = '1'
//     });
//     e.addEventListener('mouseleave', () => {
//         img.style.opacity = "0";
//     });

//     e.addEventListener('mousemove', function (dets) {
//         img.style.left = dets.x + 'px'
//         img.style.top = dets.y + 'px'
//     })
// })

// let elem = document.querySelectorAll(".elem");

// elem.forEach((e) => {
//   let img = e.querySelector("img");

//   e.addEventListener("mouseenter", () => {
//     img.style.opacity = "1";
//   });
//   e.addEventListener("mouseleave", () => {
//     img.style.opacity = "0";
//   });

//   e.addEventListener("mousemove", function (dets) {
//     // Get position relative to the .elem container
//     let rect = e.getBoundingClientRect();
//     let x = dets.clientX - rect.left;
//     let y = dets.clientY - rect.top;

//     img.style.left = x + "px";
//     img.style.top = y + "px";
//   });
// });


let elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  let img = elem.querySelector("img");
  let imgSize = 150;
  let half = imgSize / 2;

  elem.addEventListener("mouseenter", () => {
    img.style.opacity = "1";
  });

  elem.addEventListener("mouseleave", () => {
    img.style.opacity = "0";
  });

  elem.addEventListener("mousemove", (e) => {
    let rect = elem.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // CLAMP inside boundaries
    x = Math.max(half, Math.min(x, rect.width - half));
    y = Math.max(half, Math.min(y, rect.height - half));

    img.style.left = x + "px";
    img.style.top = y + "px";
  });
});
