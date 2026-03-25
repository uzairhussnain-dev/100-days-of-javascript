const noteInput = document.getElementById("noteInput");
const addNote = document.getElementById("addNote");
const noteList = document.getElementById("noteList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${note}
      <span class="delete" onclick="deleteNote(${index})">X</span>
    `;
    noteList.appendChild(li);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

addNote.addEventListener("click", () => {
  const note = noteInput.value.trim();
  if (!note) return;

  notes.push(note);
  noteInput.value = "";
  saveNotes();
  renderNotes();
});

renderNotes();