const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // immediately show time
setInterval(getClock, 1000); //and then after 1s run, every 1s
//setInterval(sayHello, 5000); interval = every 5s
//setTimeout(sayHello, 5000);  timeout = after 5s