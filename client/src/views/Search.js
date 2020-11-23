import React from 'react'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

function Search(){
    return(
        <div className="container-fluid">
            <Banner/>
            <SearchForm/>
            <SearchResults />
        </div>
    )
}

export default Search