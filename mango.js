var styles = `
    * {
        border-radius: 0 !important;
    }
`
var injectedStyle = document.createElement("style")
injectedStyle.type = "text/css"
injectedStyle.innerText = styles
document.head.appendChild(injectedStyle)