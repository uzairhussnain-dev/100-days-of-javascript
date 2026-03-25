const toggleBtn = document.getElementById("toggleTheme");

// Load saved theme
let theme = localStorage.getItem("theme") || "dark";
document.body.classList.add(theme);

toggleBtn.addEventListener("click", () => {
  if (theme === "dark") {
    document.body.classList.replace("dark", "light");
    theme = "light";
  } else {
    document.body.classList.replace("light", "dark");
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});