import axios from 'axios'
require('dotenv').config()
const APIkey = process.env.REACT_APP_APIKey

export default {
    searchBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBD-PuZyjpsyWM7sqfplPDvDCTLzZ6bMYA`)
    },
    saveBooks: function(bookData){
        return axios.post("/api/books", bookData)
    },
    getBooks: function(){
        console.log('[API.getBooks] function reached')
        return axios.get("/api/books")
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id)
    }
}