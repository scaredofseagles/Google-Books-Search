import React, { useState, useEffect } from 'react'
import Card from './Card'
import API from '../utils/API'

function SavedBooks(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks();
    }, []);

    async function loadBooks(){
        let result = await API.getBooks()
        setBooks(result)
    }

    return(
        <div className="bg-light text-black">
            <h4>Saved Books</h4>
            {books.length ? 
            books.map((book) => {
            return <Card
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            view={book.volumeInfo.previewLink}
            />;
        }):
        <h5 className="text-muted">No Results to Display</h5>}
        </div>
    )
}

export default SavedBooks