import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavBar from "./components/TopNavbar"
import BookSearchHeader from "./components/BookSearchHeader";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SavedResults from "./components/SavedResults"

/**
 * Great Resource: https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/
 */

const BOOKS_URL="https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyA3re-y4fPPyNE9Z3GBhoslrCAeiWp2RKQ"
function App() {
  const searchInput = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    fetch(BOOKS_URL)
    .then((result) => {
      return result.json()
    }).then(result => {
      console.log(result)
      setSearchResult(searchResult)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  const search = searchValue => {
    console.log("search")
    setLoading(true);
    setErrorMessage(null);
    let query = `https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${searchValue}`
    query= "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyA3re-y4fPPyNE9Z3GBhoslrCAeiWp2RKQ"
    fetch(query)
    .then((result) => {
      return result.json()
    }).then(result => {
      console.log(result)
      setSearchResult(result);
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setErrorMessage("Error occured")
      setLoading(false)
    })
  }

  return (
    <div className="App">
      <TopNavBar />
      <BookSearchHeader />
      {(loading && !errorMessage)
        ? <span>loading...</span>
        : errorMessage
          ? (<div className="errorMessage">{errorMessage}</div>)
          : (
            <>
            <SearchForm searchInput={searchInput} handleClick={search} />
            <SearchResults searchResult={searchResult} />
            </>
          )
      }
      {(loading && !errorMessage)
        ? <span>loading...</span>
        : errorMessage
          ? (<div className="errorMessage">{errorMessage}</div>)
          : (
              <SavedResults />
            )
      }
    </div>
  );
}

export default App;
