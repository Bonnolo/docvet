const struttura = () => {
  const mainElement = document.querySelector("#content");
  const pianoTerra = document.querySelector("#piano-terra");
  const primoPiano = document.querySelector("#primo-piano");
  const secondoPiano = document.querySelector("#secondo-piano");

  primoPiano?.addEventListener("click", () => {
    mainElement.classList.remove("img-content");
    mainElement.innerHTML = "<h1>primo piano</h1>";
  });
};
export default struttura;
