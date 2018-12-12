import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';

class CardExample extends React.Component {
  render() {
    return (
      <Col>
        <Card style={{ width: "22rem" }}>
          <CardImage
            className="img-fluid"
            src="https://picsum.photos/780/520"
            waves
          />
          <CardBody>
            <CardTitle>Registro</CardTitle>
            <CardText>
              Para obtener rápidamente tus calificaciones, registrate con un
              usuario, además de tu correo institucional y contraseña.
            </CardText>
            <
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default CardExample;