import React, { useState, useEffect } from 'react'
import Card from './Card'
import API from '../utils/API'

function SavedBooks(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks();
    }, []);

    async function loadBooks(){
        console.log('[loadBooks] function reached')
        let result = await API.getBooks()
        // setBooks(result)
        console.log('[loadBooks]',  result)
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
            link={book.volumeInfo.previewLink}
            />;
        }):
        <h5 className="text-muted">No Results to Display</h5>}
        </div>
    )
}

export default SavedBooks