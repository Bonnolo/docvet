import { gsap } from "gsap";

const struttura = () => {
  const mainElement = document.querySelector("#struttura");
  let currentState = "img-content";

  const updateContent = () => {
    let content;
    switch (currentState) {
      case "img-content":
        content = `
                    <div class="grid-2rows">
                        <ul class="link-content">
                            <li><a id="piano-terra">piano terra</a></li>
                            <li><a id="primo-piano">Primo piano</a></li>
                            <li><a id="secondo-piano">secondo piano</a></li>
                        </ul>
                        <div class="description">
                            <p>
                                Clicca sulle seguenti sezioni per conoscere la nostra struttura!
                            </p>
                        </div>
                    </div>
                    <div class="img-content">
                        <h1>Sentirsi al Sicuro</h1>
                    </div>`;
        break;
      case "pianoterra":
        content = `
                    <div class="grid-2rows">
                        <ul class="link-content">
                            <li><a class="active" id="piano-terra">piano terra</a></li>
                            <li><a id="primo-piano">Primo piano</a></li>
                            <li><a id="secondo-piano">secondo piano</a></li>
                        </ul>
                        <div class="description">
                            <p>
                                Clicca sulle seguenti sezioni per conoscere la nostra struttura!
                            </p>
                        </div>
                    </div>
                    <div class="pianoterra">
                    <div class="deposito-centrale"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="deposito-pulito"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="sala-operatoria"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>    
                    <div class="sala-operatoria2"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>    
                    <div class="sala-rx"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>    
                    <div class="sala-tac"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>    
                    <div class="sala-controllo-tac"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>    
                    <div class="ingresso"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="degenza-cani">
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>        
                    </div>
                    `;
        break;
      case "primopiano":
        content = `
                    <div class="grid-2rows">
                        <ul class="link-content">
                            <li><a id="piano-terra">piano terra</a></li>
                            <li><a class="active" id="primo-piano">Primo piano</a></li>
                            <li><a id="secondo-piano">secondo piano</a></li>
                        </ul>
                        <div class="description">
                            <p>
                                Clicca sulle seguenti sezioni per conoscere la nostra struttura!
                            </p>
                        </div>
                    </div>
                    <div class="primopiano">
                    </div>`;
        break;
      case "secondopiano":
        content = `
                    <div class="grid-2rows">
                        <ul class="link-content">
                            <li><a id="piano-terra">piano terra</a></li>
                            <li><a id="primo-piano">Primo piano</a></li>
                            <li><a class="active" id="secondo-piano">secondo piano</a></li>
                        </ul>
                        <div class="description">
                            <p>
                                Clicca sulle seguenti sezioni per conoscere la nostra struttura!
                            </p>
                        </div>
                    </div>
                    <div class="secondopiano">
                    </div>`;
        break;
      default:
        content = `<div>Errore: Stato non riconosciuto</div>`;
        break;
    }
    if (mainElement != null) {
      mainElement.innerHTML = content;
    }

    const pianoterra = document.querySelector("#piano-terra");
    const primopiano = document.querySelector("#primo-piano");
    const secondopiano = document.querySelector("#secondo-piano");

    pianoterra?.addEventListener("click", async () => {
      await gsap.fromTo(
        mainElement,
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: 0.1, opacity: 0, y: -800, animation: "ease" }
      );
      currentState = "pianoterra";

      updateContent();

      gsap.fromTo(
        mainElement,
        { opacity: 0, y: -800 },
        { duration: 0.5, delay: 0.1, opacity: 1, y: 0, animation: "ease" }
      );
    });

    primopiano?.addEventListener("click", async () => {
      await gsap.fromTo(
        mainElement,
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: 0.1, opacity: 0, y: -800, animation: "ease" }
      );
      currentState = "primopiano";

      updateContent();

      gsap.fromTo(
        mainElement,
        { opacity: 0, y: -800 },
        { duration: 0.5, delay: 0.1, opacity: 1, y: 0, animation: "ease" }
      );
    });

    secondopiano?.addEventListener("click", async () => {
      await gsap.fromTo(
        mainElement,
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: 0.1, opacity: 0, y: -800, animation: "ease" }
      );
      currentState = "secondopiano";

      updateContent();

      gsap.fromTo(
        mainElement,
        { opacity: 0, y: -800 },
        { duration: 0.5, delay: 0.1, opacity: 1, y: 0, animation: "ease" }
      );
    });

    const depositoCentrale = document.querySelector(".deposito-centrale");
    depositoCentrale?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="deposito-centrale-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const depositoPulito = document.querySelector(".deposito-pulito");
    depositoPulito?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="deposito-pulito-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const salaOperatoria = document.querySelector(".sala-operatoria");
    salaOperatoria?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="sala-operatoria-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const salaOperatoria2 = document.querySelector(".sala-operatoria2");
    salaOperatoria2?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="sala-operatoria2-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const salaRx = document.querySelector(".sala-rx");
    salaRx?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="sala-rx-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const salaTac = document.querySelector(".sala-tac");
    salaTac?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="sala-tac-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const salaControlloTac = document.querySelector(".sala-controllo-tac");
    salaControlloTac?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="sala-controllo-tac-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
    const ingresso = document.querySelector(".ingresso");
    ingresso?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="ingresso-open">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      });
    });
  };

  updateContent();
};

export default struttura;
