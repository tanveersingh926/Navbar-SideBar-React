import React, { Component } from 'react';
import logo from './logo.svg';

import  Toolbar  from "./components/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main style={{marginTop:'64px'}}>
          <p>This is a page content</p>
        </main>
      </div>
    );
  }
}

export default App;
