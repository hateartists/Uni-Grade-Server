import React, { Component } from 'react';
import RegCard from './Register'
import LookUp from './LookUp'
import Ass from './Assignment'
import Footer from './Footer'

import './App.css';
import Assignment from './Assignment';

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
      <div className="main">
        <div className="register_panel">
          <RegCard callback={this.All_Grades}/>
        </div>
        <div className="login_panel">
          <LookUp callback2={this.All_Grades}/>
        </div>
        </div>
        <div className="Grades-Container">
           {this.state.grades.map(function(data, index){
                return (<Assignment assi = {data}/>)
                }
              )
          } 
        </div>
        <div className="Footer">
          <Footer/>
        </div>
        </div>
    );
  }
}

export default App;
