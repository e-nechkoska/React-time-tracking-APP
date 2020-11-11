import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import './App.css';
import { HomePage, ProjectDetailsPage } from './pages';

function App() {
  return (
    <div className="App">
      <div className="home">
        <Link className="home" to="/">HOME</Link>
      </div>

      <Switch>
        <Route exact={true} path="/">
          <HomePage />
        </Route>

        <Route path="/project/:projectId" component={ProjectDetailsPage}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
