import { gsap } from "gsap";

const carosello = () => {
  const homeVideo = document.querySelector("#homeVideo");
  const homeVideoButton1 = document.querySelector("#homeVideoButton1");
  const homeVideoButton2 = document.querySelector("#homeVideoButton2");

  const video = ["1", "2", "3"];
  let i = 0;

  homeVideoButton1?.addEventListener("click", () => {
    console.log("Avanti");
    if (i == 0) {
      homeVideo?.setAttribute("src", `assets/video/video${video[2]}.mp4`);
      i = 2;
    } else {
      homeVideo?.setAttribute("src", `assets/video/video${video[i - 1]}.mp4`);
      i--;
    }
  });

  homeVideoButton2?.addEventListener("click", () => {
    console.log("Avanti");
    if (i == 2) {
      homeVideo?.setAttribute("src", `assets/video/video${video[0]}.mp4`);
      i = 0;
    } else {
      homeVideo?.setAttribute("src", `assets/video/video${video[i + 1]}.mp4`);
      i++;
    }
  });
};

export default carosello;
