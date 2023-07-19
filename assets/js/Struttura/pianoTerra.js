const pianoterra = () => {
    const mainElement = document.querySelector("main");
    const pianoTerra = document.querySelector("#piano-terra");
  
    pianoTerra?.addEventListener("click", () => {
      mainElement.innerHTML = ` 
      <div class="grid-2rows">
    <ul class="link-content">
      <li><a href="#" id="piano-terra">piano terra</a></li>
      <li><a href="#" id="primo-piano">Primo piano</a></li>
      <li><a href="#" id="secondo-piano">secondo piano</a></li>
    </ul>
    <div class="description">
      <p>
        Clicca sulle seguenti sezioni per conoscere la nostra struttura!
      </p>
    </div>
  </div>
  <div class="pianoterra">
  </div>`;
    });
  };

export default pianoterra;