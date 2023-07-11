const getTime = () => {
  const date = new Date();
  setInterval(() => {
    const hour = date.getHours();
    const minute = date.getMinutes().toString();

    let set = "";

    if (hour <= 12) {
      set = "AM";
    } else {
      set = "PM";
    }

    // const time = document.querySelector("#time");
    // time.innerHTML = `${hour}:${minute} ${set}`;
    console.log(`${hour}:${minute.padStart(2, "0")} ${set}`);
  }, 1000);
};
export default getTime;
