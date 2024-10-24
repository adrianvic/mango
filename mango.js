console.log("[Mango] Let's get the business done.")

function checkWhitelist(url) {
    return browser.storage.local.get("whitelist").then((result) => {
      const whitelist = result.whitelist || [];
      return whitelist.includes(url);
    });
  }
  
  const currentHostname = location.hostname;
  
  checkWhitelist(currentHostname).then((isWhitelisted) => {
    if (!isWhitelisted) {
        const styles = `
        * {
        border-radius: 0 !important;
        }
        `;
        const injectedStyle = document.createElement("style");
        injectedStyle.type = "text/css";
        injectedStyle.innerText = styles;
        document.head.appendChild(injectedStyle);
    } else {
        console.log("[Mango] Mercy! This page is whitelisted.")
    }
  });
