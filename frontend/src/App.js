import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import TopNavBar from "./components/TopNavbar"
import BookSearchHeader from "./components/BookSearchHeader"
import SearchForm from "./components/SearchForm"
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <BookSearchHeader />
      <SearchForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
