// Simulate ESP32-CAM sending "Plastic Detected" signal
document.addEventListener("DOMContentLoaded", () => {
  // Pretend ESP signal received after 2 seconds
  setTimeout(() => {
    plasticDetected();
  }, 2000);
});

function plasticDetected() {
  const status = document.getElementById("status");
  const timer = document.getElementById("timer");
  const timeLeftDisplay = document.getElementById("timeLeft");

  // Update status
  status.innerHTML = "Plastic Detected!" <br> "5 minutes of Wi-Fi access granted.";
  status.classList.add("connected");

  // Show timer
  timer.classList.remove("hidden");

  // Start 5-minute countdown (300 seconds)
  let timeLeft = 300;

  const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeLeftDisplay.textContent = 
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      status.innerHTML = "Wi-Fi Access Expired." <br> "Please insert another plastic item.";
      status.classList.remove("connected");
      status.classList.add("disconnected");
      timer.classList.add("hidden");
    }
  }, 1000);
} 
