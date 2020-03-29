import React from 'react';
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
const BookSearchHeader = () => {
  return (
    <Container>
      <Card border="dark" className="my-3">
      <h1>(React) Google Book Search</h1>
      <h2>Search for and save books of interest</h2>
      </Card>
    </Container>
  );
};

export default BookSearchHeader;