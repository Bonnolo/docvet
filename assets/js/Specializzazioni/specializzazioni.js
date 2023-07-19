const specializzazioni = () => {
  const mainElement = document.querySelector("main");
  let currentState = "img-content";

  const updateContent = () => {
    let content;
    switch (currentState) {
      case "img-content":
        content = `
        <div class="grid-2rows">
          <ul class="link-content">
            <li><a href="#" id="mininvasiva">Chirurgia mininvasiva</a></li>
            <li>
              <a href="#" id="tessuti-molli">Chirurgia dei tessuti molli e oncologica</a>
            </li>
            <li><a href="#" id="oncologica">Oncologia Medica</a></li>
          </ul>
          <div class="description">
            <p>
              Clicca sulle seguenti sezioni per conoscere la nostre
              specializzazioni!
            </p>
          </div>
        </div>
        <div class="img-content">
          <h1>Alta preparazione ed esperienza</h1>
        </div>
        `;
      break;
      case "mininvasiva":
        content = `
        <div class="grid-2rows">
          <ul class="link-content">
            <li><a href="#" id="mininvasiva" class="active">Chirurgia mininvasiva</a></li>
            <li>
              <a href="#" id="tessuti-molli">Chirurgia dei tessuti molli e oncologica</a>
            </li>
            <li><a href="#" id="oncologica">Oncologia Medica</a></li>
          </ul>
          <div class="description">
            <p>
              Clicca sulle seguenti sezioni per conoscere la nostre
              specializzazioni!
            </p>
          </div>
        </div>
        <div class="grid-2columns">
          <div class="grid-2columns-left">
            <img src="assets/imgs/bg.jpg" alt="img chir min" />
          </div>
          <div class="grid-2columns-right">
            <p>
              La chirurgia mininvasiva è una tecnica chirurgica che
              permette di eseguire interventi chirurgici con incisioni
              molto piccole, di solito di pochi millimetri, e con
              strumenti chirurgici di piccole dimensioni. Questa
              tecnica è utilizzata in diversi ambiti chirurgici, come
              la chirurgia generale, la chirurgia toracica, la
              chirurgia vascolare, la chirurgia ortopedica, la
              chirurgia ginecologica e la chirurgia urologica.
            </p>
          </div>
        </div>
        `;
      break;
      case "tessuti-molli":
        content = `
        <div class="grid-2rows">
          <ul class="link-content">
            <li><a href="#" id="mininvasiva">Chirurgia mininvasiva</a></li>
            <li>
              <a href="#" id="tessuti-molli" class="active">Chirurgia dei tessuti molli e oncologica</a>
            </li>
            <li><a href="#" id="oncologica">Oncologia Medica</a></li>
          </ul>
          <div class="description">
            <p>
              Clicca sulle seguenti sezioni per conoscere la nostre
              specializzazioni!
            </p>
          </div>
        </div>
        <div class="grid-2columns">
          <div class="grid-2columns-left">
            <img src="assets/imgs/bg.jpg" alt="img chir min" />
          </div>
          <div class="grid-2columns-right">
            <p>
              La chirurgia dei tessuti molli è una branca della
              chirurgia che si occupa della diagnosi e del trattamento
              chirurgico di patologie che colpiscono gli organi
              interni, esclusi quelli del torace e dell'addome. La
              chirurgia dei tessuti molli è una branca della chirurgia
              che si occupa della diagnosi e del trattamento chirurgico
              di patologie che colpiscono gli organi interni, esclusi
              quelli del torace e dell'addome.
            </p>
          </div>
        </div>
        `;
      break;
      case "oncologica":
        content = `
        <div class="grid-2rows">
          <ul class="link-content">
            <li><a href="#" id="mininvasiva">Chirurgia mininvasiva</a></li>
            <li>
              <a href="#" id="tessuti-molli">Chirurgia dei tessuti molli e oncologica</a>
            </li>
            <li><a href="#" id="oncologica" class="active">Oncologia Medica</a></li>
          </ul>
          <div class="description">
            <p>
              Clicca sulle seguenti sezioni per conoscere la nostre
              specializzazioni!
            </p>
          </div>
        </div>
        <div class="grid-2columns">
          <div class="grid-2columns-left">
            <img src="assets/imgs/bg.jpg" alt="img chir min" />
          </div>
          <div class="grid-2columns-right">
            <p>
              Oncologia è la branca della medicina che si occupa dello
              studio dei tumori (benigni e maligni) e delle loro
              terapie. L'oncologia è una branca della medicina
              interna, ma si avvale anche di altre discipline come la
              chirurgia, la radioterapia, l'anatomia patologica, la
              radiologia, la biologia molecolare e la genetica.
            </p>
          </div>
        </div>
        `;
      break;
    }
    mainElement.innerHTML = content;

    const chirurgiaMininvasiva = document.querySelector("#mininvasiva");
    const tessutiMolli = document.querySelector("#tessuti-molli");
    const oncologica = document.querySelector("#oncologica");

    chirurgiaMininvasiva?.addEventListener("click", () => {
      currentState = "mininvasiva";
      updateContent();
    });

    tessutiMolli?.addEventListener("click", () => {
      currentState = "tessuti-molli";
      updateContent();
    });
    oncologica?.addEventListener("click", () => {
      currentState = "oncologica";
      updateContent();
    });
  };
  updateContent();
};

export default specializzazioni;
