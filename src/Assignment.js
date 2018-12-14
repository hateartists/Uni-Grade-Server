import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';
import './Assignment.css'

class Assignment extends Component{
  render(){
    const { Cal, DescMateria } = this.props.assi;
    return(
      <div className="inliner">
        <div className="Assignment">
          <Col>
            <Card style={{ width: "22rem" }}>
              <CardBody>
                <CardTitle>{DescMateria}</CardTitle>
                  <CardText>
                    Calificación: {Cal}
                  </CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    )
  }
}
export default Assignment;