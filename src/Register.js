import React, { Component }from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';

class Register extends Component {
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
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Correo Institucional
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Contraseña
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <Button href="#">Registrarse</Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Register;