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
                    <div class="stanza"> 
                      <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="stanza2"> 
                    <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="stanza3"> 
                    <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="stanza4"> 
                    <img src="assets/imgs/icons/icon_location.svg">
                    </div>
                    <div class="stanza5"> 
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

    pianoterra?.addEventListener("click", () => {
      currentState = "pianoterra";
      updateContent();
    });

    primopiano?.addEventListener("click", () => {
      currentState = "primopiano";
      updateContent();
    });

    secondopiano?.addEventListener("click", () => {
      currentState = "secondopiano";
      updateContent();
    });


    const imgContent = document.querySelector(".stanza");
    imgContent?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="location">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      }
      )
    });
    const imgContent2 = document.querySelector(".stanza2");
    imgContent2?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="location2">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      }
      )
    }
    );
    const imgContent3 = document.querySelector(".stanza3");
    imgContent3?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="location3">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      }
      )
    }
    );
    const imgContent4 = document.querySelector(".stanza4");
    imgContent4?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="location4">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      }
      )
    }
    );
    const imgContent5 = document.querySelector(".stanza5");
    imgContent5?.addEventListener("click", () => {
      mainElement.innerHTML = `
      <div class="location5">
        <div class="close-modal">
          <img src="assets/imgs/icons/icon _close circle.svg">
          </div>
        </div>
      `;
      const closeModal = document.querySelector(".close-modal");
      closeModal?.addEventListener("click", () => {
        currentState = "pianoterra";
        updateContent();
      }
      )
    }
    );

  };

  updateContent();
};

export default struttura;
