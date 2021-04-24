import 'preact/devtools';

import { html } from 'html/preact';
import { render } from 'preact';
import Welcome from './components/welcome';

render(html`<${Welcome} name="World" />`, document.getElementById('root'));
