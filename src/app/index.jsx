import Router from 'preact-router';

import Navigation from 'components/navigation';

import Home from 'pages/home';
import Workout from 'pages/workout';
import Workouts from 'pages/workouts';
import NotFound from 'pages/not-found';

import './app.css';

export default function App() {
  return h`
  <div class=app-container>
    <${Router}>
      <${Workout} path=/workouts/:id />
      <${Workouts} path="/workouts" />
      <${Home} path="/" />
      <${NotFound} default />
    <//>
  </div>

  <${Navigation} />
  `;
}
