/* @refresh reload */
import { render } from "solid-js/web";
import { createEffect } from "solid-js";
import { state } from "./state";
import { prev, next, first, last } from "./actions/pagination";

import load from "./loading";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(() => <App />, root!);

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      next();
      break;
    case "ArrowLeft":
      prev();
      break;
    case "ArrowUp":
      first();
      break;
    case "ArrowDown":
      last();
      break;
  }
});

createEffect(() => {
  load(state.query);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
