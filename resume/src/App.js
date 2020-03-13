import React, { Component } from 'react';
import './App.css';
import Background from './components/background/background';
import Menu from './components/menu/menu';
import Home from './components/home/home';

export default class App extends Component {
  state = {
    rederedPage: {
      home: true,
      about: false,
      portfolio: false,
      resume: false,
      contacts: false,
    }
  };
  render() {
    return (
        <div className="App">
            <Background />
          <header className="header">
            <Menu />
          </header>
          <main className="main">
            <Home />
          </main>
          <footer className="main">
          </footer>
        </div>
      );
  };
};