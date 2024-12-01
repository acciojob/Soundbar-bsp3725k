//your JS code here. If required.
// Define the sound files
const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

// Create an audio map
const audioMap = {};
sounds.forEach(sound => {
  audioMap[sound] = new Audio(`./sounds/${sound}.mp3`);
});

// Function to stop all sounds
function stopAllSounds() {
  Object.values(audioMap).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Add event listeners to all buttons
document.querySelectorAll(".btn").forEach(button => {
  const sound = button.getAttribute("data-sound");

  if (sound) {
    button.addEventListener("click", () => {
      stopAllSounds();
      audioMap[sound].play();
    });
  } else if (button.classList.contains("stop")) {
    button.addEventListener("click", stopAllSounds);
  }
});
