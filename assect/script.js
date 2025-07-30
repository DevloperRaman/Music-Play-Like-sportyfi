const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const audio = card.querySelector("audio");
      const playBtn = card.querySelector(".play-btn");
      const progressContainer = card.querySelector(".progress-container");
      const progress = card.querySelector(".progress");
      const timeDisplay = card.querySelector(".time");

      playBtn.addEventListener("click", () => {
        if (audio.paused) {
          document.querySelectorAll("audio").forEach(a => {
            a.pause(); // Pause all other audios
            a.closest(".card").querySelector(".play-btn").textContent = "▶";
          });
          audio.play();
          playBtn.textContent = "❚❚";
        } else {
          audio.pause();
          playBtn.textContent = "▶";
        }
      });

      audio.addEventListener("timeupdate", () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percent}%`;
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
        timeDisplay.textContent = `${minutes}:${seconds}`;
      });

      progressContainer.addEventListener("click", (e) => {
        const clickX = e.offsetX;
        const width = progressContainer.clientWidth;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
      });
    });
 function findText() {
  let input = document.getElementById("findInput").value.toLowerCase();
  let allText = document.body.card.innerText.toLowerCase();
  if (allText.includes(input)) {
    alert("Text found on this page!");
  } else {
    alert("Text not found.");
  }
}
  


function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }