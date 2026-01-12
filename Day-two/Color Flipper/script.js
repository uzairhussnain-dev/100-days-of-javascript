const colors = ["#38bdf8", "#22c55e", "#f97316", "#a855f7", "#ef4444", "#0f172a"];

const colorText = document.getElementById("color");
const btn = document.getElementById("changeColor");

btn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
  colorText.textContent = randomColor;
});

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const theme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) body.setAttribute("data-theme", savedTheme);
