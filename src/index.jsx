import { html } from 'htm/preact';
import { render } from 'preact';
import Welcome from './components/welcome';

render(html`<${Welcome} name="World" />`, document.getElementById('root'));
