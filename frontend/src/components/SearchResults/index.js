import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Book from "../Book"
import get from "lodash/get"

const SearchResults = (props) => {
  console.log(props)
  const results = props.searchResult || []
  console.log(results)

  return (
    <div>
      <Container>
        <Card border="dark" className="my-3">
          <Card.Header>Search Results</Card.Header>
          <Card.Body>
            {(results && results.items) ?
              results.items.map((result) => {
                // console.log(result)
                const bookResult = {
                  id: result.id,
                  authors: (get(result, 'volumeInfo.authors') || []).join(", "),
                  description: get(result, 'volumeInfo.description'),
                  image: get(result, "volumeInfo.imageLinks.thumbnail"),
                  link: get(result, 'volumeInfo.previewLink'),
                  title: get(result, 'volumeInfo.title')
                }
                console.log(bookResult)
                return (
                  <Book key={bookResult.id} bookresult={bookResult} buttontext="Save"></Book>
                )
              }) : null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SearchResults;