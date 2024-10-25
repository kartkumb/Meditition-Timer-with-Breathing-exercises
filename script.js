let timerElement = document.getElementById("timer");
let breathingElement = document.getElementById("breathing");
let startButton = document.getElementById("startButton");

let meditationTime = 60; // Total time in seconds
let breathCycleTime = 4; // Time for each inhale or exhale
let intervalId;

function startMeditation() {
  let timeLeft = meditationTime;
  let isBreathingIn = true;
  let cycleTimeLeft = breathCycleTime;

  startButton.disabled = true;
  startButton.innerText = "Relax";

  intervalId = setInterval(() => {
    // Update the main timer
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;

    // Update breathing cycle text
    breathingElement.textContent = isBreathingIn ? "Breathe In..." : "Breathe Out...";
    cycleTimeLeft--;

    if (cycleTimeLeft <= 0) {
      isBreathingIn = !isBreathingIn; // Switch between inhale and exhale
      cycleTimeLeft = breathCycleTime; // Reset cycle time
    }

    // End meditation when time runs out
    if (timeLeft < 0) {
      clearInterval(intervalId);
      breathingElement.textContent = "Session Complete!";
      startButton.disabled = false;
      startButton.innerText = "Start";
    }
  }, 1000);
}

startButton.addEventListener("click", startMeditation);
