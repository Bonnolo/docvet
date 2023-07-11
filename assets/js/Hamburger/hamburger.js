const openCloseMenu = () => {
  const hamburgerElementOpen = document.querySelector("#open-hamburger");
  const hamburgerElementClose = document.querySelector("#close-hamburger");

  const hamburgerMenu = document.querySelector("#hamburger");

  hamburgerElementOpen.addEventListener("click", () => {
    console.log("open");
    hamburgerMenu.style.display = "grid";
  });

  hamburgerElementClose.addEventListener("click", () => {
    console.log("close");
    hamburgerMenu.style.display = "none";
  });
};
export default openCloseMenu;
