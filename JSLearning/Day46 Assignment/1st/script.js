let btn = document.querySelector("#aboutMe");
let aboutMe = document.querySelector(".card h5");

btn.addEventListener("click", () => {
  aboutMe.style.opacity = "1";
  aboutMe.style.transform = "translateY(0)";
  btn.remove();
  btn.style.pointerEvents = "none";
});
