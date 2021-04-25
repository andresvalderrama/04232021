import "../pkg/preact/devtools.js";
import { html } from "../pkg/htm/preact.js";
import { render } from "../pkg/preact.js";
import Welcome from "./components/welcome/index.js";
render(html`<${Welcome} name="World" />`, document.getElementById("root"));
