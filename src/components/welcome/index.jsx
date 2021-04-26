import { useStore } from 'app/store';

import './welcome.css';

export default function Welcome(props) {
  const { count, inc } = useStore();

  return h`
      <div class=welcome>Hello ${props.name}!</div>

      <h3>${count}</h3>
      <button onClick=${inc}>One up!</button>
    `;
}
