import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>Ask A Stranger</h1>
      <Navbar />
      {/* use Router to send to either Profile, Main, or AllQs */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
