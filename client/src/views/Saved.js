import React from 'react'
import Banner from '../components/Banner'
import SavedBooks from '../components/SavedBooks'

function Saved(){
    return(
        <div className="container-fluid">
            <Banner/>
            <SavedBooks/>
        </div>
    )
}

export default Saved