import React, { Component } from 'react';
import RegCard from './Register'
import Grades from './Grades'
import Footer from './Footer'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      grades: null 
    };
  }
  All_Grades = (gradesJSON) => {
    this.setState({
      grades: gradesJSON
    })
  }

  render() {
    return (
      <div>
        <div className="register_panel">
          <RegCard callback={this.All_Grades}/>
        </div>
        <div className="login_panel">
          <Grades/>
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
