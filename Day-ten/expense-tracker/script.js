const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const addBtn = document.getElementById("addExpense");
const list = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function save() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function render() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.desc} - $${exp.amount}
      <span class="delete" onclick="remove(${index})">X</span>
    `;
    list.appendChild(li);
  });

  totalEl.textContent = `Total: $${total}`;
}

function remove(index) {
  expenses.splice(index, 1);
  save();
  render();
}

addBtn.addEventListener("click", () => {
  const d = desc.value.trim();
  const a = parseFloat(amount.value);

  if (!d || isNaN(a)) return;

  expenses.push({ desc: d, amount: a });

  desc.value = "";
  amount.value = "";

  save();
  render();
});

render();