import "@fontsource-variable/inter";
import "./style.css";
import "./theme.ts";
import "./clock.ts";
import { initPWA } from "./pwa.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;

initPWA(app);
