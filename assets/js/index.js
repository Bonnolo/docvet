import openCloseMenu from "./Hamburger/hamburger.js";
import getTime from "./time/time.js";
import struttura from "./Struttura/struttura.js";
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  getTime();
  openCloseMenu();
  struttura();
});

window.addEventListener("click", (e) => {
  console.log(e.target);
});
