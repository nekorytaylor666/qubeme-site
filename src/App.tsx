import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScanPage from './components/pages/ScanPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/scan">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/scan">
            <ScanPage></ScanPage>
          </Route>
          <Route path="/users">
            <h1>user</h1>
          </Route>
          <Route path="/">
            <h1>hello world</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
