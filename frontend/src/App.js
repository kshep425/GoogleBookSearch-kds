import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavBar from "./components/TopNavbar"
import BookSearchHeader from "./components/BookSearchHeader";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SavedResults from "./components/SavedResults";
import get from "lodash/get";


/**
 * Great Resource: https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/
 */

function App() {
  const searchInput = useRef();
  const savedBook = useRef({});
  const [searchResult, setSearchResult] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [savedBooksLength, setSavedBooksLength] = useState(0)
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log(savedBooksLength)
  }, [savedBooksLength])

  useEffect(() => {
    console.log(savedBooks)
  }, [savedBooks])

  useEffect(() => {
    console.log(searchInput.current.value)
  }, [searchResult])

  const search = e => {
    console.log("Search Clicked")
    let searchInputValue = get(searchInput, 'current.value')
    console.log(searchInputValue)
    e.preventDefault();
    if (!!searchInputValue) {
      console.log(searchInputValue)
      // setLoading(true);
      // setErrorMessage(null);
      let query = `https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${searchInputValue}`
      console.log(query)
      window.fetch(query)
        .then((result) => {
          return result.json()
        }).then(result => {
          console.log(result)
          setSearchResult(result);
          // setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          // setErrorMessage("Error occured")
          // setLoading(false)
        })
    }
  }

  function addSavedBook(book) {
    console.log("Add Saved Book");
    console.log(book);
    if (book) {
      savedBooks.push(book);
      setSavedBooks(savedBooks);
      setSavedBooksLength(savedBooks.length)
      console.log(savedBooks);
    }
  }

  function removeSavedBook(book) {
    console.log("Remove Saved Book");
    console.log(book);
    // get index of object with id
    var removeIndex = savedBooks.map(function(item) { return item.id; }).indexOf(book.id);
    // remove object
    savedBooks.splice(removeIndex, 1)
    setSavedBooks(savedBooks);

  }

  return (
    <div className="App">
      <TopNavBar />
      <BookSearchHeader />
      <SearchForm id="search" searchInput={searchInput} handleClick={search} />
      <SearchResults searchResult={searchResult} savedBook={savedBook} addSavedBook={addSavedBook} />
      <SavedResults id="saved" savedResults={savedBooks} removeSavedBook={removeSavedBook}/>
    </div>
  );
}

export default App;
