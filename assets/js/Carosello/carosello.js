import { gsap } from "gsap";

const carosello = () => {
  const homeVideo = document.querySelector("#homeVideo");
  const homeVideoButton1 = document.querySelector("#homeVideoButton1");
  const homeVideoButton2 = document.querySelector("#homeVideoButton2");

  const circleOne = document.querySelector("#circleOne");
  const circleTwo = document.querySelector("#circleTwo");
  const circleThree = document.querySelector("#circleThree");

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
    //console.log("Indietro");
    if (i == 0) {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
      circleOne?.classList.remove("circle-active");
      circleThree?.classList.add("circle-active");
      // await gsap.fromTo(
      //   homeVideo,
      //   { x: -200 },
      //   { x: 0, opacity: 1, duration: 0.5, ease: "Power0.easeNone" }
      // );
      i = 2;
    } else {
      if (i == 2) {
        circleThree?.classList.remove("circle-active");
        circleTwo?.classList.add("circle-active");
      } else {
        circleTwo?.classList.remove("circle-active");
        circleOne?.classList.add("circle-active");
      }
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
    //console.log("Avanti");
    if (i == 2) {
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
      circleOne?.classList.add("circle-active");
      circleThree?.classList.remove("circle-active");
      i = 0;
    } else {
      if (i == 0) {
        circleOne?.classList.remove("circle-active");
        circleTwo?.classList.add("circle-active");
      } else {
        circleTwo?.classList.remove("circle-active");
        circleThree?.classList.add("circle-active");
      }
      homeVideo?.setAttribute("src", `assets/imgs/video/${video[i + 1]}`);
      i++;
    }
  });
};

export default carosello;
