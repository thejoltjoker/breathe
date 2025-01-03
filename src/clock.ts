const clock = document.querySelector<HTMLDivElement>(".clock-time")!;
const clockTime = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
clock.textContent = clockTime;

setInterval(() => {
  clock.textContent = clockTime;
}, 1000);
