import { gsap } from "gsap";

const carosello = () => {
  const homeVideo = document.querySelector("#homeVideo");
  const homeVideoButton1 = document.querySelector("#homeVideoButton1");
  const homeVideoButton2 = document.querySelector("#homeVideoButton2");

  const video = ["chirurgia_orizz.webm", "chemio_orizz.webm", "tc_orizz.webm"];
  homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
  let i = 0;

  homeVideoButton1?.addEventListener("click", async () => {
    //await gsap.to(homeVideo, {
    //  x: 200,
    //  duration: 0.2,
    //  ease: "Power0.easeNone",
    //});
    //await gsap.to(homeVideo, { opacity: 0, duration: 0.1 });
    console.log("Indietro");
    if (i == 0) {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
      // await gsap.fromTo(
      //   homeVideo,
      //   { x: -200 },
      //   { x: 0, opacity: 1, duration: 0.5, ease: "Power0.easeNone" }
      // );
      i = 2;
    } else {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[i - 1]}`);
      // await gsap.fromTo(
      //   homeVideo,
      //   { x: -200 },
      //   { x: 0, opacity: 1, duration: 0.5, ease: "Power0.easeNone" }
      // );
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
