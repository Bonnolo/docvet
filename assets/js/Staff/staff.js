const staff = () => {
  const mainElement = document.querySelector("main");
  const medico = document.querySelector("#medico");
  const infermieristico = document.querySelector("#infermieristico");
  const receptionist = document.querySelector("#receptionist");

  medico?.addEventListener("click", () => {
    mainElement.innerHTML = `
        <div class="grid-2rows">
        <ul class="link-content">
          <li><a href="#">Personale Medico</a></li>
          <li><a href="#">Personale Infermieristico</a></li>
          <li><a href="#">Receptionist</a></li>
        </ul>
        <div class="description">
          <p>
            Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
          </p>
        </div>
      </div>
      <div>
        // contenuto qua //
      </div>`;
  });

  infermieristico?.addEventListener("click", () => {
    mainElement.innerHTML = `
        <div class="grid-2rows">
        <ul class="link-content">
          <li><a href="#">Personale Medico</a></li>
          <li><a href="#">Personale Infermieristico</a></li>
          <li><a href="#">Receptionist</a></li>
        </ul>
        <div class="description">
          <p>
            Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
          </p>
        </div>
      </div>
      <div>
        // contenuto qua //
      </div>`;
  });

  receptionist?.addEventListener("click", () => {
    mainElement.innerHTML = `
        <div class="grid-2rows">
        <ul class="link-content">
          <li><a href="#">Personale Medico</a></li>
          <li><a href="#">Personale Infermieristico</a></li>
          <li><a href="#">Receptionist</a></li>
        </ul>
        <div class="description">
          <p>
            Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
          </p>
        </div>
      </div>
      <div>
        // contenuto qua //
      </div>`;
  });
};

export default staff;
