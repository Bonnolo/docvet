import { gsap } from "gsap";

const carosello = () => {
  const homeVideo = document.querySelector("#homeVideo");
  const homeVideoTwo = document.querySelector("#homeVideo2");
  const homeVideoButton1 = document.querySelector("#homeVideoButton1");
  const homeVideoButton2 = document.querySelector("#homeVideoButton2");

  const circleOne = document.querySelector("#circleOne");
  const circleTwo = document.querySelector("#circleTwo");
  const circleThree = document.querySelector("#circleThree");

  const video = ["chirurgia_orizz.mp4", "chemio_orizz.mp4", "tc_orizz.mp4"];
  homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
  //homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
  let i = 0;

  homeVideoButton1?.addEventListener("click", async () => {
    //console.log("Indietro");
    if (i == 0) {
      //da 0 a 2
      circleOne?.classList.remove("circle-active");
      circleThree?.classList.add("circle-active");

      homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
      await gsap.to(homeVideo, { opacity: 0, duration: 0.5, x: 1000 });

      homeVideo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
      await gsap.to(homeVideo, { opacity: 1, duration: 0, x: 0 });
      i = 2;
    } else {
      if (i == 2) {
        //da 2 a 1
        circleThree?.classList.remove("circle-active");
        circleTwo?.classList.add("circle-active");

        homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[1]}`);
        await gsap.to(homeVideo, { opacity: 0, duration: 0.5, x: 1000 });

        homeVideo?.setAttribute("src", `assets/imgs/video/${video[1]}`);
        gsap.to(homeVideo, { opacity: 1, duration: 0, x: 0 });
      } else {
        //da 1 a 0
        circleTwo?.classList.remove("circle-active");
        circleOne?.classList.add("circle-active");

        homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
        await gsap.to(homeVideo, { opacity: 0, duration: 0.5, x: 1000 });

        homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
        gsap.to(homeVideo, { opacity: 1, duration: 0, x: 0 });
      }
      i--;
    }
  });

  homeVideoButton2?.addEventListener("click", async () => {
    //console.log("Avanti");
    if (i == 2) {
      //da 2 a 0
      circleOne?.classList.add("circle-active");
      circleThree?.classList.remove("circle-active");

      homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
      await gsap.to(homeVideo, { opacity: 0, duration: 0.5, x: -1000 });

      homeVideo?.setAttribute("src", `assets/imgs/video/${video[0]}`);
      gsap.to(homeVideo, { opacity: 1, duration: 0, x: 0 });
      i = 0;
    } else {
      if (i == 0) {
        //da 0 a 1
        circleOne?.classList.remove("circle-active");
        circleTwo?.classList.add("circle-active");

        homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[1]}`);
        await gsap.to(homeVideo, { opacity: 0, duration: 0.5, x: -1000 });

        homeVideo?.setAttribute("src", `assets/imgs/video/${video[1]}`);
        gsap.to(homeVideo, { opacity: 1, duration: 0, x: 0 });
      } else {
        //da 1 a 2
        circleTwo?.classList.remove("circle-active");
        circleThree?.classList.add("circle-active");

        homeVideoTwo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
        await gsap.to(homeVideo, { opacity: 0, duration: 0.5, x: -1000 });

        homeVideo?.setAttribute("src", `assets/imgs/video/${video[2]}`);
        gsap.to(homeVideo, { opacity: 1, duration: 0, x: 0 });
      }
      i++;
    }
  });
};

export default carosello;
