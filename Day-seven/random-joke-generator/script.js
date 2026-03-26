document.getElementById("getJoke").addEventListener("click", async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();

  document.getElementById("joke").textContent =
    `${data.setup} - ${data.punchline}`;
});