import { gsap } from "gsap";

const openCloseMenu = () => {
  //const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  const hamburgerElementOpen = document.querySelector("#open-hamburger");
  const hamburgerElementClose = document.querySelector("#close-hamburger");

  const hamburgerMenu = document.querySelector("#hamburger");
  const layerBlur = document.querySelector(".hamburger-blur");
  console.log(layerBlur);

  hamburgerElementOpen?.addEventListener("click", () => {
    //console.log("open");
    gsap.fromTo(hamburgerMenu, { x: 1600 }, { duration: 0.5, x: 0 });
    gsap.fromTo(layerBlur, { opacity: 0 }, { duration: 0.3, opacity: 1 });
    hamburgerMenu.style.display = "block";
    layerBlur.style.display = "block";
  });

  const closeMenu = async () => {
    gsap.to(layerBlur, { duration: 0.3, opacity: 0 });
    await gsap.to(hamburgerMenu, { duration: 0.8, x: 2000 });
    hamburgerMenu.style.display = "none";
    layerBlur.style.display = "none";
  };

  hamburgerElementClose?.addEventListener("click", async () => {
    //console.log("close");
    closeMenu();
  });
  hamburgerMenu?.addEventListener("click", async () => {
    //console.log("close");
    closeMenu();
  });
};
export default openCloseMenu;
