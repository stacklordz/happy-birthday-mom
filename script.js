const audio = document.getElementById("bg-audio");

// Attempt to autoplay
audio.play().catch(() => {
  // If blocked (mobile/autoplay policy), start on first user interaction
  const startAudio = () => {
    audio.play();
    document.removeEventListener("click", startAudio);
  };
  document.addEventListener("click", startAudio);
});

const container = document.querySelector(".container");
const mainContainer = document.querySelector(".mainContainer");
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {
  mainContainer.style.display = "block";
  container.style.display = "none";
});
