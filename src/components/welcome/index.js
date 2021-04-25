import {html as h} from "pkg/htm/preact.js";
export default function Welcome(props) {
  return h`<div>Hello ${props.name}!</div>`;
}
