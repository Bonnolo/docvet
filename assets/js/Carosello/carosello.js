import { gsap } from "gsap";

const carosello = () => {
  const homeVideo = document.querySelector("#homeVideo");
  const homeVideoButton1 = document.querySelector("#homeVideoButton1");
  const homeVideoButton2 = document.querySelector("#homeVideoButton2");

  const video = ["chirurgia_orizz.webm", "chemio_orizz.webm", "tc_orizz.webm"];
  homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
  let i = 0;

  homeVideoButton1?.addEventListener("click", async () => {
    //await gsap.fromTo(homeVideo, { opacity: 1 }, { opacity: 0, duration: 0.5 });
    console.log("Indietro");
    if (i == 0) {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
      i = 2;
    } else {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[i - 1]}`);
      i--;
    }
  });

  homeVideoButton2?.addEventListener("click", async () => {
    console.log("Avanti");
    if (i == 2) {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
      i = 0;
    } else {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[i + 1]}`);
      i++;
    }
  });
};

export default carosello;
