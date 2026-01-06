window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return;

  audio.currentTime = 0; // restart sound
  audio.play();

  key.classList.add("active");
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (key) key.classList.remove("active");
});
