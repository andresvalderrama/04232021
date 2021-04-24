import { html as h } from 'htm/preact';

export default function Welcome(props) {
  return h`<div>Hello ${props.name}!</div>`;
}
