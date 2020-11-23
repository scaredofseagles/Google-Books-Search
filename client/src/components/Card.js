import React from 'react'

function Card(){
    return(
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..."  alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="btn-group float-right" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-primary">View</button>
                        <button type="button" class="btn btn-success">Save</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card