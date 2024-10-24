document.getElementById('whitelistSave').addEventListener('click', () => {
    const whitelist = document.getElementById('whitelist').value.split('\n').map(line => line.trim()).filter(line => line);
    browser.storage.local.set({ whitelist: whitelist });
    console.log('Whitelist saved!');
  });
  

  browser.storage.local.get("whitelist").then((result) => {
    const whitelist = result.whitelist || [];
    document.getElementById('whitelist').value = whitelist.join('\n');
  }).catch((error) => {
    console.error("Error retrieving the whitelist:", error);
  });
  