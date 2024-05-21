import App from "./App.svelte";

import "normalize.css/normalize.css";
import "./app.css";

const app = new App({
  target: document.getElementById("app")!
});

export default app;
