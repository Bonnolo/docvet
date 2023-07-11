import openCloseMenu from "./Hamburger/hamburger.js";
import getTime from "./time/time.js";

getTime();
openCloseMenu();

window.addEventListener("click", (e) => {
  console.log(e.target);
});
