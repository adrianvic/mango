let enabled = true;

const toggleButton = document.getElementById("toggle");
updateButtonText();

function updateButtonText() {
  toggleButton.textContent = enabled ? "disable" : "enable";
}

document.getElementById('whitelistSave').addEventListener('click', () => {
  const whitelist = document.getElementById('whitelist').value.split('\n').map(line => line.trim()).filter(line => line);
  browser.storage.local.set({ whitelist: whitelist });
});

browser.storage.local.get("enabled").then((result) => {
  enabled = result.enabled ?? true;
  updateButtonText();
}).catch((error) => {
  console.error("Error retrieving enabled state:", error);
});

browser.storage.local.get("whitelist").then((result) => {
  const whitelist = result.whitelist || [];
  document.getElementById('whitelist').value = whitelist.join('\n');
}).catch((error) => {
  console.error("Error retrieving the whitelist:", error);
});

toggleButton.addEventListener('click', () => {
  enabled = !enabled;
  updateButtonText();
  browser.storage.local.set({enabled: enabled});
})