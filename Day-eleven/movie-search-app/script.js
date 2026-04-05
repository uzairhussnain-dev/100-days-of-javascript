const apiKey = "ce0ec90e";

document.getElementById("searchMovie").addEventListener("click", async () => {
  const query = document.getElementById("movieInput").value;

  if (!query) return;

  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const data = await res.json();

  const container = document.getElementById("movies");
  container.innerHTML = "";

  if (data.Response === "False") {
    container.textContent = "No movies found";
    return;
  }

  data.Search.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <h4>${movie.Title}</h4>
      <p>${movie.Year}</p>
    `;

    container.appendChild(div);
  });
});