import Routines from 'components/routines';
import Welcome from 'components/welcome';

import './home.css';

export default function App() {
  return h`
    <h1 class="home-header">BodyLESS 💪</h1>
    <${Welcome} //>
  `;
}
