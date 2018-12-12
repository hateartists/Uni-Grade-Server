import React, { Component } from 'react';
import RegCard from './Register'
import Footer from './Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="login_panel">
          <RegCard/>
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
