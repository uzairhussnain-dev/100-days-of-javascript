const passInput = document.getElementById("passInput");
const strength = document.getElementById("strength");

passInput.addEventListener("input", () => {
  const value = passInput.value;

  let score = 0;

  if (value.length >= 6) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  if (score <= 1) {
    strength.textContent = "Weak ❌";
    strength.style.color = "red";
  } else if (score === 2 || score === 3) {
    strength.textContent = "Medium ⚠️";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Strong ✅";
    strength.style.color = "lightgreen";
  }
});