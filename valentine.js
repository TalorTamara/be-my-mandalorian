const introTitle = document.getElementById("intro-title");
const crawl = document.getElementById("crawl");
const question = document.getElementById("question");
const theme = document.getElementById("theme");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// start button //
const playBtn = document.getElementById("play-btn");
const playScreen = document.getElementById("play-screen");

playBtn.addEventListener("click", () => {
  // start music
  theme.muted = false;
  theme.play();

  // remove play screen
  playScreen.style.display = "none";

  // start intro animation
  introTitle.style.animationPlayState = "running";
});





// When intro animation ends → start crawl
introTitle.addEventListener("animationend", () => {
  crawl.classList.add("start-crawl");
  introTitle.remove();
});

// Show question after crawl finishes
setTimeout(() => {
  question.style.display = "block";
}, 53000);

// Crazy NO button
noBtn.addEventListener("mouseenter", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 100; // keeps it near center-ish

  const x = Math.random() * (window.innerWidth - btnWidth - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - btnHeight - padding * 2) + padding;

  noBtn.style.position = "absolute"; 

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


// sound effects

const hoverSound = document.getElementById("hover-sound");
const cheersSound = document.getElementById("cheers-sound");

// Play hover sound on any button
[yesBtn, noBtn].forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0; // rewind so it can replay fast
    hoverSound.play();
  });
});


// YES button click → confetti + cheers
yesBtn.addEventListener("click", () => {
  cheersSound.currentTime = 0;
  cheersSound.play();

  // 1️⃣ Normal confetti
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });
})

/*twinkle stars*/
const starField = document.createElement("div");
starField.id = "star-field";
document.body.appendChild(starField);

const totalStars = 150; // number of stars
for (let i = 0; i < totalStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  
  // Random position
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  
  // Random animation delay so stars twinkle at different times
  star.style.animationDelay = Math.random() * 2 + "s";
  star.style.width = star.style.height = (Math.random() * 2 + 1) + "px"; // random size 1-3px
  
  starField.appendChild(star);
}


/*Darth Vader button 'no'*/
const vaderTheme = document.getElementById("vader-theme");
const darthVaderScreen = document.getElementById("darth-vader-screen");

noBtn.addEventListener("click", () => {
  // Stop the regular background theme
  theme.pause();
  theme.currentTime = 0;

  // Show Darth Vader image
  darthVaderScreen.style.display = "block";

  // Play Darth Vader theme
  vaderTheme.currentTime = 0;
  vaderTheme.play();
});

/*Darth Vader button 'no' added effects*/
darthVaderScreen.classList.add("show");

const tryAgainBtn = document.getElementById("try-again-btn");

tryAgainBtn.addEventListener("click", () => {
  // Stop Vader music
  vaderTheme.pause();
  vaderTheme.currentTime = 0;

  // Hide Vader screen
  darthVaderScreen.style.display = "none";

  // Restart main theme
  theme.currentTime = 0;
  theme.play();

  // Reload page to restart whole experience
  location.reload();
});

/*lightsaber sound effect when hovering on try again button*/

const saberHum = document.getElementById("saberHum");

tryAgainBtn.addEventListener("mouseenter", () => {
  saberHum.currentTime = 0;
  saberHum.play();
});

/*Yes button experience*/
const yesScreen = document.getElementById("yes-screen");

yesBtn.addEventListener("click", () => {
  // stop background music
  theme.pause();

  // show your photo screen
  yesScreen.classList.add("show");
});

const startOverBtn = document.getElementById("start-over-btn");

[yesBtn, noBtn, startOverBtn].forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

startOverBtn.addEventListener("click", () => {
  location.reload();
});

