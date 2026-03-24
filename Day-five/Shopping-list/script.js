const itemInput = document.getElementById("itemInput");
const addItem = document.getElementById("addItem");
const itemList = document.getElementById("itemList");

let items = [];

function renderItems() {
  itemList.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <span class="remove" onclick="removeItem(${index})">Remove</span>
    `;
    itemList.appendChild(li);
  });
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
}

addItem.addEventListener("click", () => {
  const item = itemInput.value.trim();

  if (item === "") return;

  items.push(item);
  itemInput.value = "";
  renderItems();
});