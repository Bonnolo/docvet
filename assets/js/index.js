import openCloseMenu from "./Hamburger/hamburger.js";
import getTime from "./time/time.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  getTime();
  openCloseMenu();
});

window.addEventListener("click", (e) => {
  console.log(e.target);
});
