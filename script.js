let currentScreen = 0;
let wishesRevealed = 0;
const totalScreens = 12;
function showScreen(number) {
  const current = document.querySelector(".screen.active");
  const nextScreen = document.getElementById(`s${number}`);
  if (!nextScreen) return;
  if (current) {
    current.classList.remove("active");
  }
  currentScreen = number;
  setTimeout(() => {
    nextScreen.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 150);
}
function next() {
  if (currentScreen < totalScreens - 1) {
    showScreen(currentScreen + 1);
  }
}
const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");
function toggleMusic() {
  if (!audio) return;
  if (audio.paused) {
    audio.play()
      .then(() => {
        musicBtn.textContent = "Ⅱ";
        musicText.textContent = "Playing our song ♡";
      })
      .catch(() => {
        musicText.textContent = "Tap again to play ♫";
      });
  } else {
    audio.pause();
    musicBtn.textContent = "♫";
    musicText.textContent = "Play our song";
  }
}
function finale() {
  const hearts = document.querySelector(".floating-hearts");
  if (hearts) {
    hearts.classList.add("celebrate");
  }
  showScreen(11);
  createHearts();
}
function createHearts() {
  const container = document.querySelector(".floating-hearts");
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = Math.random() > 0.5 ? "♡" : "✦";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.opacity = "0";
    heart.style.color = "#c96f86";
    heart.style.pointerEvents = "none";
    const duration = 4 + Math.random() * 4;
    const delay = Math.random() * 1.5;
    heart.animate(
      [
        {
          transform: "translateY(0) scale(0.7) rotate(0deg)",
          opacity: 0
        },
        {
          transform: "translateY(-35vh) scale(1) rotate(15deg)",
          opacity: 0.8
        },
        {
          transform: "translateY(-110vh) scale(1.2) rotate(-15deg)",
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: "ease-out",
        fill: "forwards"
      }
    );
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, (duration + delay + 1) * 1000);
  }
}
/* Start the page at screen 0 */
document.addEventListener("DOMContentLoaded", () => {
  const firstScreen = document.getElementById("s0");
  if (firstScreen) {
    firstScreen.classList.add("active");
  }
});