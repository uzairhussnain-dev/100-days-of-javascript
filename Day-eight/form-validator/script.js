const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("submit").addEventListener("click", () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailRegex.test(emailValue)) {
    message.textContent = "❌ Invalid email format";
    message.style.color = "red";
    return;
  }

  if (passwordValue.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters";
    message.style.color = "red";
    return;
  }

  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "lightgreen";
});