import React, { Component }from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      grades: null 
    };
  }

  returnData = () =>{
    this.props.grades()
  }

  register(){
    let usr = document.getElementById('user').value
    let email = document.getElementById('mail').value
    let pass = document.getElementById('pass').value
    const axios = require('axios');
    axios.get('http://localhost:8000/api/register', {
        user: usr,
        mail: email,
        pasw: pass
    }).then((response) => {
      this.setState({
        grades: response.data
      })
    })
  }



  render() {
    return (
      <Col>
        <Card style={{ width: "22rem" }}>
          <CardBody>
            <CardTitle>Registro</CardTitle>
            <CardText>
              Para obtener rápidamente tus calificaciones, registrate con un
              usuario, además de tu correo institucional y contraseña.
            </CardText>
            <form>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Usuario:
            </label>
            <input
              type="text"
              id="user"
              className="form-control"
            />
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Correo Institucional
            </label>
            <input
              type="email"
              id="mail"
              className="form-control"
            />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Contraseña
            </label>
            <input
              type="password"
              id="pass"
              className="form-control"
            />
            <Button onClick={this.register.bind(this)} onSubmit={this.register.bind(this)}>Registrarse</Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Register;