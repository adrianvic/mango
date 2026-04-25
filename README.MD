# Mango
I declare war to rouded corners!

<a href="https://addons.mozilla.org/en-US/firefox/addon/mangocorners/"><img src="./img/Firefox-badges.jpg" alt="Firefox Addon Store Icon" width="200"/></a>

## Example
<img src="https://addons.mozilla.org/user-media/previews/full/307/307505.png?modified=1729803420" alt="Mango VS YouTube default design"/>

## How it works
```css
* {
  border-radius: 0 !important;
}
```
This CSS tells your browser that everything (`*`) should have the property `border-radius` (amount of rounded corner) to 0.

The extension just injects this into your page after checking if the page is whitelisted. This extension is so tiny that you can review `mango.js` and `main.js` by yourself or with help of AI.

## Why Mango
Mango is the codename of _Windows Phone 7.5_, the first version to adopt Microslop's "Metro UI". I grew up as a kid using Windows Phone and that shaped the way I see rounded corners—and I absolutely hate them.