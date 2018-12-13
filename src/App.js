import React, { Component } from 'react';
import RegCard from './Register'
import Grades from './Grades'
import Footer from './Footer'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      grades: [] 
    };
  }
  All_Grades = (gradesJSON) => {
    this.setState({
      grades: gradesJSON
    })
    console.log(this.state.grades)
  }

  render() {
    return (
      <div>
        <div className="register_panel">
          <RegCard callback={this.All_Grades}/>
        </div>
        <div className="login_panel">
          <Grades callback2={this.All_Grades}/>
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
