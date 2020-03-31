import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./style.css"

const Book = (props) => {

  // console.log(props.bookresult)
  const { authors, description, id, image, link, title } = props.bookresult;
  console.log(props.bookresult)
  const buttonText = props.buttontext
  console.log(props)
  console.log(typeof props.addSavedBook)

  const removeOrSaveBook = (event) => {
    event.preventDefault();
    console.log(event);
    (buttonText === "Save")
    ? props.addSavedBook(props.bookresult)
    : props.removeSavedBook(props.bookresult)
  }

  return (
    <Card className="text-left my-2" key={id}>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title className="col mr-1">{title}</Card.Title>
          </Col>
          <Col>
            <Form inline>
              <Form.Group >
                <Card.Link href={link}>
                  <Button className="m-1" variant="outline-dark" bookid={id}>View</Button>
                </Card.Link>
                <Button className="m-1" variant="outline-dark" onClick={removeOrSaveBook} value={props.bookresult}>{buttonText}</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Subtitle key={id}>Written by: {authors}</Card.Subtitle>
          </Col>
        </Row>
        <Row>
          <Col className="col-2">
            <Card.Link href={link}>
              <Card.Img variant="top" src={image} className="bookImage"></Card.Img>
            </Card.Link>
          </Col>
          <Col className="col-10">
            <Card.Text>{description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Book;