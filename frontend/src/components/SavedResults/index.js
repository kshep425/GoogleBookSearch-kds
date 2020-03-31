import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Book from "../Book"

const SavedResults = (props) => {
  console.log(props)
  const results = props.savedResults || [];
  console.log(results);
  const removeSavedBook = props.removeSavedBook;

  return (
    <div>
      <Container id="saved">
        <Card border="dark" className="my-3">
          <Card.Header>Saved Results</Card.Header>
          <Card.Body>
            {(results) ?
              results.map((book) => {
                console.log(book)
                return (
                  <Book key={book.id} bookresult={book} buttontext="Delete" removeSavedBook={removeSavedBook}></Book>
                )
              }) : null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SavedResults;