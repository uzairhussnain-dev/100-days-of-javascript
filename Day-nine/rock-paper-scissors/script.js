const buttons = document.querySelectorAll(".choices button");
const result = document.getElementById("result");

const options = ["rock", "paper", "scissors"];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const user = btn.dataset.choice;
    const computer = options[Math.floor(Math.random() * 3)];

    let outcome = "";

    if (user === computer) {
      outcome = "Draw 🤝";
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      outcome = "You Win 🎉";
    } else {
      outcome = "You Lose 😢";
    }

    result.textContent = `You: ${user} | Computer: ${computer} → ${outcome}`;
  });
});