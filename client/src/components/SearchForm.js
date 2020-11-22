import React from 'react'

function SearchForm(){
    return(
        <div class="card bg-dark text-white">
            <h4>Book Search</h4>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
        
    )
}

export default SearchForm