import { html } from "../_snowpack/pkg/htm/preact.js.js";
import { render } from "../_snowpack/pkg/preact.js.js";
import Welcome from "./components/welcome/index.js";
render(html`<${Welcome} name="World" />`, document.getElementById("root"));
