// time function
const getTime = () => {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes().toString();
    const year = date.getFullYear();

    let set = "";

    if (hour <= 12) {
      set = "AM";
    } else {
      set = "PM";
    }
    // querySelector + innerHTML
    const time = document.querySelector("#time");
    const yearEl = document.querySelector("#year");

    time.innerHTML = `${hour}:${minute.padStart(2, "0")} ${set}`;
    yearEl.innerHTML = `${year} ® - Clinica Veterinaria Nervianese srl, via Rho 2 20014, Nerviano (MI) - P.IVA 09356660960`;
    //console.log(`${hour}:${minute.padStart(2, "0")} ${set}`);
  }, 1000);
};
export default getTime;
