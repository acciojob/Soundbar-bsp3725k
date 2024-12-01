const sounds = ["sound1", "sound2", "sound3"]; // Add sound file names (without extensions)

const buttonsContainer = document.getElementById("buttons");

// Create buttons for each sound
sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = sound;

  button.addEventListener("click", () => {
    stopSounds(); // Stop other sounds before playing
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsContainer.appendChild(button);

  // Add audio elements to the document
  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `./sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", stopSounds);

function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0; // Reset playback position
  });
}
