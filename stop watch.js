// Time variables
let milliseconds = 0, seconds = 0, minutes = 0;
let timer;

// Grab the HTML elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapTimes = document.getElementById("lapTimes");

// Start function
document.getElementById("start").addEventListener("click", function() {
  clearInterval(timer);
  timer = setInterval(startTimer, 10); // Update every 10ms
});

// Pause function
document.getElementById("pause").addEventListener("click", function() {
  clearInterval(timer);
});

// Reset function
document.getElementById("reset").addEventListener("click", function() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  lapTimes.innerHTML = ""; // Clear lap times
});

// Lap function
document.getElementById("lap").addEventListener("click", function() {
  const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
  const li = document.createElement("li");
  li.textContent = lapTime;
  lapTimes.appendChild(li);
});

// Start Timer Function
function startTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

// Update Display Function
function updateDisplay() {
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  millisecondsDisplay.textContent = formatTime(milliseconds);
}

// Format Time Function (adds leading zeroes)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
