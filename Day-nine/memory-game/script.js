const emojis = ["🍎","🍌","🍇","🍓","🍍","🥝","🍒","🍉"];
let cards = [...emojis, ...emojis]; // duplicate
cards.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");

let firstCard = null;
let secondCard = null;
let lock = false;

cards.forEach((emoji) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.dataset.value = emoji;
  div.textContent = "?";

  div.addEventListener("click", () => {
    if (lock || div.classList.contains("flipped")) return;

    div.textContent = emoji;
    div.classList.add("flipped");

    if (!firstCard) {
      firstCard = div;
    } else {
      secondCard = div;
      lock = true;

      if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard = null;
        secondCard = null;
        lock = false;
      } else {
        setTimeout(() => {
          firstCard.textContent = "?";
          secondCard.textContent = "?";
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");

          firstCard = null;
          secondCard = null;
          lock = false;
        }, 800);
      }
    }
  });

  grid.appendChild(div);
});