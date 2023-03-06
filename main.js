const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
audio = new Audio(""); // by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  // audio based on each key
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
  clickedKey.classList.add("active"); // adding active class to the clicked key element
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); // adding data-key value to the allKeys array  // calling playTune function by pressing keys
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value; // passing the range slider value as an audio volume
};

const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
