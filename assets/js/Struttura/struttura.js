const struttura = () => {
  const mainElement = document.querySelector("main");
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
                    </div>`;
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

    mainElement.innerHTML = content;

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
  };

  updateContent();
};

export default struttura;
