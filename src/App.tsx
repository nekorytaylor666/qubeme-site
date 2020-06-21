import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScanPage from './components/pages/ScanPage';
import './index.css';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Hello world</h1>
          </Route>
          <Route path="/scan">
            <ScanPage></ScanPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
