import {
  personaleMedico,
  personaleInfermieristico,
  peronaleReceptionist,
} from "./config.js";

const staff = () => {
  const mainElement = document.querySelector("main");
  let currentState = "img-content";

  const updateContent = () => {
    let content;
    switch (currentState) {
      case "img-content":
        content = `
              <div class="grid-2rows">
                <ul class="link-content">
                  <li><a href="#" id="medico">Personale Medico</a></li>
                  <li>
                    <a href="#" id="infermieristico">Personale Infermieristico</a>
                  </li>
                  <li><a href="#" id="receptionist">Receptionist</a></li>
                </ul>
                <div class="description">
                  <p>
                    Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
                  </p>
                </div>
              </div>
              <div class="img-content">
                <h1>Attenzione e professionalità</h1>
              </div>`;
        break;
      case "medico":
        content = `
              <div class="grid-2rows">
                <ul class="link-content">
                  <li><a href="#" id="medico" class="active">Personale Medico</a></li>
                  <li>
                    <a href="#" id="infermieristico">Personale Infermieristico</a>
                  </li>
                  <li><a href="#" id="receptionist">Receptionist</a></li>
                </ul>
                <div class="description">
                  <p>
                    Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="scrollable">
                  <section class="grid-cards">
                    ${personaleMedico
                      .map((medico) => {
                        //console.log(medico);
                        return `
                        <div class="card">
                          <img src="${medico.picture}">
                        </div>`;
                      })
                      .join("")}
                  </section>
                </div>
              </div>
              `;
        break;
      case "infermieristico":
        content = `
              <div class="grid-2rows">
                <ul class="link-content">
                  <li><a href="#" id="medico">Personale Medico</a></li>
                  <li>
                    <a href="#" id="infermieristico" class="active">Personale Infermieristico</a>
                  </li>
                  <li><a href="#" id="receptionist">Receptionist</a></li>
                </ul>
                <div class="description">
                  <p>
                    Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="scrollable">
                  <section class="grid-cards">
                    ${personaleInfermieristico
                      .map((medico) => {
                        //console.log(medico);
                        return `
                        <div class="card">
                          <img src="${medico.picture}">
                        </div>`;
                      })
                      .join("")}
                  </section>
                </div>
              </div>`;
        break;
      case "receptionist":
        content = `
              <div class="grid-2rows">
                <ul class="link-content">
                  <li><a href="#" id="medico">Personale Medico</a></li>
                  <li>
                    <a href="#" id="infermieristico">Personale Infermieristico</a>
                  </li>
                  <li><a href="#" id="receptionist" class="active">Receptionist</a></li>
                </ul>
                <div class="description">
                  <p>
                    Clicca sulle seguenti sezioni per conoscere i nostri professionisti!
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="scrollable">
                  <section class="grid-cards">
                    ${peronaleReceptionist
                      .map((medico) => {
                        //console.log(medico);
                        return `
                        <div class="card">
                          <img src="${medico.picture}">
                        </div>`;
                      })
                      .join("")}
                  </section>
                </div>
              </div>`;
        break;
      default:
        content = `<div>Errore: Stato non riconosciuto</div>`;
        break;
    }

    mainElement.innerHTML = content;

    const medico = document.querySelector("#medico");
    const infermieristico = document.querySelector("#infermieristico");
    const receptionist = document.querySelector("#receptionist");

    medico?.addEventListener("click", () => {
      currentState = "medico";
      updateContent();
      const cards = document.querySelectorAll(".cards");

      cards.forEach((card) => {
        card.addEventListener("mouseover", (e) => {
          console.log(e.target);
        });
      });
    });

    infermieristico?.addEventListener("click", () => {
      currentState = "infermieristico";
      updateContent();
    });

    receptionist?.addEventListener("click", () => {
      currentState = "receptionist";
      updateContent();
    });
  };

  updateContent();
};

export default staff;
