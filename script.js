const video = document.getElementById("video");
video.classList.add("player__video"); // Add the class for Cypress compatibility

const playerButton = document.getElementById("player-button");
playerButton.classList.add("toggle"); // Add the class for Cypress compatibility

const progressFilled = document.querySelector(".progress__filled");
const volumeInput = document.getElementById("volume");
const playbackSpeedInput = document.getElementById("playbackSpeed");
const rewindButton = document.getElementById("rewind");
const skipButton = document.getElementById("skip");

// Play/pause toggle
playerButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playerButton.textContent = "❚ ❚";
  } else {
    video.pause();
    playerButton.textContent = "►";
  }
});

// Update progress bar as video plays
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});

// Volume control
volumeInput.addEventListener("input", (e) => {
  video.volume = e.target.value;
});

// Playback speed control
playbackSpeedInput.addEventListener("input", (e) => {
  video.playbackRate = e.target.value;
});

// Rewind 10 seconds
rewindButton.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

// Skip forward 25 seconds
skipButton.addEventListener("click", () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

