import { useEffect, useState } from 'preact/hooks';

import Routine from 'components/routine';

import './routines.css';

export default function Routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    console.log('routine effect!');

    setRoutines([
      {
        name: 'Espalda/Pierna',
        date: Date.now()
      }
    ]);
  }, []);

  return h`
    <div class=routines>
      <h2>Routines</h2>
      ${routines.map(routine => h`<${Routine} routine=${routine} />`)}
    </div>
  `;
}
