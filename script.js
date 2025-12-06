const textArea = document.getElementById('textArea');
const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');
const statusEl = document.getElementById('status');

// COPY
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textArea.value);
    showStatus("Copied!");
  } catch (err) {
    showStatus("Copy failed");
    console.error(err);
  }
});

// PASTE
pasteBtn.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    textArea.value = text;
    showStatus("Pasted!");
  } catch (err) {
    showStatus("Paste blocked");
    console.error(err);
  }
});

// small helper
function showStatus(msg) {
  statusEl.textContent = msg;
  setTimeout(() => {
    statusEl.textContent = "";
  }, 1500);
}
