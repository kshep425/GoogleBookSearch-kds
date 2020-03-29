import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
const SearchForm = () => {
  return (
    <Container>
      <Card border="dark" className="my-3">
        <Card.Header>
          Search
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="justify-content-end" variant="outline-dark">Search</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchForm;