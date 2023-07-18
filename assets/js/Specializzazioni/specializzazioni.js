const specializzazioni = () => {
  const mainElement = document.querySelector("main");
  const chirurgiaMininvasiva = document.querySelector("#mininvasiva");
  const tessutiMolli = document.querySelector("#tessuti-molli");
  const oncologica = document.querySelector("#oncologica");

  chirurgiaMininvasiva?.addEventListener("click", () => {
    mainElement.innerHTML = `      
    <div class="grid-2rows">
        <ul class="link-content">
          <li><a href="#" id="mininvasiva">Chirurgia mininvasiva</a></li>
          <li>
            <a href="#" id="tessuti-molli">Chirurgia dei tessuti molli</a>
          </li>
          <li><a href="#" id="oncologica">Chirurgia Oncologica</a></li>
        </ul>
        <div class="description">
          <p>
            Clicca sulle seguenti sezioni per conoscere la nostre
            specializzazioni!
          </p>
        </div>
      </div>
    <div>
        // SCRIVI QUA IL CONTENUTO DELLA PAGINA //
    </div>
    `;
  });
  tessutiMolli?.addEventListener("click", () => {
    mainElement.innerHTML = `      
    <div class="grid-2rows">
        <ul class="link-content">
          <li><a href="#" id="mininvasiva">Chirurgia mininvasiva</a></li>
          <li>
            <a href="#" id="tessuti-molli">Chirurgia dei tessuti molli</a>
          </li>
          <li><a href="#" id="oncologica">Chirurgia Oncologica</a></li>
        </ul>
        <div class="description">
          <p>
            Clicca sulle seguenti sezioni per conoscere la nostre
            specializzazioni!
          </p>
        </div>
      </div>
    <div>
        // SCRIVI QUA IL CONTENUTO DELLA PAGINA //
    </div>
    `;
  });
  oncologica?.addEventListener("click", () => {
    mainElement.innerHTML = `      
      <div class="grid-2rows">
        <ul class="link-content">
          <li><a href="#" id="mininvasiva">Chirurgia mininvasiva</a></li>
          <li>
            <a href="#" id="tessuti-molli">Chirurgia dei tessuti molli</a>
          </li>
          <li><a href="#" id="oncologica">Chirurgia Oncologica</a></li>
        </ul>
        <div class="description">
          <p>
            Clicca sulle seguenti sezioni per conoscere la nostre
            specializzazioni!
          </p>
        </div>
      </div>
    <div>
        // SCRIVI QUA IL CONTENUTO DELLA PAGINA //
    </div>
    `;
  });
};
export default specializzazioni;
