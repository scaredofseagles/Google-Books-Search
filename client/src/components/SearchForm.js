import React from 'react'

function SearchForm(){
    return(
        <div className="card bg-light text-black">
            <h4>Book Search</h4>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Book Title" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
        
    )
}

export default SearchForm