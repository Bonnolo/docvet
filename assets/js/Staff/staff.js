import {
  personaleMedico,
  personaleInfermieristico,
  peronaleReceptionist,
} from "./config.js";
import { gsap } from "gsap";

const staff = () => {
  const mainElement = document.querySelector("#staff");
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
                  <section class="grid-cards">
                    ${personaleMedico
                      .map((person, index) => {
                        //console.log(person);
                        if (index == 0) {
                          return `
                          <div class="card open">
                            <img class="open" src="${person.picture}">
                            <div class="staff-details staff-details-show">
                              <h3>${person.title}  ${person.surname}  ${person.name}</h3>
                              <p>${person.study} <br> ${person.description}</p>
                            </div>
                          </div>`;
                        } else {
                          return `
                        <div class="card">
                          <img src="${person.picture}">
                          <div class="staff-details">
                            <h3>${person.title}  ${person.surname}  ${person.name}</h3>
                            <p>${person.study} <br> ${person.description}</p>
                          </div>
                        </div>`;
                        }
                      })
                      .join("")}
                  </section>
                </div>
                <div class="buttons-container">
                  <button id="sx"> < Indietro</button>
                  <button id="dx">Avanti > </button>
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
                  <section class="grid-cards">
                    ${personaleInfermieristico
                      .map((person, index) => {
                        //console.log(person);
                        if (index == 0) {
                          return `
                          <div class="card open">
                            <img class="open" src="${person.picture}">
                            <div class="staff-details staff-details-show">
                              <h3>${person.title}  ${person.surname}  ${person.name}</h3>
                              <p>${person.description}</p>                            
                            </div>
                          </div>`;
                        } else {
                          return `
                        <div class="card">
                          <img src="${person.picture}">
                          <div class="staff-details">
                            <h3>${person.title}  ${person.surname}  ${person.name}</h3>
                            <p>${person.description}</p>                            
                          </div>
                        </div>`;
                        }
                      })
                      .join("")}
                  </section>
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
                  <section class="grid-cards">
                    ${peronaleReceptionist
                      .map((person, index) => {
                        //console.log(person);
                        if (index == 0) {
                          return `
                          <div class="card open">
                            <img class="open" src="${person.picture}">
                            <div class="staff-details staff-details-show">
                              <h3>${person.title}  ${person.surname}  ${person.name}</h3>
                              <p>${person.description}</p>
                            </div>
                          </div>`;
                        } else {
                          return `
                        <div class="card">
                          <img src="${person.picture}">
                          <div class="staff-details">
                            <h3>${person.title}  ${person.surname}  ${person.name}</h3>
                            <p>${person.description}</p>
                          </div>
                        </div>`;
                        }
                      })
                      .join("")}
                  </section>
              </div>`;
        break;
      default:
        content = `<div>Errore: Stato non riconosciuto</div>`;
        break;
    }

    if (mainElement != null) {
      mainElement.innerHTML = content;
    }

    const medico = document.querySelector("#medico");

    medico?.addEventListener("click", () => {
      gsap.fromTo(
        mainElement,
        { opacity: 0, y: -800 },
        { duration: 0.5, delay: 0.3, opacity: 1, y: 0 }
      );
      currentState = "medico";

      updateContent();

      const imgs = document.querySelectorAll(".card img");
      imgs.forEach((img) => {
        img.addEventListener("click", () => {
          //console.log(img.nextElementSibling.classList);
          imgs.forEach((img) => {
            img.parentElement.classList.remove("open");
            img.nextElementSibling.classList.remove("staff-details-show");
            img.classList.remove("open");
          });

          img.parentElement.classList.add("open");
          img.nextElementSibling.classList.add("staff-details-show");
          gsap.fromTo(
            ".staff-details-show",
            { opacity: 0 },
            { duration: 0.5, delay: 0.4, opacity: 1 }
          );
          img.classList.add("open");
        });
      });

      const container = document.querySelector(".container");
      const scrollElement = document.querySelector(".grid-cards");

      container.addEventListener("wheel", (event) => {
        //console.log(event);
        if (event.deltaY > 0) {
          //how much each scroll should scroll
          scrollElement.scrollLeft += 100;
          //console.log("scrolling down");
        } else {
          scrollElement.scrollLeft -= 100;
          //console.log("scrolling up");
        }
      });

      const sx = document.querySelector("#sx");
      const dx = document.querySelector("#dx");

      sx?.addEventListener("click", () => {
        scrollElement.scrollLeft -= 500;
      });

      dx?.addEventListener("click", () => {
        scrollElement.scrollLeft += 500;
      });
    });

    const infermieristico = document.querySelector("#infermieristico");

    infermieristico?.addEventListener("click", () => {
      gsap.fromTo(
        mainElement,
        { opacity: 0, y: -800 },
        { duration: 0.5, delay: 0.3, opacity: 1, y: 0 }
      );
      currentState = "infermieristico";
      updateContent();

      const imgs = document.querySelectorAll(".card img");
      imgs.forEach((img) => {
        img.addEventListener("click", () => {
          //console.log(img.nextElementSibling.classList);
          imgs.forEach((img) => {
            img.parentElement.classList.remove("open");
            img.nextElementSibling.classList.remove("staff-details-show");
            img.classList.remove("open");
          });
          img.parentElement.classList.add("open");
          img.nextElementSibling.classList.add("staff-details-show");
          gsap.fromTo(
            ".staff-details-show",
            { opacity: 0 },
            { duration: 0.5, delay: 0.4, opacity: 1 }
          );
          img.classList.add("open");
        });
      });
    });

    const receptionist = document.querySelector("#receptionist");

    receptionist?.addEventListener("click", () => {
      gsap.fromTo(
        mainElement,
        { opacity: 0, y: -800 },
        { duration: 0.5, delay: 0.3, opacity: 1, y: 0 }
      );
      currentState = "receptionist";
      updateContent();

      const imgs = document.querySelectorAll(".card img");
      imgs.forEach((img) => {
        img.addEventListener("click", () => {
          //console.log(img.nextElementSibling.classList);
          imgs.forEach((img) => {
            img.parentElement.classList.remove("open");
            img.nextElementSibling.classList.remove("staff-details-show");
            img.classList.remove("open");
          });
          img.parentElement.classList.add("open");
          img.nextElementSibling.classList.add("staff-details-show");
          gsap.fromTo(
            ".staff-details-show",
            { opacity: 0 },
            { duration: 0.5, delay: 0.4, opacity: 1 }
          );
          img.classList.add("open");
        });
      });
    });
  };

  updateContent();
};

export default staff;
