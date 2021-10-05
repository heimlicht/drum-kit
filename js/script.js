alert("Made By Naufal Arif K\nOriginal Idea By Wes Bos\nBackground Image By Zachary Smith");

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
