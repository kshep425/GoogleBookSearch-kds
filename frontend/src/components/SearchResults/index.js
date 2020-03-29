import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import testResults from "./quiltingTestResults"
import "./style.css"
import get from "lodash/get"
const SearchResults = () => {

  const [results, setResults] = useState(testResults)



  return (
    <div>
      <Container>
        <Card border="dark" className="my-3">
          <Card.Header>Search Results</Card.Header>
          <Card.Body>
            {(results && results.items) ?
             results.items.map((result) => {
              console.log(result)
              return (
                <Card className="text-left my-2" key={result.id}>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title className="col mr-1">{result.volumeInfo.title}</Card.Title>
                      </Col>
                      <Col>
                        <Form inline>
                          <Form.Group >
                          <Card.Link href={get(result,'volumeInfo.previewLink')}><Button className="m-1" variant="outline-dark" bookid={result.id}>View</Button></Card.Link>
                            <Button variant="outline-dark" bookid={result.id}>Save</Button>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Subtitle>Written by: {(get(result, 'volumeInfo.authors')  || []).join(", ")}</Card.Subtitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-2">
                        <Card.Link href={get(result,'volumeInfo.previewLink')}>
                          <Card.Img variant="top" src={get(result, "volumeInfo.imageLinks.thumbnail")} className="bookImage"></Card.Img>
                        </Card.Link>
                      </Col>
                      <Col className="col-10">
                        <Card.Text>{get(result, 'volumeInfo.description')}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )
            }): null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SearchResults;