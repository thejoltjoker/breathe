import "@fontsource-variable/onest";
import "./style.css";
import "./theme.ts";
import { initPWA } from "./pwa.ts";

const sequence = ["Breathe in", "Hold", "Breathe out", "Hold"];
const FADE_DURATION = 1000;
const HOLD_DURATION = 3000;
const app = document.querySelector<HTMLDivElement>("#app")!;
const textContainer =
  document.querySelector<HTMLDivElement>(".text-container")!;

initPWA(app);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const animateSequence = async () => {
  let currentIndex = 0;

  while (true) {
    if (currentIndex > sequence.length) break;

    textContainer.style.transition = `opacity ${FADE_DURATION}ms`;
    textContainer.style.opacity = "0";

    if (currentIndex != 0) {
      await sleep(FADE_DURATION);
    }

    textContainer.textContent = sequence[currentIndex];
    textContainer.style.opacity = "1";

    await sleep(HOLD_DURATION);

    currentIndex = currentIndex + 1;
  }
};

animateSequence();
