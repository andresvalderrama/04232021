import { Link } from 'preact-router/match';

import './navigation.css';

export default function Navigation() {
  return h`<nav class=navigation>
    <${Link} activeClassName=active href=/workouts>Workouts<//>
    <${Link} activeClassName=active href="/">Home<//>
    <${Link} activeClassName=active href=/profile>Profile<//>
  </nav>`;
}
