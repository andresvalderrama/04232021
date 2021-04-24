import 'preact/devtools';

import { h, render } from 'preact';
import Welcome from './components/welcome';

render(<Welcome name="World" />, document.getElementById('root'));
