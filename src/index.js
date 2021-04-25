import { html } from "../pkg/htm/preact.js";
import { render } from "../pkg/preact.js";
import { prect } from "../fork/prect.js";
import Welcome from "./components/welcome/index.js";

prect();
render(html`<${Welcome} name="World" />`, document.getElementById("root"));
