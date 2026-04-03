const historyList = document.getElementById("historyList");

let history = JSON.parse(localStorage.getItem("history")) || [];

function saveHistory() {
  localStorage.setItem("history", JSON.stringify(history));
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}