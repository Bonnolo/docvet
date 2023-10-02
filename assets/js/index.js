import openCloseMenu from "./Hamburger/hamburger.js";
import getTime from "./time/time.js";
import struttura from "./Struttura/struttura.js";
import specializzazioni from "./Specializzazioni/specializzazioni.js";
import staff from "./Staff/staff.js";
import gsap from "gsap";
import carosello from "./Carosello/carosello.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  getTime();
  openCloseMenu();
  struttura();
  specializzazioni();
  staff();
  carosello();
});

const loadingScreen = () => {
  var tl = gsap.timeline();

  const welcomeScreen = gsap.timeline({
    paused: "true",
  });
  const fromLeft = document.querySelector("transition-container");

  tl.from("#loader", {
    duration: 0.3,
    opacity: 0,
    y: 10,
  });

  let tl1 = gsap.timeline({ ease: "power4.inOut", paused: "true" });

  tl1.set(fromLeft, { pointerEvents: "none" });
  tl1.set(".from-left .tile", { left: "0", width: "0" });
  tl1.set(fromLeft, { pointerEvents: "all" });

  let id,
    i = 0;
  function loader() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (i >= 100) {
      clearInterval(id);
      tl1.play();
      welcomeScreen.play();
    } else {
      i++;
      document.getElementById("loader").innerHTML =
         `  <img src="assets/imgs/logoDocVet.png" alt="" />`;
    }
  }
  window.onload = function () {
    loader();
  };

  welcomeScreen.to(".loading-screen", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    ease: "Power4.out",
    delay: 0.4,
  });
};

const visitobj = window.sessionStorage.getItem("visit");
//console.log(visitobj);
if (
  document.querySelector("#loading") !== null &&
  document.querySelector("#loading") !== undefined
) {
  //console.log(document.querySelector("#loading"));
  if (visitobj == null) {
    loadingScreen();
  } else {
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#loading1").style.display = "none";
  }
}

// window.addEventListener("click", (e) => {
//   console.log(e);
// });
