import React, { Component }from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';

class Grades extends Component {
  render() {
    return (
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
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <Button href="#">¡Busca esos 60!</Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Grades;