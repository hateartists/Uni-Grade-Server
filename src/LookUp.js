import React, { Component }from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';

class Grades extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calif: [] 
    };
  }

  returnData = () =>{
    this.props.callback2(this.state.calif)
  }

  register(){
    let usr = document.getElementById('userLookUp').value
    const axios = require('axios');
    axios.get('http://localhost:8000/api/grades/' + '?user=' + usr)
    .then((response) => {
      this.setState({
        calif: response.data
      })
    }).then(this.returnData)
  }
  render() {
    return (
      <div className="separator">
      <Col>
        <Card style={{ width: "22rem" }}>
          <CardBody>
            <CardTitle>Calificaciones</CardTitle>
            <CardText>
              Para ver tus calificaciones, pon el nombre de usuario con el que te registraste.
            </CardText>
            <form>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Usuario:
            </label>
            <input
              type="text"
              id="userLookUp"
              className="form-control"
            />
            <Button onClick={this.register.bind(this)} onSubmit={this.register.bind(this)}>¡Busca esos 60!</Button>
            </form>
          </CardBody>
        </Card>
      </Col>
      </div>
    )
  }
}

export default Grades;