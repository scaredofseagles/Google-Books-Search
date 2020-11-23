import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "./Card";

function SearchForm() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  async function loadBooks(search) {
    if (search === ""){
        return
    } else{
        console.log(`Sending ${search} to API`);
        let result = await API.searchBooks(search);
        console.log("API data returned: ", result.data.items);
        setBooks(result.data.items);
    }
  }

  

  function handleInputChange(event) {
    const searchQuery = event.target.value;
    searchQuery.replace(" ", "+");
    console.log("Searching for: ", searchQuery);
    setSearch(searchQuery);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    loadBooks(search);
  }

  return (
    <>
      <div className="card bg-light text-black">
        <h4>Book Search</h4>
        <div className="input-group mb-3">
          <input
            value={search}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="Search Book Title"
            aria-label="Search Book Title"
            aria-describedby="button-addon2"
          />
          <button
            onClick={handleFormSubmit}
            className="btn btn-primary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-light text-black">
        <h4>Results</h4>
        {books.length ?
        books.map((book) => {
          return <Card
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.previewLink}
            />;
        }) :
        <h5 className="text-muted">No Results to Display</h5>}
      </div>
    </>
  );
}

export default SearchForm;
