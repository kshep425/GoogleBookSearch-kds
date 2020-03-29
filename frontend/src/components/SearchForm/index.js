import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("")
  function handleChange (event) {
    setSearchInput(event.target.value)
    console.log(searchInput);
  }
  const query = "https://"
  function handleClick(event){
    event.preventDefault();
    console.log("Search Clicked")
    console.log(searchInput)
    ((searchInput)
      ? fetch(query + searchInput)
      : null //(<div className="danger"><p>Please input search text</p></div>)
    )
  }

  return (
    <Container>
      <Card border="dark" className="my-3">
        <Card.Header>
          Search
        </Card.Header>
        <Card.Body className="my-1">
          <Form>
            <Form.Group>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => {handleChange(e)}}
              value={searchInput} />
              <Button className="justify-content-end" variant="outline-dark" onClick={e => {handleClick(e)}}>Search</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchForm;