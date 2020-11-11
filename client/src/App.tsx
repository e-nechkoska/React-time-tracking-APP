import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import './App.css';
import { HomePage, ProjectDetailsPage } from './pages';

function App() {
  return (
    <div className="App">
      <Link className="home" to="/">HOME</Link>

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
