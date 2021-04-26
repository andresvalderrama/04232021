import dayjs from 'dayjs';

import './routine.css';

export default function Routine(props) {
  const { date, name } = props.routine;
  const formatedDate = dayjs(date).format('D.MMM.YYYY');

  return h`<div class=routine>
    <a href=/workouts/${date}>
      <h3>${name}</h3>
      <p>${formatedDate}</p>
    </a>
  </div>`;
}
