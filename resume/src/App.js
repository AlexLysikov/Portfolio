import React, { Component } from 'react';
import './App.scss';
import Background from './components/background/background';
import Home from './components/home/home';
import Menu from './components/menu/menu';

export default class App extends Component {
  
  state = {
    rederedPage: { 
      home: true,
      about: false,
      portfolio: false,
      resume: false,
      contacts: false,
    },
  };

  onRender(Item, stateStatus) {
    if (stateStatus) return <Item/>;
  }

  render() {

    const { renderedPage, menuStatus } = this.state;

    return (
        <div className="App">
            <Background />
          <header className="header">
            <Menu />
          </header>
          <main className="main">
            <Home />
          </main>
        </div>
      );
  };
};