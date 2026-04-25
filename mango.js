const currentHostname = location.hostname;
let enabled = true;

browser.storage.local.get("enabled").then((result) => {
  enabled = result.enabled ?? true;
}).catch((error) => {
  console.error("Error retrieving enabled state:", error);
});


function checkWhitelist(url) {
  return browser.storage.local.get("whitelist").then((result) => {
    const whitelist = result.whitelist || [];
    return whitelist.includes(url);
  });
}

checkWhitelist(currentHostname).then((isWhitelisted) => {
  if (!isWhitelisted && enabled) {
    const styles = `
        * {
          border-radius: 0 !important;
        }
        `;
    const injectedStyle = document.createElement("style");
    injectedStyle.type = "text/css";
    injectedStyle.id = "mangoInjectedStyle";
    injectedStyle.innerText = styles;
    document.head.appendChild(injectedStyle);
  }
});
