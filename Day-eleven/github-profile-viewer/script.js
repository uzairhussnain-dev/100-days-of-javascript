document.getElementById("searchUser").addEventListener("click", async () => {
  const username = document.getElementById("username").value;

  if (!username) return;

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  if (data.message === "Not Found") {
    document.getElementById("profile").textContent = "User not found";
    return;
  }

  document.getElementById("profile").innerHTML = `
    <img src="${data.avatar_url}" />
    <h3>${data.name || data.login}</h3>
    <p>Followers: ${data.followers}</p>
    <p>Public Repos: ${data.public_repos}</p>
  `;
});