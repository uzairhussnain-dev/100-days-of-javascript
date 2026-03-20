let countdownInterval;

document.getElementById("startTimer").addEventListener("click", () => {
  let minutes = parseInt(document.getElementById("minutes").value);

  if (isNaN(minutes) || minutes <= 0) {
    alert("Enter valid minutes");
    return;
  }

  let time = minutes * 60;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;

    document.getElementById("time").textContent =
      `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

    time--;

    if (time < 0) {
      clearInterval(countdownInterval);
      alert("⏰ Time's up!");
    }
  }, 1000);
});