import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home'
import Upload from './Pages/Upload';
import Play from './Pages/Play';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}