import openCloseMenu from "./Hamburger/hamburger.js";
import getTime from "./time/time.js";
import struttura from "./Struttura/struttura.js";
import specializzazioni from "./Specializzazioni/specializzazioni.js";
import staff from "./Staff/staff.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  getTime();
  openCloseMenu();
  struttura();
  specializzazioni();
  staff();
});

window.addEventListener("click", (e) => {
  console.log(e.target);
});
