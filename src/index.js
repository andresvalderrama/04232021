import "../_snowpack/pkg/preact/devtools.js";
import {html} from "../_snowpack/pkg/htm/preact.js";
import {render} from "../_snowpack/pkg/preact.js";
import Welcome from "./components/welcome/index.js";
render(html`<${Welcome} name="World" />`, document.getElementById("root"));
