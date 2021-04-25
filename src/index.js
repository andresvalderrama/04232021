import {html} from "../snowpack/pkg/htm/preact.js";
import {render} from "../snowpack/pkg/preact.js";
import Welcome from "./components/welcome/index.js";
render(html`<${Welcome} name="World" />`, document.getElementById("root"));
